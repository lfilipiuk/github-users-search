import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { QueryResult } from "../../types/githubUserSearch";
import UserCard from "./UserCard";

const SEARCH_USERS = gql`
  query SearchUsers($query: String!, $cursor: String) {
    search(type: USER, query: $query, first: 10, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ... on User {
            id
            login
            avatarUrl
            name
          }
        }
      }
    }
  }
`;

type UserListProps = {
  searchQuery: string;
};

const UserList = ({ searchQuery }: UserListProps) => {
  const { data, loading, error, fetchMore } = useQuery<QueryResult>(
    SEARCH_USERS,
    {
      variables: { query: `${searchQuery} in:login` },
      skip: !searchQuery,
    }
  );

  const fetchMoreUsers = () => {
    if (!data) return;

    fetchMore({
      variables: { cursor: data.search.pageInfo.endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.search.edges;
        const pageInfo = fetchMoreResult.search.pageInfo;

        return newEdges.length
          ? {
              search: {
                __typename: prevResult.search.__typename,
                edges: [...prevResult.search.edges, ...newEdges],
                pageInfo,
              },
            }
          : prevResult;
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data && (
        <InfiniteScroll
          dataLength={data.search.edges.length}
          next={fetchMoreUsers}
          hasMore={data.search.pageInfo.hasNextPage}
          loader={<p>Loading more users...</p>}
        >
          <ul role="list" className="divide-y divide-gray-100">
            {data.search.edges.map(({ node: user }) => (
              user.id && <UserCard key={user.id} user={user} />
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default UserList;

import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { QueryResult } from "../../types/githubUserSearch";
import UserCard from "./UserCard";
import Spinner from "../ui/Spinner";
import errorImage from "../../assets/search-error.png";
import searchResultsImage from "../../assets/search-results.png";
import noResultsImage from "../../assets/no-results.png";

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

  if (searchQuery.length === 0)
    return (
      <>
        <div
          className={
            "flex items-center justify-center h-full w-full flex-col -translate-y-7"
          }
        >
          <img src={searchResultsImage} alt="error" className="w-1/3 mx-auto" />
          <p className={"text-gray-500 text-sm w-28 text-center"}>
            Search results will appear here
          </p>
        </div>
      </>
    );

  if (loading)
    return (
      <div
        className={
          "flex items-center justify-center h-full w-full flex-col -translate-y-7"
        }
      >
        <Spinner />
      </div>
    );

  if (error)
    return (
      <>
        <div>
          <img src={errorImage} alt="error" className="w-1/2 mx-auto" />
          <p className="text-center text-2xl font-bold">Something went wrong</p>
        </div>
      </>
    );

  if (!data?.search.edges.length) {
    return (
      <div
        className={
          "flex items-center justify-center h-full w-full flex-col -translate-y-7"
        }
      >
        <img src={noResultsImage} alt="error" className="w-1/3 mx-auto" />
        <p className={"text-gray-500 text-sm w-28 text-center"}>
          No results found
        </p>
      </div>
    );
  }

  return (
    <div className="pt-3">
      <div
        className="h-[33rem] overflow-scroll hide-scrollbar"
        id="scrollableDiv"
      >
        {data && (
          <InfiniteScroll
            dataLength={data.search.edges.length}
            next={fetchMoreUsers}
            hasMore={data.search.pageInfo.hasNextPage}
            loader={<p>Loading more users...</p>}
            scrollableTarget="scrollableDiv"
          >
            <ul role="list" className="divide-y divide-gray-100">
              {data.search.edges.map(
                ({ node: user }) =>
                  user.id && <UserCard key={user.id} user={user} />
              )}
            </ul>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default UserList;

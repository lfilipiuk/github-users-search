import React from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { QueryResult } from "@/types/githubUserSearch";
import UserListItem from "./UserListItem";
import { SEARCH_USERS } from "@/api/queries";
import EmptyState from "./UserListStates/EmptyState";
import LoadingState from "./UserListStates/LoadingState";
import ErrorState from "./UserListStates/ErrorState";
import NoResultsState from "./UserListStates/NoResultsState";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const UserList = () => {
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const { data, loading, error, fetchMore } = useQuery<QueryResult>(
    SEARCH_USERS,
    {
      variables: { query: `${searchQuery} in:login` },
      skip: !searchQuery,
    }
  );

  const isSearchStringEmpty = searchQuery.length === 0;
  const hasUsers = (data?.search.edges.length ?? 0) > 0;
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

  if (isSearchStringEmpty) return <EmptyState />;

  if (loading) return <LoadingState />;

  if (error) return <ErrorState />;

  if (!hasUsers) return <NoResultsState />;

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
                  user.id && <UserListItem key={user.id} user={user} />
              )}
            </ul>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default UserList;

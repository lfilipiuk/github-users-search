import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserListItem from "./UserListItem";
import EmptyState from "./UserListStates/EmptyState";
import LoadingState from "./UserListStates/LoadingState";
import ErrorState from "./UserListStates/ErrorState";
import NoResultsState from "./UserListStates/NoResultsState";
import { searchQueryVar } from "@/utils/searchState";
import { useReactiveVar } from "@apollo/client";
import {useUserSearchQuery} from "@/utils/useUserSearchQuery";

const UserList = () => {
  const searchQuery = useReactiveVar(searchQueryVar);
  const { data, loading, error, fetchMoreUsers } = useUserSearchQuery(searchQuery);

  const isSearchStringEmpty = searchQuery.length === 0;
  const hasUsers = (data?.search.edges.length ?? 0) > 0;

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

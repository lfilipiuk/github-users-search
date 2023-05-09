import { useQuery } from "@apollo/client";
import { QueryResult } from "@/types/githubUserSearch";
import { SEARCH_USERS } from "@/utils/queries";

export const useUserSearchQuery = (searchQuery: string) => {
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
    });
  };

  return { data, loading, error, fetchMoreUsers };
};

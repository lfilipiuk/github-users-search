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

    return { data, loading, error, fetchMoreUsers };
};

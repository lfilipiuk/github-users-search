import { useQuery } from "@apollo/client";
import { UserProfile } from "@/types/githubUserSearch";
import { SEARCH_USER_DETAILS } from "@/utils/queries";

export const useUserDetailsQuery = (login: string) => {
    const { data, loading, error } = useQuery<{ user: UserProfile }>(
        SEARCH_USER_DETAILS,
        {
            variables: { login },
        }
    );

    return { data, loading, error };
};

export type PageInfo = {
    hasNextPage: boolean;
    endCursor: string;
};

export type UserSummary = {
    id: string;
    login: string;
    avatarUrl: string;
    name: string;
};

export type UserProfile = {
    id: string;
    login: string;
    avatarUrl: string;
    name: string;
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
    company: string | null;
    email: string | null;
    websiteUrl: string | null;
};

export type SearchResult = {
    __typename: string;
    pageInfo: PageInfo;
    edges: Array<{
        node: UserSummary;
    }>;
};

export type QueryResult = {
    search: SearchResult;
};
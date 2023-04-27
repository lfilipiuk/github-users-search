export type PageInfo = {
    hasNextPage: boolean;
    endCursor: string;
};

export type UserListItem = {
    id: string;
    login: string;
    avatarUrl: string;
    name: string;
};

export type UserDetailsItem = {
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
        node: UserListItem;
    }>;
};

export type QueryResult = {
    search: SearchResult;
};
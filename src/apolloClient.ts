import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import {relayStylePagination} from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
});

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                search: relayStylePagination(["query"]),
            },
        },
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache,
});

export default client;


import { gql } from "@apollo/client";
export const SEARCH_USERS = gql`
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

export const SEARCH_USER_DETAILS = gql`
  query UserDetails($login: String!) {
    user(login: $login) {
      avatarUrl
      name
      followers {
        totalCount
      }
      following {
        totalCount
      }
      company
      email
      websiteUrl
    }
  }
`;
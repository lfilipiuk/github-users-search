# Development notes
This section contains my reflections during development of the app. It is intended to provide a deeper insight into the development process and the rationale behind certain decisions.

## Selection of tools
### React
React was chosen as a requirement for this project.

### TypeScript
TypeScript was chosen for its ability to catch errors at compile time, which helps improve the overall quality of the codebase.

### Apollo Client
Apollo Client is a comprehensive state management library for JavaScript that integrates with GraphQL. It was selected for its ease of use, caching capabilities, and seamless integration with React.

### Redux
Redux was chosen for global state management. In the application it remembers the current search, but can be used to expand global state management as the application grows.

### GraphQL
GraphQL was chosen for its flexibility, strong typing, and ability to fetch only the necessary data. GraphQL provides a more efficient and organized approach to data retrieval compared to traditional REST APIs.

### Tailwind CSS
Tailwind CSS is a highly customizable, utility-first CSS framework that makes it easy to style modern web applications. It was selected for its ease of use, modularity, and focus on responsive design. Tailwind CSS enables rapid prototyping and helps maintain a clean and consistent design across the app.

### Tailwind UI
Tailwind UI is a library of pre-built components and templates built with Tailwind CSS. It was selected for its ease of use and ability to speed up the development process.

### Heroicons
Heroicons is a library of free SVG icons built by the Tailwind CSS team. It was selected for its ease of use and ability to speed up the development process.


## REST or GraphQL
Both REST and GraphQL are suitable for implementing the Github Users Search Tool, but each has its own advantages and drawbacks.

1. REST:
    - Advantages:
        - Simpler to set up and use, with a lower learning curve.
        - Familiar to many developers, as it has been the standard for a long time.
    - Drawbacks:
        - Over-fetching or under-fetching of data can occur since the API returns a fixed set of data for each endpoint.
        - Requires multiple requests to different endpoints to fetch or update related data, resulting in increased complexity.

2. GraphQL:
    - Advantages:
        - Allows clients to request only the data they need, reducing over-fetching or under-fetching issues.
        - Simplifies complex queries by enabling the retrieval of related data in a single request.
        - Provides real-time updates with subscriptions, which can be useful in some applications.
    - Drawbacks:
        - Has a steeper learning curve compared to REST.
        - Requires additional tooling and libraries, such as Apollo Client, to manage state and interact with the GraphQL API.

In the context of the Github Users Search Tool GraphQL has been chosen due to its flexibility and ability to fetch only the required data in a single request. This can potentially result in better performance and reduced data usage. Additionally, the Github GraphQL API provides a comprehensive set of features that can simplify querying and retrieving user information.

## Pagination with GraphQL
The fetchMoreUsers function is responsible for fetching additional GitHub users based on the search query when the user scrolls down and reaches the end of the displayed user list. This function is used to implement infinite scroll pagination in the UserList component.

1. The function checks if the data object is available. If it's not, the function returns early without doing anything.
```typescript
if (!data) return;
```

2.The function then calls the fetchMore method provided by the Apollo useQuery hook. It passes an object with two properties:
- variables: This object contains the cursor property, which is set to the current end cursor of the search results. The end cursor is used by the GitHub API to determine where to start fetching additional users.
- updateQuery: This is a callback function that is called with two arguments: prevResult and { fetchMoreResult }. The prevResult argument represents the current query result, and the fetchMoreResult represents the new data fetched by the fetchMore method.
```typescript
fetchMore({
  variables: { cursor: data.search.pageInfo.endCursor },
  updateQuery: (prevResult, { fetchMoreResult }) => {
    // ...
  },
});
```

3.Inside the updateQuery callback function, the function extracts the newEdges and pageInfo properties from the fetchMoreResult object. The newEdges is an array of additional user nodes fetched from the GitHub API, and the pageInfo is an object containing information about the pagination.
```typescript
const newEdges = fetchMoreResult.search.edges;
const pageInfo = fetchMoreResult.search.pageInfo;
```

4.The function then checks if there are any new edges (users) in the newEdges array. If there are new users, it updates the query result by merging the previous user list with the new user list and updates the pageInfo object. If there are no new users, it returns the previous query result without making any changes.
```typescript
return newEdges.length
  ? {
      search: {
        __typename: prevResult.search.__typename,
        edges: [...prevResult.search.edges, ...newEdges],
        pageInfo,
      },
    }
  : prevResult;
```
By implementing the fetchMoreUsers function, the UserList component can seamlessly fetch and display additional users as the user scrolls down the page, providing a smooth infinite scroll pagination experience.

## Refactoring

### Memoization
The UserDetailsContent component was memoized using React.memo() to optimize its performance. By memoizing the component, React will only re-render it when its props have changed. This means that if the parent component re-renders, the memoized UserDetailsContent will not be re-rendered unnecessarily if its props haven't changed.

In this case, memoizing the component can help ensure that the user details are only re-rendered when the actual user data changes, rather than any time the parent component updates for other reasons.

Another reason for memoization was the fact, it was brought up during the interview :)

## Redux

When the user navigated back from the user details page to the main search page, the previous search results where not retained, and the user had to perform the search again.

I implemented the Redux library to manage the global state of the search query, enabling the app to preserve the last search results when navigating back to the main search page.

## Code Review

I had my code reviewed by experienced developers, and I received some valuable feedback. I have implemented some of the suggestions, and I have added the rest to my backlog.

### Code style (need to add eslint)
Eslint is a static code analysis tool for identifying problematic patterns found in JavaScript and TypeScript code. It's a great way to enforce a consistent style across your codebase. This can include anything from enforcing the use of semi-colons, to the way your code is indented, to more complex patterns. By adding eslint, you're making it easier for other developers to understand and contribute to your code.

I added ESLint to my configuration, and I will use it in the future.

### Redux is extra. It’s possible to use reactive variables instead or just local state with query params
Redux is a predictable state container for JavaScript applications and is often used in larger applications for state management. However, in smaller applications or in certain scenarios, using Redux can be overkill and can add unnecessary complexity. Using local state with query parameters can be a simpler and more straightforward approach for state management in some cases. Reactive variables are another option for state management that can be less complex and more performant than Redux in certain scenarios.

Reactive variables are a powerful feature of Apollo Client that can be used to manage local state in your application, providing an alternative to more complex state management libraries like Redux.

Unlike Redux, which requires actions and reducers to update state, reactive variables provide a simpler API for state management: you can read their current value by calling them as a function without arguments, and update their value by calling them with a new value as an argument. Reactive variables can be used anywhere in your code and do not require a particular context to function.

To use reactive variables in a React component, you can make use of the useReactiveVar hook provided by Apollo Client. This hook subscribes to changes in the reactive variable and causes your component to re-render whenever the reactive variable's value changes.

### It’s better to move useQuery with search to separate hook

In the context of our application, we have two main data fetching needs: searching users based on a query string, and fetching the details of a specific user. To make our React components cleaner and more focused on rendering logic, we extracted these data fetching operations into two custom hooks: `useUserSearchQuery` and `useUserDetailsQuery`.

#### `useUserSearchQuery` Hook

This hook is used to search users based on a query string. It internally uses the Apollo Client's `useQuery` hook with the `SEARCH_USERS` GraphQL query. The query string is passed as a variable to the `useQuery` hook.

#### `useUserDetailsQuery` Hook

This hook is used to fetch the details of a specific user. It also uses the `useQuery` hook but with the `SEARCH_USER_DETAILS` GraphQL query. The username (login) is passed as a variable to the `useQuery` hook.

#### Why Two Hooks?

Each hook is designed for a specific purpose. Keeping them separate helps maintain the single responsibility principle, making our code easier to understand, maintain, and test. It also enhances reusability since each hook can be used in any other component where the same data fetching operation is needed.

Although both hooks use the `useQuery` hook, the GraphQL queries and the variables passed to them are different. Therefore, it makes sense to keep them in separate hooks instead of combining them into one. This way, if we need to modify how we fetch user details, we only need to modify `useUserDetailsQuery`, without affecting `useUserSearchQuery`, and vice versa.

### Key inside UserDetailsContent is extra

In React, a `key` is a special string attribute you need to include when creating lists of elements. If using a key in `UserDetailsContent` and it's not being used for the purpose of identifying elements in a list, then it might not be necessary.

It was removed.

### It’s better to use relayStylePagination instead of updateQuery inside fetchMore

Apollo Client offers a number of utility functions that allow you to deal with common tasks when interacting with a GraphQL API. One such utility is `relayStylePagination`, a function that provides an out-of-the-box solution for handling pagination in the style of the Relay specification.

Previously, I was manually managing the process of updating the cache when fetching more data, using the updateQuery option of the fetchMore function.

I have now refactored Apollo Client setup to use relayStylePagination for handling pagination automatically. This has simplified our fetchMoreUsers function in the useUserSearchQuery hook, as I no longer need to provide an updateQuery function. The merging of new and existing page data is handled by relayStylePagination.

I wish I'd known about this. It would have saved me a lot of time.
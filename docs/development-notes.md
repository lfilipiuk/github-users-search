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

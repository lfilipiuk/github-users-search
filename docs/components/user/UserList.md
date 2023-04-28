# UserList

The `UserList` component is responsible for fetching, displaying, and managing the list of GitHub users based on the search query. It leverages Apollo Client for GraphQL queries and Infinite Scroll for pagination.

## Usage

The `UserList` component should be used in conjunction with the `SearchBar` component to allow users to search for and view GitHub users.

```jsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';

const GithubUserSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar/>
      <UserList />
    </div>
  );
};

export default GithubUserSearch;
```

## Dependencies
The `UserList` component depends on the following libraries and components:
- @apollo/client: Used for fetching data from the GitHub GraphQL API.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component): Used for implementing infinite scroll pagination.
- [UserListItem](UserListItem.md): Custom component used to display individual user information.
- [EmptyState, LoadingState, ErrorState, NoResultsState](UserListStates.md): Custom components to represent different states of the user list.

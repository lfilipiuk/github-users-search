# UserListStates

This file documents the four state components used in the user list: `EmptyState`, `ErrorState`, `LoadingState`, and `NoResultsState`. Each component represents a different state of the user list.

## EmptyState

This component displays a message and an image indicating that the user list is empty and search results will appear once a search is performed.

### Usage

```jsx
<EmptyState />
```

## ErrorState

This component displays an error message and an image indicating that something went wrong while loading the user list.

### Usage

```jsx
<ErrorState />
```

## LoadingState

This component displays a loading spinner while the user list is being fetched.

### Usage

```jsx
<LoadingState />
```

## NoResultsState

This component displays a message and an image indicating that no results were found for the user search.

### Usage

```jsx
<NoResultsState />
```

These state components can be used individually based on the state of the user list. For example, when the user list is empty, the EmptyState component should be rendered. Similarly, when there is an error, the ErrorState component should be displayed, and so on. By using these state components, the application can provide clear and informative feedback to the user about the current state of the user list.
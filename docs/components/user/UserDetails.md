# UserDetails

The `UserDetails` component displays detailed information about a selected GitHub user. It fetches the user's details from the GitHub API and renders a `UserDetailsContent` component with the relevant data.

## Props

This component does not have any props.

## Usage

```jsx
import UserDetails from "./UserDetails";

<UserDetails />;
```

## Implementation

The `UserDetails` component uses the `useParams` hook from `react-router-dom` to extract the `login` parameter from the URL. It then uses the `useQuery` hook from `@apollo/client` to fetch the user's details from the GitHub API.

While the data is being fetched, a `LoadingState` component is displayed. If there's an error during the fetch, an `ErrorState` component is shown. If no data is returned, a `NoResultsState` component is displayed.

Once the data is available, the component destructures the relevant properties from the `data.user` object and sets the `displayName` variable to the user's name or login.

The `handleBackButtonClick` function is defined to navigate back to the search page when the "Back to Search" button is clicked. The `websiteUrlParsed` variable is set using the `parseWebsiteUrl` utility function to ensure that the user's website URL is correctly displayed.

If the `login` or `displayName` properties are not available, a `NoResultsState` component is shown.

Finally, the component renders the [UserDetailsContent](UserDetailsContent.md) component with the appropriate data, passing the relevant properties as props.

### UserDetailsContent

The `UserDetailsContent` component displays detailed information about a GitHub user, including their avatar, name, follower and following counts, company, email, and website URL. It also provides a link to visit the user's GitHub profile.

#### Props

- `login`: string (required) - The GitHub user's login (username).
- `avatarUrl`: string (required) - The URL to the GitHub user's avatar image.
- `displayName`: string (required) - The GitHub user's display name, which is either their name or login.
- `followers`: number (required) - The number of followers the GitHub user has.
- `following`: number (required) - The number of users the GitHub user is following.
- `company`: string | null - The GitHub user's company, if available.
- `email`: string | null - The GitHub user's email, if available.
- `websiteUrl`: string | null - The GitHub user's website URL, if available.
- `websiteUrlParsed`: string (required) - The parsed GitHub user's website URL for display.

#### Usage

```jsx
import UserDetailsContent from "./UserDetailsContent";

<UserDetailsContent
  login="exampleuser"
  avatarUrl="https://example.com/avatar.jpg"
  displayName="Example User"
  followers={100}
  following={50}
  company="Example Inc."
  email="example@example.com"
  websiteUrl="www.example.com"
  websiteUrlParsed="https://www.example.com"
/>;
```

#### Implementation

The `UserDetailsContent` component is a memoized functional component that takes the props listed above as arguments.

The `UserContactInfo` component is rendered with the `company`, `email`, `websiteUrl`, and `websiteUrlParsed` props. Below this, a "Visit GitHub" link is displayed and the link directs the user to the GitHub user's profile page.

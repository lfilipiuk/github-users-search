# UserContactInfo

This component is a memoized functional component that displays a user's contact information, including company, email, and website. The component uses the React.memo function to optimize rendering performance by only updating when its properties change.

## Props

- `company` (string | null): The user's company name.
- `email` (string | null): The user's email address.
- `websiteUrl` (string | null): The user's website URL (raw).

## Usage

```jsx
<UserContactInfo
  company="Example Company"
  email="example@example.com"
  websiteUrl="https://www.example.com"
/>
```

# GitHub Users Search Tool

GitHub Users Search Tool is a React-based web application that allows users to search for GitHub users by their usernames. The application displays a filtered list of users, with infinite scroll pagination for a smooth browsing experience. When you click on a user, the app navigates to a user details page, which provides additional information about the selected user.

## Documentation
For component documentation, please see the [components](docs/components.md) section.

For development reflections, please see the [development-notes](docs/development-notes.md) section.

## Features

- Search for GitHub users by username
- Infinite scroll pagination
- User profile page with additional information:
  - Avatar image
  - Name
  - Followers
  - Following
  - Company
  - Email
  - Website

## Technologies

- React
- TypeScript
- GraphQL with Apollo Client
- Redux
- UI libraries (Tailwind with Tailwind UI and Flowbite)

## Getting Started

1. Clone the repository:
git clone https://github.com/lfilipiuk/github-users-search.git
cd github-users-search

2. Create a `.env` file in the root directory and add your GitHub token: `VITE_GITHUB_TOKEN=your-github-token-goes-here`
- Token can be generated [here](https://github.com/settings/tokens).
- Make to select correct scopes for your token. You need `repo` as well as `read:user` and `email:user` from `user`.

3. Install dependencies:
`npm install`

4. Start the development server:
`npm dev`

5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Usage

1. On the main page, enter a GitHub username in the input field.
2. Browse the filtered list of users. Scroll down to load more users. App also displays if no usernames match search. 
3. Click on a user to view their profile page with additional information.

## Contributing

Please feel free to submit issues or pull requests for any bugs, improvements, or feature requests.

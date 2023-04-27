# GitHub Users Search Tool

GitHub Users Search Tool is a React-based web application that allows users to search for GitHub users by their usernames. The application displays a filtered list of users, with infinite scroll pagination for a smooth browsing experience. When you click on a user, the app navigates to a user's profile page, which provides additional information about the selected user.

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
- GraphQL
- State management (Apollo)
- UI libraries (Tailwind with Tailwind UI and Flowbite)


## Getting Started

1. Clone the repository:
git clone https://github.com/your-username/github-users-search-tool.git
cd github-users-search-tool

2. Create a `.env` file in the root directory and add your GitHub token:

`VITE_GITHUB_TOKEN=your-github-token-goes-here`

3. Install dependencies:
`npm install`

4. Start the development server:
`npm start`

5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Usage

1. On the main page, enter a GitHub username in the input field.
2. Browse the filtered list of users. Scroll down to load more users.
3. Click on a user to view their profile page with additional information.

## Contributing

Please feel free to submit issues or pull requests for any bugs, improvements, or feature requests.

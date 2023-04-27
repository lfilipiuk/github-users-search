# SearchBar Component

The `SearchBar` component provides a search input field for the user to enter a query to search for GitHub users.

## Props

The component takes the following props:

- `searchQuery` (string): The current search query input by the user.
- `setSearchQuery` (function): A function to update the search query state in the parent component.

## Usage

```jsx
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Other components */}
    </div>
  );
}
```
## Functionality

The SearchBar component has the following features:
1. Displays an input field for the user to enter their search query.
2. Includes a magnifying glass icon on the left side of the input field.
3. Updates the parent component's state when the user types in the search field using the setSearchQuery function prop.
4. Provides a "Clear" button on the right side of the input field when the user has entered a query, allowing them to easily clear the search field.

## Event Handlers
The component has two main event handlers:
1. handleSearchInput: Handles changes in the input field by updating the searchQuery state in the parent component.
2. clearUserSearch: Handles clicks on the "Clear" button, resetting the search query and clearing the input field.

## Styling
The component uses Tailwind CSS for styling, with a combination of utility classes to create a clean and functional design.
It is a modified version of Flowbite Tailwind CSS Search Bar component, which can be found here: https://flowbite.com/docs/forms/search-input/
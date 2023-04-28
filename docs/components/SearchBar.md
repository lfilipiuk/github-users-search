# SearchBar Component

The `SearchBar` component provides a search input field for the user to enter a query to search for GitHub users.

## Usage

```jsx
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar/>
      {/* Other components */}
    </div>
  );
}
```
## Functionality

The SearchBar component has the following features:
1. Displays an input field for the user to enter their search query.
2. Updates the state when the user types in the search field.
3. Provides a "Clear" button on the right side of the input field when the user has entered a query, allowing them to easily clear the search field.

## Event Handlers
The component has two main event handlers:
1. handleSearchInput: Handles changes in the input field by updating the searchQuery state.
2. clearUserSearch: Handles clicks on the "Clear" button, resetting the search query and clearing the input field.

## Styling
The component uses Tailwind CSS for styling, with a combination of utility classes to create a clean and functional design.
It is a modified version of Flowbite Tailwind CSS Search Bar component, which can be found here: https://flowbite.com/docs/forms/search-input/
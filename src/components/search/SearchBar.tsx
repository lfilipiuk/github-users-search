import React from "react";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const handleSearchInput = (event: { target: { value: string } }) => {
    setSearchQuery(event.target.value);
  };

  const clearUserSearch = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <>
      <label
        htmlFor="default-search"
        className="mb-2 text-md text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full h-12 p-2 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearchInput}
        />
        {searchQuery.length > 0 && (
          <button
            className="text-blue-700 absolute right-2.5 bottom-0.5 text-md px-2 py-2"
            onClick={(e) => clearUserSearch(e)}
          >
            Clear
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBar;

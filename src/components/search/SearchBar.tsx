import React, { ChangeEvent, MouseEvent} from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {searchQueryVar} from "@/utils/searchState";

import {setSearchQuery} from "@/utils/searchState";
import {useReactiveVar} from "@apollo/client";

const SearchBar = () => {
    const searchQuery = useReactiveVar(searchQueryVar);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setSearchQuery(query);
  };

  const clearUserSearch = (e: MouseEvent<HTMLButtonElement>) => {
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
          <MagnifyingGlassIcon
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full h-12 p-2 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 searchInput"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearchInput}
        />
        {searchQuery.length > 0 && (
          <button
            className="text-blue-700 absolute right-2.5 bottom-1 text-md px-2 py-2"
            onClick={clearUserSearch}
          >
            Clear
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBar;

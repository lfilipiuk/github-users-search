import React from 'react';

type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery } : SearchBarProps) => {
    const handleSearchInput = (event: { target: { value: string; }; }) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300">
            <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                Github username
            </label>
            <input
                type="text"
                name="name"
                id="name"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Search for a Github user"
                value={searchQuery}
                onChange={handleSearchInput}
            />
        </div>
    )
}

export default SearchBar;
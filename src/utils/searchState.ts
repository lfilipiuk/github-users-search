import { makeVar } from '@apollo/client';
export const searchQueryVar = makeVar("");
export const setSearchQuery = (newQuery : string) => {
    searchQueryVar(newQuery);
};

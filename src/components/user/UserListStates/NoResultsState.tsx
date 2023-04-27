import React from "react";
import noResultsImage from "@/assets/no-results.png";

const NoResultsState = () => {
    return (
        <div className="flex items-center justify-center h-full w-full flex-col -translate-y-7">
            <img src={noResultsImage} alt="no results" className="w-1/3 mx-auto" />
            <p className="text-gray-500 text-sm w-28 text-center">No results found</p>
        </div>
    );
};

export default NoResultsState;
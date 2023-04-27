import React from "react";
import searchResultsImage from "@/assets/search-results.png";

const EmptyState = () => {
    return (
        <div className="flex items-center justify-center h-full w-full flex-col -translate-y-7">
            <img src={searchResultsImage} alt="error" className="w-1/3 mx-auto" />
            <p className="text-gray-500 text-sm w-28 text-center">
                Search results will appear here
            </p>
        </div>
    );
};

export default EmptyState;
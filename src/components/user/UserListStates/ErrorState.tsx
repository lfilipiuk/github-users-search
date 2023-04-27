import React from "react";
import errorImage from "@/assets/search-error.png";

const ErrorState = () => {
    return (
        <div>
            <img src={errorImage} alt="error" className="w-1/2 mx-auto" />
            <p className="text-center text-2xl font-bold">Something went wrong</p>
        </div>
    );
};

export default ErrorState;
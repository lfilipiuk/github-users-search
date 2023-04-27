import React from "react";
import Spinner from "@/components/ui/Spinner";

const LoadingState = () => {
    return (
        <div className="flex items-center justify-center h-full w-full flex-col -translate-y-7">
            <Spinner />
        </div>
    );
};

export default LoadingState;
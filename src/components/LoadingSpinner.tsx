import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-red-500 border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

import React from "react";

const NotFound = () => {
  return (
    <main className="h-[calc(100vh-48px)] flex items-center justify-center text-primary">
      <div className="flex items-center justify-around">
        <h2 className="text-4xl">404</h2>
        <div className="w-12 rotate-90 h-[0.5px] bg-primary"></div>
        <h2 className="font-normal text-black">
          This page could not be found.
        </h2>
      </div>
    </main>
  );
};

export default NotFound;

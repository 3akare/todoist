"use client";

const OpenDialog = ({ children }) => {
  return (
    <div
      className="relative flex justify-center items-center w-16 h-16 bg-primary rounded-full shadow-md ring-2 ring-secondary"
      onClick={() => dialogControl.showModal()}
    >
      {children}
    </div>
  );
};

export default OpenDialog;

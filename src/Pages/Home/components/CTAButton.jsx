import React from "react";

const CTAButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-chocolate text-white text-sm font-semibold shadow-sm cursor-pointer transition-all duration-200 hover:bg-chocolate/90 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-chocolate/20"
    >
      Create Product
    </button>
  );
};

export default CTAButton;

import React from "react";
import { HiFilter } from "react-icons/hi";

const Filter = () => {
  return (
    <button className="flex items-center justify-center gap-1.5 border border-gray-200 rounded-lg text-gray-600 bg-white shadow-sm cursor-pointer transition-colors duration-150 hover:bg-gray-100 hover:text-chocolate">
      <HiFilter className="text-lg" />
      <span className="text-sm">Filter</span>
    </button>
  );
};

export default Filter;

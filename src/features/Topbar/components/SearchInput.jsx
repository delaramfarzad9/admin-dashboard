import React from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";

const SearchInput = () => {
  return (
    <div className="relative h-10 w-full max-w-xs sm:w-72 flex items-center text-sm rounded-lg border border-gray-200 bg-gray-50 transition focus-within:bg-white focus-within:border-chocolate/40 focus-within:ring-4 focus-within:ring-chocolate/10">
      <HiOutlineSearch className="absolute left-3 text-gray-400 size-5 pointer-events-none" />
      <input
        type="text"
        className="size-full bg-transparent outline-none pl-10 pr-4 sm:pr-16 text-gray-800 placeholder:text-gray-400"
        placeholder="Search..."
      />
      <div className="absolute right-2 hidden sm:flex items-center px-1.5 py-0.5 rounded-md border border-gray-200 bg-white text-gray-400 select-none pointer-events-none">
        <MdKeyboardCommandKey className="size-4" />
        <kbd className="text-xs font-sans">K</kbd>
      </div>
    </div>
  );
};

export default SearchInput;

import React from "react";
import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex items-center text-chocolate bg-gray-100 rounded-md  shadow w-[256px] relative">
      <HiSearch className="absolute right-2" />
      <input
        type="text"
        placeholder="Search..."
        className="absolute size-full outline-none px-3 text-sm left-0 right-0 "
      />
    </div>
  );
};

export default Search;

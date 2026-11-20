import React from "react";
import Logo from "./Logo";
import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <div>
      <Link
        className="flex flex-row gap-1 items-center h-16 border-b border-gray-200"
        to="/"
      >
        <Logo />
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Panel
        </span>
      </Link>
    </div>
  );
};

export default SidebarHeader;

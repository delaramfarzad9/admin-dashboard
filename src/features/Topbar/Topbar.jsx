import React from "react";
import SearchInput from "./components/SearchInput";
import Proile from "./components/Profile";
import Divider from "./components/Divider";
import Notification from "./components/Notification";
import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 md:left-60 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex flex-row justify-between items-center gap-4 px-4 sm:px-6 z-20">
      {/* left side */}
      <div className="flex items-center gap-2 min-w-0">
        <button
          className="md:hidden p-2 rounded-lg text-chocolate hover:bg-gray-100 transition-colors duration-150"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <GiHamburgerMenu className="size-6" />
        </button>
        <SearchInput />
      </div>

      {/* right side */}
      <div className="flex flex-row items-center gap-3 sm:gap-4 shrink-0">
        <Notification />
        <Divider />
        <Proile />
      </div>
    </header>
  );
};

export default Topbar;

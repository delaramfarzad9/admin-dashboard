import React from "react";
import { AVATAR_URL } from "./../../../data/constants";

const Profile = () => {
  return (
    <div className="flex cursor-pointer items-center gap-3 select-none px-2 py-1.5 rounded-lg transition-colors duration-150 hover:bg-gray-100">
      <div className="size-10 shrink-0">
        <img
          className="size-full rounded-full object-cover ring-2 ring-chocolate/20"
          src={AVATAR_URL}
          alt="User Avatar"
        />
      </div>
      <div className="hidden sm:block leading-tight">
        <p className="text-sm font-semibold text-gray-900">John Raymond</p>
        <p className="text-xs text-gray-500">Administrator</p>
      </div>
    </div>
  );
};

export default Profile;

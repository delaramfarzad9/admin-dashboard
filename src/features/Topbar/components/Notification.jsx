import React from "react";
import { BiBell } from "react-icons/bi";

const Notification = () => {
  return (
    <button
      aria-label="Notifications"
      className="relative flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 cursor-pointer transition-colors duration-150 hover:bg-gray-100 hover:text-chocolate"
    >
      <BiBell className="text-[21px]" />
      <span className="absolute top-2 right-2.5 size-2 rounded-full bg-red-500 ring-2 ring-white" />
    </button>
  );
};

export default Notification;

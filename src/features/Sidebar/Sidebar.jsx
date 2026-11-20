import React from "react";
import SidebarHeader from "./components/SidebarHeader";
import Menu from "./components/Menu";
import SidebarFooter from "./components/SidebarFooter";
import menus from "../../data/menus.js";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col fixed h-screen w-60 bg-white border-r border-gray-200 px-4 pb-4 overflow-y-auto">
      <SidebarHeader />
      <Menu menus={menus} />
      <div className="grow min-h-6" />
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;

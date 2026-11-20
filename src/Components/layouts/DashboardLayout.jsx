import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../features/Sidebar/Sidebar";
import Topbar from "../../features/Topbar/Topbar";
import BackgroundOverlay from "../common/BackgroundOverlay";
import { useState } from "react";
import SidebarHeader from "../../features/Sidebar/components/SidebarHeader";
import Menu from "../../features/Sidebar/components/Menu";
import SidebarFooter from "../../features/Sidebar/components/SidebarFooter";
import menus from "../../data/menus.js";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main className="flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
    fixed top-0 left-0 h-screen w-60 z-50 bg-white flex flex-col
    border-r border-gray-200 px-4 pb-4 overflow-y-auto
    transform transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:hidden
  `}
      >
        <SidebarHeader />
        <Menu menus={menus} />
        <div className="grow min-h-6" />
        <SidebarFooter />
      </div>

      {/* main content area  */}
      <BackgroundOverlay />
      <section className="grow min-w-0 md:ml-60 pt-20 relative">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;

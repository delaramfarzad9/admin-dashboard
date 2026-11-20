import React from "react";
import { NavLink } from "react-router";
import clsx from "clsx";

const Menu = ({ menus }) => {
  return (
    <nav className="flex flex-col gap-6 mt-6">
      {menus.map((menu) => (
        <div key={menu.id}>
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {menu.title}
          </p>
          <div className="flex flex-col gap-1">
            {menu.items.map((nav) => (
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "bg-chocolate/10 text-chocolate"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                  )
                }
                key={nav.id}
                to={nav.href}
              >
                <nav.icon className="size-5 shrink-0" />
                <span>{nav.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Menu;

import React from "react";
import { NavLink } from "react-router";
import clsx from "clsx";

const Menu = ({ menus }) => {
  return (
    <div className="flex flex-col mt-10 font-semibold text-amber-900">
      {menus.map((menu) => (
        <div key={menu.id}>
          <p className="mb-6 tracking-tighter text-xs text-gray-400 ">
            {menu.title}
          </p>
          <div className="flex flex-col space-y-5 ml-4">
            {menu.items.map((nav) => (
              <NavLink
                className={({isActive})=>clsx("flex flex-row tracking-wide items-center gap-2 text-md px-2 py-1 transition-colors duration-200 ",
                    isActive
                     ? 'text-orange-700 font-bold before:w-1 before:absolute before:h-6 before:bg-orange-700 before:-left-4 before:rounded-r-full before:content-[""] relative'
                     : 'hover:text-orange-600') }
                key={nav.id}
                to={nav.href}
              >
                <nav.icon className="size-5" />
                <span>{nav.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

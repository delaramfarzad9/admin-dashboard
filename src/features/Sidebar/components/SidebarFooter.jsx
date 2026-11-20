import clsx from "clsx";

const SidebarFooter = ({ className }) => {
  return (
    <footer
      className={clsx(
        "pt-4 border-t border-gray-200 text-xs text-gray-400 leading-relaxed",
        className,
      )}
    >
      <p className="font-medium text-gray-500">SetCoffee Admin Panel</p>
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
};

export default SidebarFooter;

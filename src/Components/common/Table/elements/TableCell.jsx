import clsx from "clsx";
const TableCell = ({ children, className }) => {
  return (
    <div className={clsx(className, "line-clamp-1 font-medium text-gray-700")}>
      {children}
    </div>
  );
};

export default TableCell;

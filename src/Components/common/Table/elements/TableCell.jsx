import clsx from "clsx";
const TableCell = ({ children,className }) => {
  return <div className={clsx(className, "line-clamp-1  font-semibold")}>{children}</div>;
};

export default TableCell;

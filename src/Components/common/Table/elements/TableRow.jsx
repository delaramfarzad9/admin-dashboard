const TableRow = ({ children, className }) => {
  return (
    <div
      className={`flex *:h-16 *:flex *:items-center text-sm items-center *:px-5 flex-1 shrink!
*:flex-1 *:shrink border-b border-gray-100 last:border-b-0 transition-colors duration-150 hover:bg-chocolate/5 ${className}
`}
    >
      {children}
    </div>
  );
};

export default TableRow;

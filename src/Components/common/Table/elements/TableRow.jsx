const TableRow = ({ children,className }) => {
  return (
    <div
      className={`flex *:h-14 *:flex *:items-center text-sm items-center *:px-3 flex-1 shrink!
*:flex-1 *:shrink even:bg-zinc-100 ${className}
`}
    >
      {children}
    </div>
  );
};

export default TableRow;

const TableHead = ({ children,className }) => {
  return (
    <div
      className={`grow flex *:flex-1 *:shrink items-center text-sm bg-[#F6F8FA] h-10 *:grow *:px-3
text-[#666D80] *:font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export default TableHead;

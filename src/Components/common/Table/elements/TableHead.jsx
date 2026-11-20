const TableHead = ({ children, className }) => {
  return (
    <div
      className={`grow flex *:flex-1 *:shrink items-center text-sm bg-gray-50 border-b border-gray-200 h-11 *:grow *:px-5
text-gray-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default TableHead;

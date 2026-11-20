import TableHeader from "./elements/TableHeader";

const Table = ({ header, children }) => {
  return (
    <div className="min-w-full! rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden text-xl">
      {header && <TableHeader header={header} />}
      <div>{children}</div>
    </div>
  );
};

export default Table;

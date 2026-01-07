import TableHeader from "./elements/TableHeader";

const Table = ({ header, children }) => {
  return (
    <div className="mt-10 min-w-full! rounded-xl overflow-hidden text-xl">
      {header && <TableHeader header={header} />}
      <div>{children}</div>
    </div>
  );
};

export default Table;

import TableHeader from "./elements/TableHeader";

const Table = ({
  header = { title: "Items List", Buttons: undefined },
  children,
}) => {
  return (
    <div className="mt-10  min-w-full!  rounded-xl overflow-hidden text-xl">
      <TableHeader  header={header} />
      <div>{children}</div>
    </div>
  );
};

export default Table;

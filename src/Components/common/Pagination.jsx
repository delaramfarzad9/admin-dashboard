import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={(event) => onPageChange(event.selected)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName="flex items-center gap-1.5 my-8 justify-center select-none text-sm font-medium text-gray-600"
      pageClassName="rounded-lg cursor-pointer transition-colors duration-150 hover:bg-chocolate/10 hover:text-chocolate"
      pageLinkClassName="flex items-center justify-center min-w-9 h-9 px-2 cursor-pointer"
      activeClassName="bg-chocolate! text-white! pointer-events-none"
      previousClassName="rounded-lg cursor-pointer transition-colors duration-150 hover:bg-gray-100"
      previousLinkClassName="flex items-center justify-center h-9 px-3 cursor-pointer"
      nextClassName="rounded-lg cursor-pointer transition-colors duration-150 hover:bg-gray-100"
      nextLinkClassName="flex items-center justify-center h-9 px-3 cursor-pointer"
      disabledClassName="opacity-40 pointer-events-none"
      breakClassName="px-2 text-gray-400"
      previousLabel="Prev"
      nextLabel="Next"
      breakLabel="..."
    />
  );
};

export default Pagination;

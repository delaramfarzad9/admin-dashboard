
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ProductsGridView = ({ products}) => {
  const [currentPage, setCurrentPage] = useState(0);
      const rowsPerPage = 4; // how many products per page
      const offset = currentPage * rowsPerPage;
      const currentRows = products.slice(offset, offset + rowsPerPage);
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 mb-20 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 ">
        {currentRows.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

     <ReactPaginate
        pageCount={Math.ceil(products.length / rowsPerPage)}
        onPageChange={(event) => setCurrentPage(event.selected)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        // container
        containerClassName="flex items-center gap-4 my-10 justify-center select-none font-semibold text-gray-800"
        // page numbers
        pageClassName=" border border-chocolate  rounded-full cursor-pointer hover:scale-105 hover:bg-[#D4AF37]/80 transition-all duration-200"
        pageLinkClassName="block px-3 py-1 items-center justify-center w-full h-full"
        // active page
        activeClassName="bg-chocolate cursor-none! pointer-events-none! text-gray-100 border-chocolate"
        // previous + next buttons
        previousClassName="px-3 py-1 duration-200 hover:scale-105  cursor-pointer hover:text-lime-600 transition-all"
        previousLinkClassName="block items-center justify-center w-full h-full"
        nextClassName="px-3 py-1 duration-200 hover:scale-105 cursor-pointer hover:text-lime-600 transition-all"
        nextLinkClassName="block items-center justify-center w-full h-full"
        // disabled buttons (Prev on page 0, Next on last page)
        disabledClassName="opacity-40 cursor-not-allowed pointer-events-none!"
        // break (...)
        breakClassName="px-3 py-1 text-gray-500"
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel="..."
      />
    </>
  );
};

export default ProductsGridView;

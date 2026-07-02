import Table from "../../Components/common/Table/Table";
import TableHead from "../../Components/common/Table/elements/TableHead";
import TableHeadCell from "../../Components/common/Table/elements/TableHeadCell";
import TableBody from "../../Components/common/Table/elements/TableBody";
import TableRow from "../../Components/common/Table/elements/TableRow";
import TableCell from "../../Components/common/Table/elements/TableCell";
import { productsAllTableHeadRow } from "../../data/products";
import clsx from "clsx";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ProductsTableView = ( { products } ) => {
  const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 5; // how many products per page
    const offset = currentPage * rowsPerPage;
    const currentRows = products.slice(offset, offset + rowsPerPage);
  return (
    <>
    <Table header={null}>
      <TableHead className="grid grid-cols-7 gap-4">
       {productsAllTableHeadRow.map((cell) => (
          <TableHeadCell key={cell}>{cell}</TableHeadCell>
        ))}
      </TableHead>

      <TableBody>
         {currentRows.map((product) => (
          <TableRow key={product._id} className="grid grid-cols-7 gap-4 items-center ">
            <TableCell >{String(product._id).slice(0, 8)}...</TableCell>
            <TableCell >{product.title}</TableCell>
            <TableCell className="-ml-2">
              <img
                src={product.img}
                alt={product.title}
                className="w-20 h-20 rounded-md border border-gray-100"
              />
            </TableCell>
            <TableCell
              className={clsx(
                product.isPublished ? "success-badge" : "danger-badge",
                "badge ml-2"
              )}
            >
              {product.isPublished ? "public" : "private"}
            </TableCell>

            <TableCell>${Number(product.price || 0).toLocaleString()}</TableCell>
            <TableCell className="ml-5" >{product.entity}</TableCell>

            <TableCell>setting</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
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
  )
};

export default ProductsTableView;

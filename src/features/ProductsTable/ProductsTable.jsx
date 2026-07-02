import { Link } from "react-router";
import Table from "../../Components/common/Table/Table";
import { MdOpenInNew } from "react-icons/md";
import TableHead from "../../Components/common/Table/elements/TableHead";
import TableCell from "../../Components/common/Table/elements/TableCell";
import TableBody from "../../Components/common/Table/elements/TableBody";
import TableRow from "../../Components/common/Table/elements/TableRow";
import TableHeadCell from "../../Components/common/Table/elements/TableHeadCell";
import { FaUndo } from "react-icons/fa";
import clsx from "clsx";
import { productsTableHeadRow, products } from "../../data/products";
import RemoveProductIcon from "./components/RemoveProductIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditProducttIcon from "./components/EditProducttIcon";
import { useState,useEffect } from "react";
import ReactPaginate from "react-paginate";

const ProductsTable = () => {
  const [lastProducts, setLastProducts] = useState([]);
  const [lastDeleted, setLastDeleted] = useState(null);
  const [undoTime, setUndoTime] = useState(100); // percentage
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5; // how many products per page
  const offset = currentPage * rowsPerPage;
  const currentRows = lastProducts.slice(offset, offset + rowsPerPage);
useEffect(() => {
  const fetchProducts = async () => {
    const res = await fetch("https://react-js-cms.iran.liara.run/api/products");
    console.log("status:", res.status);
    const data = await res.json();
    console.log("data from API:", data);
    if (res.status === 200) {
      setLastProducts(data); // we'll adjust this after we see the log
    }
  };
  fetchProducts();
}, []);

  const Buttons = () => {
    return (
      <Link
        to={"/products"}
        className="underline font-bold hover:text-blue-400 text-blue-500 flex flex-row items-center justify-center gap-1"
      >
        <span>Products Page </span>
        <MdOpenInNew className="text-xl" />
      </Link>
    );
  };
  const removeProduct = async(id) => {
    const productToDelete = lastProducts.find((p) => p._id === id);
if (!productToDelete) return;
    setLastDeleted(productToDelete); // store for undo

    const newProducts = lastProducts.filter((p) => p._id !== id);
    setLastProducts(newProducts);
  const res = await fetch(`https://react-js-cms.iran.liara.run/api/products/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});
console.log("delete status:", res.status);
console.log("ID received by removeProduct:", id); 
console.log("Products list:", lastProducts);
console.log("ID received:", id);
console.log("Products before delete:", lastProducts);
console.log("Found product:", lastProducts.find(p => p._id === id));


    // Reset progress bar
    setUndoTime(100);
    // Countdown animation (5 seconds)
    const interval = setInterval(() => {
      setUndoTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 2; // 100 → 0 in ~5 seconds
      });
    }, 100);
    // Remove undo option after 5 seconds
    setTimeout(() => {
      setLastDeleted(null);
      clearInterval(interval);
    }, 5000);
  };
  //Undo delete: add the deleted product back, sort by ID to restore original order
  const undoDelete = () => {
    if (!lastDeleted) return; //If there’s nothing to undo, do nothing and exit.
// Since _id is a string (MongoDB ObjectId), you must sort using localeCompare:
    setLastProducts((prev) =>
      [...prev, lastDeleted].sort((a, b) => a._id.localeCompare(b._id))
    );

    setLastDeleted(null);
  };
  const changeProductVisibility = (id) => {
    const newProducts = lastProducts.map((lastProducts) => {
      return lastProducts._id === id
        ? { ...lastProducts, isPublished: !lastProducts.isPublished }
        : { ...lastProducts };
    });
    setLastProducts(newProducts);
  };

  return (
    <div>
      <Table header={{ title: "Products List", Buttons: Buttons }}>
        <TableHead>
          {productsTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {currentRows.map((lastProducts) => (
            <TableRow key={lastProducts._id}>
              <TableCell>{String(lastProducts._id).slice(0, 8)}...</TableCell>
              <TableCell>{lastProducts.title}</TableCell>
              <TableCell>
                <p
                  className={clsx(
                    lastProducts.isPublished ? "success-badge" : "danger-badge",
                    "badge"
                  )}
                >
                  {lastProducts.isPublished ? "Public" : "Private"}
                </p>
              </TableCell>
              <TableCell>
                $<span>{lastProducts.price.toLocaleString()}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <RemoveProductIcon
                    product={lastProducts}
                    handler={removeProduct}
                  />
                  <ChangeVisibilityIcon
                    product={lastProducts}
                    handler={changeProductVisibility}
                  />
                  <EditProducttIcon />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ReactPaginate
        pageCount={Math.ceil(lastProducts.length / rowsPerPage)}
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

      {/* undo toast  */}
      {lastDeleted && (
        <div
          className="
      fixed  right-1/3 mr-20 bottom-1/2 z-40 
      bg-gray-100  px-6 py-3 rounded-xl shadow-xl
      flex flex-col items-center gap-4  animate-fadeIn 
    "
        >
          <p className="text-sm opacity-90 font-bold">
            <span className="px-2 font-bold text-base text-amber-900">
              {lastDeleted.title}
            </span>
            was deleted{" "}
          </p>

          <button
            onClick={undoDelete}
            className="text-blue-400 hover:text-blue-500 font-medium underline flex flex-row gap-1 justify-center items-center"
          >
            <FaUndo /> Undo
          </button>

          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-100"
              style={{ width: `${undoTime}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;

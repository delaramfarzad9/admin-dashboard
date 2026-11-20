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
import { useState, useEffect } from "react";
import Pagination from "../../Components/common/Pagination";

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
      const res = await fetch(
        "https://react-js-cms.iran.liara.run/api/products",
      );
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
        className="flex items-center justify-center gap-1 text-sm font-semibold text-chocolate hover:underline"
      >
        <span>Products Page </span>
        <MdOpenInNew className="text-lg" />
      </Link>
    );
  };
  const removeProduct = async (id) => {
    const productToDelete = lastProducts.find((p) => p._id === id);
    if (!productToDelete) return;
    setLastDeleted(productToDelete); // store for undo

    const newProducts = lastProducts.filter((p) => p._id !== id);
    setLastProducts(newProducts);
    const res = await fetch(
      `https://react-js-cms.iran.liara.run/api/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log("delete status:", res.status);
    console.log("ID received by removeProduct:", id);
    console.log("Products list:", lastProducts);
    console.log("ID received:", id);
    console.log("Products before delete:", lastProducts);
    console.log(
      "Found product:",
      lastProducts.find((p) => p._id === id),
    );

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
      [...prev, lastDeleted].sort((a, b) => a._id.localeCompare(b._id)),
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
              <TableCell>
                <span className="font-mono text-xs text-gray-400">
                  {String(lastProducts._id).slice(0, 8)}...
                </span>
              </TableCell>
              <TableCell>
                <span className="font-semibold text-gray-900">
                  {lastProducts.title}
                </span>
              </TableCell>
              <TableCell>
                <p
                  className={clsx(
                    lastProducts.isPublished ? "success-badge" : "danger-badge",
                    "badge",
                  )}
                >
                  {lastProducts.isPublished ? "Public" : "Private"}
                </p>
              </TableCell>
              <TableCell>
                <span className="text-chocolate">$</span>
                <span className="font-semibold text-gray-900">
                  {lastProducts.price.toLocaleString()}
                </span>
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
      <Pagination
        pageCount={Math.ceil(lastProducts.length / rowsPerPage)}
        onPageChange={setCurrentPage}
      />

      {/* undo toast  */}
      {lastDeleted && (
        <div
          className="
      fixed bottom-6 left-1/2 -translate-x-1/2 z-40
      bg-white border border-gray-200 px-5 py-4 rounded-2xl shadow-xl
      flex flex-col items-center gap-3 animate-fadeIn
    "
        >
          <p className="text-sm text-gray-600">
            <span className="px-1 font-semibold text-gray-900">
              {lastDeleted.title}
            </span>
            was deleted{" "}
          </p>

          <button
            onClick={undoDelete}
            className="text-chocolate hover:underline text-sm font-semibold flex flex-row gap-1 justify-center items-center"
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

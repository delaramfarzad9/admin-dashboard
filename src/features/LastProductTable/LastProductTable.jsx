import { Link } from "react-router";
import Table from "../../Components/common/Table/Table";
import { MdOpenInNew } from "react-icons/md";
import TableHead from "../../Components/common/Table/elements/TableHead"
import TableCell from "../../Components/common/Table/elements/TableCell"
import TableBody from "../../Components/common/Table/elements/TableBody";
import TableRow from "../../Components/common/Table/elements/TableRow";
import TableHeadCell from "../../Components/common/Table/elements/TableHeadCell";
import { FaUndo } from "react-icons/fa";
import clsx from "clsx";
import {productsTableHeadRow,products} from "../../data/products" 
import RemoveProductIcon from "../LastProductTable/components/RemoveProductIcon"
import ChangeVisibilityIcon from "../LastProductTable/components/ChangeVisibilityIcon"
import EditProducttIcon from "../LastProductTable/components/EditProducttIcon"
import { useState } from "react";

const LastProductTable = () => {
  const [lastProducts, setLastProducts] = useState([...products]);
  const [lastDeleted, setLastDeleted] = useState(null);
  const [undoTime, setUndoTime] = useState(100); // percentage

  const Buttons = () => {
    return (
      <Link
        to={"/products"}
        className="underline font-bold hover:text-blue-400 text-blue-500 flex flex-row items-center justify-center gap-1"
      >
        <span>Products Page </span>
        <MdOpenInNew  className="text-xl"/>
      </Link>
    );

  };
const removeProduct = (id) => {
  const productToDelete = lastProducts.find(p => p.id === id);

  setLastDeleted(productToDelete); // store for undo

  const newProducts = lastProducts.filter(p => p.id !== id);
  setLastProducts(newProducts);

 // Reset progress bar
 setUndoTime(100);
 // Countdown animation (5 seconds)
 const interval = setInterval(() => { setUndoTime(prev => { if (prev <= 0) { clearInterval(interval); return 0; } return prev - 2;// 100 → 0 in ~5 seconds
 }); }, 100);
 // Remove undo option after 5 seconds
 setTimeout(() => { setLastDeleted(null); clearInterval(interval); }, 5000);
};
//Undo delete: add the deleted product back, sort by ID to restore original order
const undoDelete = () => {
  if (!lastDeleted) return;//If there’s nothing to undo, do nothing and exit.

  setLastProducts(prev =>
    [...prev, lastDeleted].sort((a, b) => a.id - b.id)
  );

  setLastDeleted(null);
};

  return (
    <div>
      <Table header={{ title: "Products List", Buttons: Buttons }}>
       <TableHead>
        {productsTableHeadRow.map((row)=>(<TableHeadCell key={row}>{row}</TableHeadCell>))}
   
       </TableHead>

       <TableBody>
        {lastProducts.map((product)=>
        <TableRow key={product.id}>
    <TableCell>{product.id}</TableCell>
    <TableCell>{product.title}</TableCell>
    <TableCell>
             <p
                  className={clsx(
                    product.isPublished ? "success-badge" : "danger-badge",
                    "badge"
                  )}
                >
                 {product.isPublished ? "Public" : "Private"}

                </p>
    </TableCell>
    <TableCell>$<span>{product.price.toLocaleString()}</span></TableCell>
   <TableCell>
     <div className="flex items-center gap-2">
                  <RemoveProductIcon  product={product}
                    handler={removeProduct} />
                  <ChangeVisibilityIcon />
                  <EditProducttIcon />
                </div>
   </TableCell>

</TableRow>
        )}

       </TableBody>
      </Table>
      {/* undo toast  */}
           {lastDeleted && (
  <div
    className="
      fixed   right-1/3 bottom-1/2 z-40 
      bg-gray-100  px-6 py-3 rounded-xl shadow-xl
      flex flex-col items-center gap-4  animate-fadeIn 
    "
  >
    <p className="text-sm opacity-90 font-bold"><span className="px-2 font-bold text-base text-amber-900">{lastDeleted.title}</span>was deleted </p>

    <button
      onClick={undoDelete}
      className="text-blue-400 hover:text-blue-500 font-medium underline flex flex-row gap-1 justify-center items-center"
    >
     <FaUndo/> Undo 
    </button>

    {/* Progress bar */}
    <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
      <div className="h-full bg-red-500 transition-all duration-100" style={{ width: `${undoTime}%` }} ></div>
    </div>
  </div>
)}

    </div>
  );
};

export default LastProductTable;

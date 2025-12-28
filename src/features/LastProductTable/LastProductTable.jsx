import { Link } from "react-router";
import Table from "../../Components/common/Table/Table";
import { MdOpenInNew } from "react-icons/md";
import TableHead from "../../Components/common/Table/elements/TableHead"
import TableCell from "../../Components/common/Table/elements/TableCell"
import TableBody from "../../Components/common/Table/elements/TableBody";
import TableRow from "../../Components/common/Table/elements/TableRow";
import TableHeadCell from "../../Components/common/Table/elements/TableHeadCell";
import clsx from "clsx";
import {productsTableHeadRow,products} from "../../data/products" 
import RemoveProductIcon from "../LastProductTable/components/RemoveProductIcon"
import ChangeVisibilityIcon from "../LastProductTable/components/ChangeVisibilityIcon"
import EditProducttIcon from "../LastProductTable/components/EditProducttIcon"


const LastProductTable = () => {
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

  return (
    <div>
      <Table header={{ title: "Products List", Buttons: Buttons }}>
       <TableHead>
        {productsTableHeadRow.map((row)=>(<TableHeadCell key={row}>{row}</TableHeadCell>))}
   
       </TableHead>

       <TableBody>
        {products.map((product)=>
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
                  <RemoveProductIcon />
                  <ChangeVisibilityIcon />
                  <EditProducttIcon />
                </div>
   </TableCell>

</TableRow>
        )}

       </TableBody>
      </Table>
    </div>
  );
};

export default LastProductTable;

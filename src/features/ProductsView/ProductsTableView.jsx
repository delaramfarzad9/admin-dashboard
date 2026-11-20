import Table from "../../Components/common/Table/Table";
import TableHead from "../../Components/common/Table/elements/TableHead";
import TableHeadCell from "../../Components/common/Table/elements/TableHeadCell";
import TableBody from "../../Components/common/Table/elements/TableBody";
import TableRow from "../../Components/common/Table/elements/TableRow";
import TableCell from "../../Components/common/Table/elements/TableCell";
import { productsAllTableHeadRow } from "../../data/products";
import clsx from "clsx";
import Pagination from "../../Components/common/Pagination";
import { useState } from "react";

const ProductsTableView = ({ products }) => {
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
            <TableRow
              key={product._id}
              className="grid grid-cols-7 gap-4 items-center "
            >
              <TableCell>
                <span className="font-mono text-xs text-gray-400">
                  {String(product._id).slice(0, 8)}...
                </span>
              </TableCell>
              <TableCell>
                <span className="font-semibold text-gray-900">
                  {product.title}
                </span>
              </TableCell>
              <TableCell>
                <img
                  src={product.img}
                  alt={product.title}
                  className="size-12 object-cover rounded-lg border border-gray-200"
                />
              </TableCell>
              <TableCell
                className={clsx(
                  product.isPublished ? "success-badge" : "danger-badge",
                  "badge",
                )}
              >
                {product.isPublished ? "public" : "private"}
              </TableCell>

              <TableCell>
                <span className="text-chocolate">$</span>
                <span className="font-semibold text-gray-900">
                  {Number(product.price || 0).toLocaleString()}
                </span>
              </TableCell>
              <TableCell>{product.entity}</TableCell>

              <TableCell className="text-gray-400">setting</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        pageCount={Math.ceil(products.length / rowsPerPage)}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProductsTableView;

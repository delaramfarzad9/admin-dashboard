import ProductCard from "./ProductCard";
import Pagination from "../../Components/common/Pagination";
import { useState } from "react";

const ProductsGridView = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 4; // how many products per page
  const offset = currentPage * rowsPerPage;
  const currentRows = products.slice(offset, offset + rowsPerPage);
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 mb-10 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 ">
        {currentRows.map((product) => (
          <ProductCard key={product._id ?? product.id} product={product} />
        ))}
      </div>

      <Pagination
        pageCount={Math.ceil(products.length / rowsPerPage)}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProductsGridView;

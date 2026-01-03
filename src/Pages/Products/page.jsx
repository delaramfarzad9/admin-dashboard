import { CiGrid41, CiViewTable } from "react-icons/ci";
import SectionTitle from "../../Components/common/SectionsTitle";
import { useState } from "react";
import { products } from "./../../data/products";
import ProductTableView from "../../features/ProductsView/ProductsTableView";
import ProductsGridView from "../../features/ProductsView/ProductsGridView";

const Products = () => {
  const [layoutType, setLayoutType] = useState("TABLE"); // or GRID
    const [allProducts, setAllProducts] = useState([...products]);

  const toggleLayout = () => {
    const layout = layoutType === "TABLE" ? "GRID" : "TABLE";
    setLayoutType(layout);
  };

  const Buttons = (
    <>
      <button
        onClick={toggleLayout}
        className="text-2xl size-10 flex justify-center items-center bg-gray-100 text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3]  duration-150 transition-all border-gray-100 border cursor-pointer shadow"
      >
        {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
      </button>

      <button className="bg-chocolate  px-3 py-2 rounded-md transition-all duration-200 text-gray-50 font-semibold  hover:scale-105 hover:bg-[#D4AF37]/80">Add product</button>
    </>
  );

  return (
    <>
     <div className="mx-5 flex flex-col ">
       <SectionTitle title="Products list"
       className="font-black!"
        Buttons={Buttons} />

      <section className="my-5 w-full! min-w-full!">
        {layoutType === "TABLE" ? (
          <ProductTableView products={products} setProducts={setAllProducts}/>
        ) : (
          <ProductsGridView products={products} />
        )}
      </section>
     </div>
    </>
  );
};

export default Products;

import { CiGrid41, CiViewTable } from "react-icons/ci";
import SectionTitle from "../../Components/common/SectionsTitle";
import { useState } from "react";
import { products } from "./../../data/products";
import ProductTableView from "../../features/ProductsView/ProductsTableView";
import ProductsGridView from "../../features/ProductsView/ProductsGridView";
import AddProductFields from "../../features/ProductsTable/components/AddProductFields";
import Modal from "../../Components/common/Modal";
import ModalFooter from "../../Components/common/ModalFooter";
const Products = () => {
  const [layoutType, setLayoutType] = useState("TABLE"); // or GRID
    const [allProducts, setAllProducts] = useState([...products]);
    const [newProduct, setNewProduct] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    price: "",
    img: "src/assets/images/Set-coffee_1.png",
    isPublished: false,
    entity: "",
  });


  const toggleLayout = () => {
    const layout = layoutType === "TABLE" ? "GRID" : "TABLE";
    setLayoutType(layout);
  };
  const createNewProduct = () => {
   const productToAdd = { ...newProduct, id: crypto.randomUUID() };
    setAllProducts([productToAdd, ...allProducts]);
     setNewProduct({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      price: "",
      img: "/images/product-img.png",
      isPublished: false,
      entity: "",
    });
  };

  const ModalFooterComponent = (props) => (
    <ModalFooter {...props} btnTask1="Cancel" btnTask2="Add" className="bg-chocolate hover:bg-[#D4AF37]/80" />
  );

  const Buttons = (
    <>
      <button
        onClick={toggleLayout}
        className="text-2xl size-10 flex justify-center items-center bg-gray-100 text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3]  duration-150 transition-all border-gray-100 border cursor-pointer shadow"
      >
        {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
      </button>

     
  <Modal
        title="Add New Product"
        Trigger={
           <button className="bg-chocolate  px-3 py-2 rounded-md transition-all duration-200 text-gray-50 font-semibold  hover:scale-105 hover:bg-[#D4AF37]/80">Add product</button>
        }
         Footer={ModalFooterComponent}
        onSubmit={createNewProduct}
      >
        <AddProductFields newProduct={newProduct} onChange={setNewProduct}/>
      </Modal>
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
          <ProductTableView products={allProducts} setProducts={setAllProducts}/>
        ) : (
          <ProductsGridView products={allProducts} />
        )}
      </section>
     </div>
    </>
  );
};

export default Products;

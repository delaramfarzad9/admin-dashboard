import { CiGrid41, CiViewTable } from "react-icons/ci";
import SectionTitle from "../../Components/common/SectionsTitle";
import { useState,useEffect } from "react";

import ProductTableView from "../../features/ProductsView/ProductsTableView";
import ProductsGridView from "../../features/ProductsView/ProductsGridView";
import AddProductFields from "../../features/ProductsTable/components/AddProductFields";
import Modal from "../../Components/common/Modal";
import ModalFooter from "../../Components/common/ModalFooter";
import useLocalStorage from "../../hooks/useLocalStorage";
import useTitle from "../../hooks/useTitle";


const Products = () => {
useTitle("Products");
  const [layoutType, setLayoutType] = useLocalStorage("layout","TABLE"); // or GRID
    const [allProducts, setAllProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
   
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
useEffect(() => {
    const fetchProducts = async () => {
      const res =await fetch("https://react-js-cms.iran.liara.run/api/products");
      console.log("status:",res.status);
      const data=await res.json();
      console.log("data from API:",data); 
      if(res.status===200){
        setAllProducts(data);
    }
    
  }
  fetchProducts();
}, []);


  const createNewProduct = async() => {
  try {
    // Create a properly formatted product object
    const productToSend = {
      ...newProduct,
      price: Number(newProduct.price), // Convert string to number
      // Make sure entity is included
    };
    
    console.log("Sending product:", productToSend);
    
    const res = await fetch("https://react-js-cms.iran.liara.run/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productToSend), 
    });
    
    const createdProduct = await res.json();
    console.log("Full response from API:", createdProduct);
    
    // Check if response has nested data structure
    const actualProduct = createdProduct.data || createdProduct;
    
    // Debug: Log all properties
    console.log("Product fields:");
    for (const key in actualProduct) {
      console.log(`${key}:`, actualProduct[key], `(type: ${typeof actualProduct[key]})`);
    }
    
    // Add the new product to UI
    setAllProducts(prev => [actualProduct, ...prev]);
    
    // Reset form properly
    setNewProduct({
      title: "",
      description: "",
      price: "", // Keep as string for form input
      img: "src/assets/images/Set-coffee_1.png",
      isPublished: false,
      entity: "", // Make sure this matches your form field name
    });
    
    return true; // Important for modal close
    
  } catch(error) {
    console.error("Error creating product:", error);
    return false; // Keep modal open on error
  }
};
  const ModalFooterComponent = (props) => (
    <ModalFooter {...props} btnTask1="Cancel" btnTask2="Add" className="bg-chocolate hover:bg-[#D4AF37]/80"  onSubmit={async () => {
      const success = await createNewProduct();
      return success; // Return true to close modal, false to keep open
    }} />
  );
  const tooltipText = layoutType === "TABLE" ? "Switch to Grid View" : "Switch to Table View";

  const Buttons = (
    <>
      <button
        onClick={toggleLayout}
        title={tooltipText}
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

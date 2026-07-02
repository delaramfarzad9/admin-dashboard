import SectionTitle from "../../../Components/common/SectionsTitle";
import { products } from "../../../data/products";
import OpenInPage from "./OpenInPage";
import ProductCard from "./ProductCard";

const LastProducts = () => {
  return (
    <div className="col-span-full xl:col-span-3">
      <SectionTitle title="Latest Products" />

      <div className="mt-4 space-y-3 sm:mt-5">
        {products.slice(-3).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <OpenInPage itemsLength={products.length} navigateTo="/products" />
    </div>
  );
};

export default LastProducts;

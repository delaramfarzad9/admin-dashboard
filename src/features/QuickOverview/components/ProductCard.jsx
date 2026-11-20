import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ title, description, price, img }) => {
  return (
    <article className="group flex items-center grow gap-4 p-3 sm:p-4 min-h-24 sm:h-32 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className="size-16 min-w-16 sm:size-24 sm:min-w-24 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={img}
          alt={title}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="h-full min-w-0 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-1">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-baseline gap-0.5 px-2 py-0.5 rounded-md bg-chocolate/10 text-chocolate font-semibold">
            <span className="text-sm">$</span>
            {Number(price).toLocaleString()}
          </span>
          <Link
            to="/products"
            aria-label="View products"
            className="p-2 -m-2 text-gray-400 transition-colors hover:text-chocolate"
          >
            <FaEllipsisV />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ title, description, price, img }) => {
  return (
    <article className="flex duration-150 bg-gray-100 shadow hover:bg-linear-to-t hover:from-neutral-100 hover:scale-101 border border-gray-100 p-3 rounded-md min-h-24 sm:h-30 items-center grow gap-3 cursor-pointer">
      <div className="size-16! min-w-16 max-w-16 sm:size-24! sm:min-w-24 sm:max-w-24">
        <img
          src={img}
          alt={title}
          className="size-full rounded-lg object-cover"
        />
      </div>
      <div className="h-full min-w-0 flex-1 flex justify-between flex-col">
        <div className="space-y-1">
          <p>
            <h3 className="font-bold text-amber-900">{title}</h3>
          </p>
          <p className="text-sm text-neutral-600 line-clamp-1">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm text-amber-900">$</span>
            <span className="font-semibold">
              {Number(price).toLocaleString()}{" "}
            </span>
          </div>
          <div>
            <Link to="/products" className="text-base text-neutral-400">
              <FaEllipsisV />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

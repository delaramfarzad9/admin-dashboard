import clsx from "clsx";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <article className="group w-full flex flex-col gap-4 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <header className="h-[200px] w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.img}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt={product.title}
        />
      </header>
      <main className="space-y-2 flex-1">
        <h2 className="font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-[13px] text-gray-500 line-clamp-2 h-[39px]">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-1 pt-1">
          <div
            className={clsx(
              "badge",
              product.isPublished ? "success-badge" : "danger-badge",
            )}
          >
            {product.isPublished ? (
              <>
                <BsEye />
                published
              </>
            ) : (
              <>
                <BsEyeSlash />
                hidden
              </>
            )}
          </div>

          <div className="text-xs text-gray-500 inline-flex gap-1 items-center">
            <BiShoppingBag className="size-4" />
            <span>Stock:</span>
            <span className="font-medium text-gray-700">{product.entity}</span>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="inline-flex items-baseline gap-0.5">
          <span className="text-chocolate font-semibold">$</span>
          <span className="text-lg font-bold text-gray-900">
            {product.price.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-1 text-lg! text-gray-400">
          Icons
        </div>
      </footer>
    </article>
  );
};

export default ProductCard;

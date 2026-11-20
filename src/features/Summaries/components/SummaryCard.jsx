import React from "react";
import clsx from "clsx";

const SummaryCard = ({ title, value, Icon, className }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-4 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm",
        "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-sm font-medium text-gray-500 truncate">
          {title}
        </span>
        <span className="text-3xl font-semibold tracking-tight text-gray-800">
          {value}
        </span>
      </div>
      {Icon && (
        <div className="flex items-center justify-center size-12 shrink-0 rounded-xl bg-chocolate/10 text-chocolate">
          <Icon className="size-6" />
        </div>
      )}
    </div>
  );
};

export default SummaryCard;

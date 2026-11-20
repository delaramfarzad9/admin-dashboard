import React from "react";

const SectionsTitle = ({ title, Buttons, className }) => {
  return (
    <div className="border-b border-gray-200 pb-3">
      <div className="flex items-center justify-between gap-4">
        {/* left — accent bar + title */}
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <span className="h-5 w-1 shrink-0 rounded-full bg-chocolate sm:h-6" />
          <h2
            className={`truncate text-base font-bold text-gray-900 sm:text-xl lg:text-2xl ${className}`}
          >
            {title}
          </h2>
        </div>

        {/* right — action buttons */}
        {Buttons && (
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
            {Buttons}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionsTitle;

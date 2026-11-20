import { Link } from "react-router";

const OpenInPage = ({ itemsLength, navigateTo }) => {
  return (
    <div className="flex items-center justify-between border-t mt-10 pt-4 border-gray-100 px-2">
      <p className="text-neutral-500 text-sm">{itemsLength} records found .</p>

      <Link
        to={navigateTo || "/"}
        className="inline-flex items-center h-9 px-4 rounded-lg bg-chocolate text-white text-sm font-semibold shadow-sm transition-all duration-200 hover:bg-chocolate/90 active:scale-95"
      >
        Show full list
      </Link>
    </div>
  );
};

export default OpenInPage;

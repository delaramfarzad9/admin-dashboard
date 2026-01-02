import { Link } from "react-router";

const OpenInPage = ({ itemsLength, navigateTo }) => {
  return (
    <div className="flex items-center justify-between border-t mt-10 pt-4 border-gray-100 px-2">
      <p className="text-neutral-500 text-sm">{itemsLength} records found  .</p>

      <Link
        to={navigateTo || "/"}
        className="bg-chocolate text-gray-100 text-sm px-3 py-1.5 rounded-md"
      >
          Show full list
      </Link>
    </div>
  );
};

export default OpenInPage;

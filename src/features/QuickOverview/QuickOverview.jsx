import LastUsers from "./components/LastUsers";
import LastProducts from "./components/LastProducts";
const QuickOverview = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 *:p-4 sm:*:p-5 *:border-gray-100 *:rounded-xl gap-4 xl:gap-5 *:shadow">
      <LastProducts />

      <LastUsers />
    </div>
  );
};

export default QuickOverview;

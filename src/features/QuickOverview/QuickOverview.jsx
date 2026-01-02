import LastUsers from "./components/LastUsers";
import LastProducts from "./components/LastProducts";
const QuickOverview = () => {
  return (
    <div className="space-y-10 grid grid-cols-5 *:p-5  *:border-gray-100  *:rounded-xl gap-5 *:shadow">
      <LastProducts />

      <LastUsers />
    </div>
  );
};

export default QuickOverview;

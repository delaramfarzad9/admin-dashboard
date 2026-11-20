import LastUsers from "./components/LastUsers";
import LastProducts from "./components/LastProducts";
const QuickOverview = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 xl:gap-8">
      <LastProducts />

      <LastUsers />
    </div>
  );
};

export default QuickOverview;

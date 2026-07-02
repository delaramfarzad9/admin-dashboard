import React from "react";
import SectionsTitle from "/src/Components/common/SectionsTitle";
import { useNavigate } from "react-router";
import CTAButton from "./components/CTAButton";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/detailsCharts/DetailsCharts";
import ProductsTable from "../../features/ProductsTable/ProductsTable";
import QuickOverview from "../../features/QuickOverview/QuickOverview";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const navigate = useNavigate();
  useTitle("Home");

  return (
    <>
      <div className="flex flex-col mx-5">
        <SectionsTitle
          title="Dashboard"
          className="font-black!"
          Buttons={<CTAButton onClick={() => navigate("/products")}
           />}
        />
        <Summaries />
        <div className="">
          <DetailsCharts />
          <ProductsTable />
         <QuickOverview />
        </div>
      </div>
    </>
  );
};

export default Home;

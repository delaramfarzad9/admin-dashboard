import React from "react";
import { ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { generateChartData } from "../../utils/home";
import CustomTooltip from "./CustomTooltip";
const DetailsCharts = () => {
  const data = generateChartData({
    productsLength: 20,
    usersLength: 200,
    adminsLength: 3,
    ticketsLength: 80,
  });
  return (
    <div className="flex flex-col p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
      <p className="text-lg font-semibold text-gray-900">Dashboard Overview</p>
      {/* chart  */}
      <div className="h-80 mt-6 font-medium text-sm">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <Bar
              dataKey="value"
              fill="#7B3F00"
              radius={[8, 8, 0, 0]}
              maxBarSize={48}
            />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              content={CustomTooltip}
              cursor={{ fill: "rgba(123,63,0,0.06)" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DetailsCharts;

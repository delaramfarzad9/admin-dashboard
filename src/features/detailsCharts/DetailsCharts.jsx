import React from 'react'
import { ResponsiveContainer } from 'recharts'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {generateChartData} from '../../utils/home'
import CustomTooltip from './CustomTooltip';
const DetailsCharts = () => {
     const data = generateChartData({
    productsLength: 20,
    usersLength: 200,
    adminsLength: 3,
    ticketsLength: 80,
  });
  return (
    <div className='mt-20 flex flex-col  '>
        <p className='text-xl font-bold text-chocolate'>
            Dashboard Overview
        </p>
        {/* chart  */}
      <div className="max-w-dvw h-96 mt-10 mr-5 ml-5 font-semibold">
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart   data={data} width={150} height={40}>
            <Bar  dataKey="value" fill="#985E5C" radius={[30, 30, 0, 0]} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={CustomTooltip} />
          </BarChart>
        </ResponsiveContainer>
      </div>



    </div>
  )
}

export default DetailsCharts
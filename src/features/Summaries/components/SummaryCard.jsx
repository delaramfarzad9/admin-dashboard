import React from 'react'

const SummaryCard = ({title,value,Icon,className}) => {
  return (
    <div className=" flex flex-col space-y-4 p-5 bg-gray-200 rounded-xl shadow-md ">
        {/* UP  */}
<div className='flex flex-row justify-between items-center '>
<span className='font-bold text-lg text-chocolate'>{title}</span>
{<Icon className="size-8 text-chocolate"/>}
</div>
{/* DOWN */}
    <span className='font-bold text-xl text-chocolate  '>{value}</span>
    </div>
  )
}

export default SummaryCard
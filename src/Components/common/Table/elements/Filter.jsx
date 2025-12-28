import React from 'react'
import { HiFilter } from "react-icons/hi";

const Filter = () => {
  return (
     <button className="flex items-center justify-center gap-1 border ">
      <HiFilter className="text-lg" />
      <span className="text-sm">Filter</span>
    </button>
  )
}

export default Filter
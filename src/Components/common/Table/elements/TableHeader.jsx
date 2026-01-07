import React from 'react'
import Filter from './Filter'
import Search from './Search'

const TableHeader = ({ header }) => {
    const { Buttons } = header;
  return (
    <div className="flex items-center justify-between mb-4 h-20">
      <h2 className='text-xl font-bold text-chocolate'>
       {header.title}
      </h2>

      {typeof Buttons === "function" ? (
        <div className="flex items-center gap-2">{<Buttons />}</div>
      ) : (
        <div className="flex  *:h-10 *:bg-linear-to-t *:from-zinc-50 *:cursor-pointer *:select-none *:hover:to-zinc-50 *:hover:from-transparent *:hover:shadow-sm *:focus-within:ring-3 *:duration-150 *:focus-within:ring-gray-500/20 *:border *:border-gray-100 *:rounded-md *:px-3 items-center gap-3">
          <Filter />
          <Search />
        </div>
      )}
    </div>
  )
}

export default TableHeader

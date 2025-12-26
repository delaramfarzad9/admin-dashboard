import React from 'react'
import { MdKeyboardCommandKey } from 'react-icons/md'
import { HiOutlineSearch } from 'react-icons/hi'

const SearchInput = () => {
  return (
    <div className="relative h-10 border border-amber-800/50 rounded-lg  w-[288px] flex items-center justify-center duration-150 focus-within:ring-4 focus-within:ring-amber-900/10 focus-within:border-amber-700/20! text-sm">
        <HiOutlineSearch className="absolute left-3 text-gray-400 size-5 pointer-events-none" />
             <div className="absolute right-2 flex  items-center justify-center text-center  bg-gray-200 p-1  rounded-sm select-none   text-gray-400">
        <span>
          <MdKeyboardCommandKey className='size-5' />
        </span>
        <span>
          <kbd className='text-sm'>K</kbd>
        </span>
      </div>
           <input
        type="text"
        className="absolute size-full focus-within:outline-none placeholder:text-sm pr-4 pl-10 text-amber-700"
        placeholder="search..."
      />

    </div>
  )
}

export default SearchInput
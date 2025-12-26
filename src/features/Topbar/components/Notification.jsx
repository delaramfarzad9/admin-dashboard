import React from 'react'
import { BiBell } from 'react-icons/bi'

const Notification = () => {
  return (
    <button className="flex size-10 border border-amber-900/50 rounded-full items-center justify-center cursor-pointer text-amber-900 hover:text-amber-600 hover:bg-amber-500/5 duration-150 hover:border-amber-600">
      <BiBell className="text-[21px]" />
    </button>
  )
}

export default Notification
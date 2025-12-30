import React from 'react'

const ModalFooter = ({onSubmit,onClose}) => {
  return (
    <div className='flex flex-row items-center justify-center gap-4 p-2'>
        <button className=' py-3 px-4 font-semibold  rounded-xl transition-all duration-200 text-gray-800 bg-gray-300  hover:scale-105 hover:bg-gray-400 tracking-wide' onClick={onClose} >
            <span>Cancel</span>
        </button>
        <button className='py-3 px-4 font-semibold  rounded-xl transition-all duration-200 text-gray-100 bg-red-500  hover:scale-105 hover:bg-red-600 tracking-wide' onClick={onSubmit}>
            <span>Delete</span>
        </button>
    </div>
  )
}

export default ModalFooter
import React from 'react'

const ModalFooter = ({onSubmit,onClose,btnTask1,btnTask2,className}) => {
   const submitHandler = () => {
    onSubmit();
    onClose();
  };

  return (
    <div className='flex flex-row items-center justify-center gap-4 p-2'>
        <button className=' py-3 px-4 font-semibold  rounded-xl transition-all duration-200 text-gray-800 bg-gray-300  hover:scale-105 hover:bg-gray-400 tracking-wide' onClick={onClose} >
            <span>{btnTask1}</span>
        </button>
        <button className={`py-3 px-4 font-semibold  rounded-xl transition-all duration-200 text-gray-100  hover:scale-105  tracking-wide ${className}`} onClick={submitHandler}>
            <span>{btnTask2}</span>
        </button>
    </div>
  )
}

export default ModalFooter
import React from 'react'

const CTAButton = ({onClick}) => {
    
  return (
    <button onClick={onClick} className='bg-chocolate px-5 py-3 text-xl  rounded-xl transition-all duration-200 text-gray-50 font-semibold  hover:scale-105 hover:bg-[#D4AF37]/80' >
Create Product
  </button>
  )
}

export default CTAButton


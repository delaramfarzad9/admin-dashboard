import React from 'react'

const sectionsTitle = ({title,Buttons}) => {
  return (
    <div className='flex flex-row items-center justify-between  mt-5'>
        {/* left side  */}
        <div>
            <h2 className='font-bold text-amber-900 text-2xl border-b-2 border-amber-300/30 pb-2 '>{title}</h2>
        </div>
        {/* right side  */}
        <div className='flex flex-row gap-3 items-center justify-center'>{Buttons}</div>

    </div>
  )
}

export default sectionsTitle
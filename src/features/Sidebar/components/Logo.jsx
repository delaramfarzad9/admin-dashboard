import React from 'react'
import appLogo from '../../../assets/images/appLogo.png'



const Logo = ({className='',imgClassName=''}) => {
  return (
     <div className={`flex flex-row gap-1 justify-center items-center ${className}`}>
        <div className="text-xl font-pacifico font-bold lg:text-2xl shrink-0 text-amber-900  ">SetCoffee</div>
        <img src={appLogo} alt="logo" className={`lg:h-10 w-auto h-8 ${imgClassName}`}/>
        </div>

  )
}

export default Logo
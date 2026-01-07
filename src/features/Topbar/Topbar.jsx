import React from 'react'
import SearchInput from './components/SearchInput'
import Proile from './components/Profile'
import Divider from './components/Divider'
import Notification from './components/Notification'
import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = ({ onMenuClick }) => {
  return (
    <div className='fixed top-0 left-0 md:left-60 right-0 bg-white/70 backdrop-blur-md h-16 border-b-2 py-4  border-amber-300/50 flex flex-row justify-between items-center  px-6 z-20 '>
      {/* left side  */}
<div className='ml-5'>
<SearchInput/>
</div>
{/* mobile menu  */}
<button 
  className="md:hidden p-2 text-2xl"
  onClick={onMenuClick}
>
  <GiHamburgerMenu className='text-chocolate'/>
</button>


{/* right side  */}
<div className='flex flex-row-reverse items-center justify-center gap-4 mr-5'>
<Proile/>
<Divider/>
<Notification/>
</div>
    </div>
  )
}

export default Topbar
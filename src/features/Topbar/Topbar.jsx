import React from 'react'
import SearchInput from './components/SearchInput'
import Proile from './components/Profile'
import Divider from './components/Divider'
import Notification from './components/Notification'

const Topbar = () => {
  return (
    <div className='fixed top-0 left-60 right-0 bg-white/70 backdrop-blur-md h-16 border-b-2 py-4  border-amber-300/50 flex flex-row justify-between items-center  px-6 z-20 '>
      {/* left side  */}
<div className='ml-5'>
<SearchInput/>
</div>
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
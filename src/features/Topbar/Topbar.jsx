import React from 'react'
import SearchInput from './components/SearchInput'
import Proile from './components/Profile'
import Divider from './components/Divider'
import Notification from './components/Notification'

const Topbar = () => {
  return (
    <div className='h-16 border-b pb-4 border-amber-300 flex flex-row justify-between items-center mx-5 '>
      {/* left side  */}
<div>
<SearchInput/>
</div>
{/* right side  */}
<div className='flex flex-row-reverse items-center justify-center gap-4'>
<Proile/>
<Divider/>
<Notification/>
</div>
    </div>
  )
}

export default Topbar
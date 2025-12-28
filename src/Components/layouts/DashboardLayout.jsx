import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../../features/Sidebar/Sidebar'
import Topbar from '../../features/Topbar/Topbar'
import BackgroundOverlay from '../common/BackgroundOverlay'

const DashboardLayout = () => {
  return (
    
    <main className='flex'>
<Sidebar/>
{/* main content area  */}
<BackgroundOverlay/>
        <section className='grow px-4 ml-60 pt-20 relative'>

<Topbar/>
<div>
  
    <Outlet/>
</div>
        </section>
    </main>
  )
}

export default DashboardLayout
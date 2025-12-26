import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../../features/Sidebar/Sidebar'
import Topbar from '../../features/Topbar/Topbar'

const DashboardLayout = () => {
  return (
    
    <main className='flex'>
<Sidebar/>
        <section className='grow p-4'>
<Topbar/>
<div>
    <Outlet/>
</div>
        </section>
    </main>
  )
}

export default DashboardLayout
import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../../features/Sidebar/Sidebar'
import Topbar from '../../features/Topbar/Topbar'
import BackgroundOverlay from '../common/BackgroundOverlay'
import { useState } from 'react'
import SidebarHeader from '../../features/Sidebar/components/SidebarHeader'
import Menu from '../../features/Sidebar/components/Menu'
import menus from '../../data/menus.js'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    
    <main className='flex'>
 {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
           {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
  className={`
    fixed top-0 left-0 h-screen w-60 z-50 bg-gray-100
    bg-linear-to-b from-orange-300/50 to-orange-100/50
    border-r-2 border-amber-300/30 p-4
    transform transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:hidden
  `}
>
  <SidebarHeader />
  <Menu menus={menus} />
</div>

{/* main content area  */}
<BackgroundOverlay/>
        <section className='grow px-4  md:ml-60 pt-20 relative'>

<Topbar onMenuClick={() => setSidebarOpen(true)}/>
<div>
  
    <Outlet/>
</div>
        </section>
    </main>
  )
}

export default DashboardLayout
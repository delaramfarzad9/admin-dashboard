import React from 'react'
import SidebarHeader from './components/SidebarHeader'
import Menu from './components/Menu'
import menus from '../../data/menus.js'

const Sidebar = () => {
  return (
    <aside className=' flex flex-col fixed h-screen w-60 border-r-2 border-amber-300/30 bg-linear-to-b from-orange-300/50 to-orange-100/50 p-4'>
        <SidebarHeader/>
<Menu menus={menus}/>
    </aside>
  )
}

export default Sidebar
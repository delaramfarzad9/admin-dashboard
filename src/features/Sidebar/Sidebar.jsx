import React from 'react'
import SidebarHeader from './components/SidebarHeader'
import Menu from './components/Menu'
import menus from '../../data/menus.js'

const Sidebar = () => {
  return (
    <aside className='shadow flex flex-col sticky h-screen w-60 border-r border-amber-300 bg-orange-100 p-4'>
        <SidebarHeader/>
<Menu menus={menus}/>
    </aside>
  )
}

export default Sidebar
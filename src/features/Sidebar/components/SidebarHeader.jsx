import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router'

const SidebarHeader = () => {
  return (
    <div>
        <Link className=' flex flex-row gap-1 justify-baseline items-center border-b-2 border-amber-300/50 h-16 ' to='/'>
        <Logo />
        <span className='text-lg text-amber-900  font-extrabold'> Panel</span>
        </Link>
    </div>
  )
}

export default SidebarHeader
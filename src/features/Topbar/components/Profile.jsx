import React from 'react'
import {AVATAR_URL} from './../../../data/constants'


const Profile = () => {
  return (
    <div className="flex focus-within:ring-2 focus-within:ring-amber-700/20 cursor-pointer items-center gap-2 select-none p-3 hover:bg-amber-500/5 rounded-md transition-colors duration-150 pb-4"
    >
      <div className="size-10">
        <img
          className="size-full rounded-full object-cover"
          src={AVATAR_URL}
          alt="User Avatar"
        />
      </div>
      <div>
        <p className="text-sm font-bold text-amber-800">  John Raymond</p>
        <p className="text-xs text-amber-900">Administrator</p>
      </div>
    </div>
  )
}

export default Profile
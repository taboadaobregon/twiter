import React from 'react'

export default function SidebarMenuItem({text,Icon,active}) {
  return (
    <div className='hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3'>
        <Icon className="h-7"/>
        <spa className={`${active && "font-bold"} hidden xl:inline `}>{text}</spa>
    </div>
  )
}
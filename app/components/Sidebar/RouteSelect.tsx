import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from 'react-icons/fi'

const RouteSelect = () => {
    return (
        <div className='space-y-1'>
            <Route title='Dashboard' selected={true} Icon={FiHome} />
            <Route title='Team' selected={false} Icon={FiUsers} />
            <Route title='Invoice' selected={false} Icon={FiPaperclip} />
            <Route title='Integration' selected={false} Icon={FiLink} />
            <Route title='Finance' selected={false} Icon={FiDollarSign} />
        </div>
    )
}

const Route = ({ selected, Icon, title }: { selected: boolean, title: string, Icon: IconType }) => {
    return <Link
        href={"#"}
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${selected ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}`}>
        <Icon className={selected ? "text-violet-500" : ""} />
        <span>{title}</span>
    </Link>
}

export default RouteSelect
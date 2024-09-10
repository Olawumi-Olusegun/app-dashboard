"use client"
import { useModalContext } from '@/app/context/modalContext';
import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { CgMenuLeftAlt } from "react-icons/cg";


const Topbar = () => {

    const { setOpen } = useModalContext();

    return (
        <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
            <div className="flex items-center flex-wrap gap-5 p-0.5">
                <button onClick={() => setOpen(true)} className="bg-violet-100 hover:bg-violet-200 duration-300 lg:hidden p-2 rounded-full ">
                    <CgMenuLeftAlt className='text-violet-700' />
                </button>
                <div className="">
                    <span className="text-sm font-bold block">
                        Good Morning, Olusegun!
                    </span>
                    <span className="text-xs block text-stone-500">Tuesday, September 2024</span>
                </div>
                <button className=' ml-auto flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded'>
                    <FiCalendar />
                    <span>Prev 6 Months</span>
                </button>
            </div>
        </div>
    )
}

export default Topbar
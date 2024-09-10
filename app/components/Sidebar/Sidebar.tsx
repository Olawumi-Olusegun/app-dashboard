"use client";
import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
import RouteSelect from './RouteSelect'
import Plan from './Plan'
import { MdClose } from "react-icons/md";
import { useModalContext } from '@/app/context/modalContext';

const Sidebar = () => {

    const { open, setOpen } = useModalContext();

    const toggleButton = () => {
        setOpen((prev) => !prev);
    }

    const handleTapOutsideToClose = () => {
        setOpen(false);
    }

    const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }

    return (
        <div onClick={handleTapOutsideToClose} className={`fixed z-10 w-full top-0 lg:sticky bg-white/10 backdrop-blur-md min-h-dvh w-full lg:translate-x-0 duration-300 ${open ? "translate-x-0" : "-translate-x-full "}  `}>
            <div onClick={stopPropagation} className='w-[250px] bg-white md:block sticky top-4 h-[calc(100vh-32px-48px)] pr-0.5'>
                <AccountToggle />
                <Search />
                <RouteSelect />
            </div>
            <button onClick={toggleButton} className="absolute sm:hidden top-4 right-8 bg-violet-100 hover:bg-violet-200 duration-300 p-2 rounded-full ">
                <MdClose className='text-violet-700' />
            </button>
            <Plan />
        </div>
    )
}

export default Sidebar
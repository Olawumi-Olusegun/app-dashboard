import React from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


const AccountToggle = () => {
    return (
        <div>
            <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
                <button className=' flex p-0.5 hover:bg-stone-100 rounded duration-300 transition-colors relative gap-2 w-full items-center '>
                    <img
                        src="https://api.dicebear.com/9.x/notionists/svg"
                        alt="avatar"
                        className="size-8 rounded shrink-0 bg-violet-500 shadow pointer-events-none"
                    />
                    <div className="text-start">
                        <span className="text-sm font-bold block  truncate">Olawumi Olusegun</span>
                        <span className="text-xs block text-stone-500 truncate" title='olawumi.olusegun@gmail.com'>olawumi.olusegun@gmail.com</span>
                    </div>

                    <FiChevronDown className='absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs' />
                    <FiChevronUp className='absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs' />

                </button>
            </div>
        </div>
    )
}

export default AccountToggle
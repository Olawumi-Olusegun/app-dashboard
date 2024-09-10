import { Command } from 'cmdk'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from 'react-icons/fi';

interface CommandMenuProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const CommandMenu = ({ open, setOpen }: CommandMenuProps) => {

    const [textInput, setTextInput] = useState("")

    useEffect(() => {

        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])


    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            onClick={() => setOpen(false)}
            label="Global Command Menu"
            className='fixed inset-0 bg-stone-950/50 transition-all duration-300 z-20'>
            <div
                onClick={(event) => event.stopPropagation()}
                className="bg-white rounded-lg shadow-xl border-stone-300 overflow-hidden w-full max-w-lg mx-auto mt-12"
            >
                <Command.Input value={textInput} onValueChange={setTextInput} placeholder='What do you need' className='relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none' />
                <Command.List className='p-3'>
                    <Command.Empty>
                        No results found for {" "}
                        <span className='text-violet-500'>{textInput}</span>
                    </Command.Empty>

                    <Command.Group heading="Team" className="text-sm mb-3 text-stone-400">
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPlus />
                            Invite Member
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiEye />
                            See Org Chart
                        </Command.Item>
                    </Command.Group>

                    <Command.Group
                        heading="Integrations"
                        className="text-sm text-stone-400 mb-3"
                    >
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiLink />
                            Link Services
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPhone />
                            Contact Support
                        </Command.Item>
                    </Command.Group>

                    <Command.Item className='py-1.5'>Apple</Command.Item>

                    <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 hover:bg-stone-700 bg-stone-950 rounded items-center gap-2">
                        <FiLogOut />
                        Sign Out
                    </Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}

export default CommandMenu
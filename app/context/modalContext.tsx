"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ModalContextTypes {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextTypes | undefined>(undefined);



const ModalContextProvider = ({ children }: React.PropsWithChildren) => {
    const [open, setOpen] = useState(false);

    return <ModalContext.Provider value={{ open, setOpen }} >
        {children}
    </ModalContext.Provider>
}

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (context === undefined) {
        throw new Error("useModalContext can only be used withing component")
    }
    return context;
}

export default ModalContextProvider;
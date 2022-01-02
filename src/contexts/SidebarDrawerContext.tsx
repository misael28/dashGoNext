import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode } from "react";
import { useContext, useEffect } from "toasted-notes/node_modules/@types/react";
import { useRouter } from "next/router";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextType = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextType);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure();
    const router = useRouter(); 
    useEffect(() => {
        disclosure.onClose();
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
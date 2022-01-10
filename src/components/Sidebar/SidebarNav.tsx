import { Box, Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

import { NavSection } from "./NavSection";
import { Navlink } from "./Navlink";

export function SidebarNav(){
    return (
        <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
            <Navlink href={"/dashboard"} icon={RiDashboardLine}>
                Dashboard
            </Navlink>
            <Navlink href={"/users"} icon={RiContactsLine}>
                Usuários
            </Navlink>
        </NavSection>
        <NavSection title="AUTOMACAO">
            <Navlink href={"/forms"} icon={RiInputMethodLine}>
                Formulários
            </Navlink>
            <Navlink href={"/automation"} icon={RiGitMergeLine}>
                Automação
            </Navlink>
        </NavSection>
      </Stack>
    )
}
import { Box, Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

import { NavSection } from "./NavSection";
import { Navlink } from "./Navlink";
export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
            <Navlink icon={RiDashboardLine}>
                Dashboard
            </Navlink>
            <Navlink icon={RiContactsLine}>
                Usuários
            </Navlink>
        </NavSection>
        <NavSection title="AUTOMACAO">
            <Navlink icon={RiInputMethodLine}>
                Formulários
            </Navlink>
            <Navlink icon={RiGitMergeLine}>
                Automação
            </Navlink>
        </NavSection>
      </Stack>
    </Box>
  );
}

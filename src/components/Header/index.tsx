import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
  RiMenuLine,
} from "react-icons/ri";

import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
        {!isWideVersion && (
            <IconButton
                aria-label="Open sidebar" 
                icon={<Icon as={RiMenuLine} />} 
                fontSize="24" 
                variant="unstyled" 
                onClick={onOpen} 
                mr="2" />
        )}
    <Logo />
      {isWideVersion && (<SearchBox />)}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}

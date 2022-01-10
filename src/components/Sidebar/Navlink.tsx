import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "toasted-notes/node_modules/@types/react";
import { ActiveLink } from "../ActiveLink";
interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function Navlink( { icon, children, href, ...rest }: NavLinkProps ) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="strech">
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                {children}
                </Text>
            </ChakraLink>
        </ActiveLink>
    );
}
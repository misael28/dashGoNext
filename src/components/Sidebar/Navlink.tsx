import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "toasted-notes/node_modules/@types/react";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
}

export function Navlink( { icon, children, ...rest }: NavLinkProps ) {
    return (
        <Link display="flex" align="strech">
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              {children}
            </Text>
        </Link>
    );
}
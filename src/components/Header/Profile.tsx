import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
     <Flex align="center">
       {showProfileData && (
         <Box mr="4" textAlign="right">
            <Text>misael souza</Text>
            <Text color="gray.300">misae@gmail.com</Text>
          </Box>
       )}
          <Avatar
            size="md"
            name="Misael Souza"
            src="https://github.com/misael28.png"
          />
    </Flex>
  );
};
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
     <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>misael souza</Text>
            <Text color="gray.300">misae@gmail.com</Text>
          </Box>
          <Avatar
            size="md"
            name="Misael Souza"
            src="https://github.com/misael28.png"
          />
    </Flex>
  );
};
import { 
    Box, Flex, Heading, 
    Button, Icon, 
    Table, Thead, 
    Tr, Th, Tbody, 
    Td, Checkbox, Text, useBreakpointValue  } from '@chakra-ui/react';
import { RiAddLine, RiEditLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import Pagination from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';

export default function UserList(){
    const isWideVersion = useBreakpointValue({ base: true, lg:false, });    
    return (
        <Box>
            <Header></Header>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box 
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p="8">

                        <Flex 
                        mb="8" 
                        justify="space-between" 
                        align="center"
                        >
                            <Heading size="lg" fontWeight="normal" >
                                Usuarios
                            </Heading>
                            <Link href={"/users/create"} passHref>
                                <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}/>}  >
                                    Criar novo
                                </Button>
                            </Link>
                            
                        </Flex>
                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["4","4","6"]} color="gray.300" width="8">
                                        <Checkbox colorScheme="pink" />
                                    </Th>
                                    <Th>Usuário</Th>
                                    {isWideVersion && <Th>Data de cadastro</Th>}
                                    <Th>Editar</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td p={["6", "8"]}>
                                        <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Souza</Text>
                                            <Text fontWeight="sm" color="gray.300">email@gmail.com</Text>
                                        </Box>
                                    </Td>
                                    {isWideVersion && <Td>01/01/2020</Td>}                                    
                                    <Td>
                                         <Button as="a" size="sm" fontSize="8" colorScheme="pink" leftIcon={<Icon as={RiEditLine}/>}  >
                                             Editar
                                        </Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                            </Table>  
                            <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}
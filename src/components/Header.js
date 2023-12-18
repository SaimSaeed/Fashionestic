import React from 'react'
import {Container,Flex,Box,HStack,Text} from "@chakra-ui/react"
import { FaUser,FaSearch,FaShoppingCart} from "react-icons/fa"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
function Header() {
  return (
    <Container maxW={"100%"} p={8}>
<Flex justifyContent={"space-between"}>
    
    <Box  fontSize={"2.5rem"} fontFamily={"'Amethysta', serif;"}>
    Fashionestic
</Box>
<HStack  fontWeight={"600"}>
<ChakraLink as={ReactRouterLink} to='/' px={4}>
  Home
</ChakraLink>
<ChakraLink as={ReactRouterLink} to='/denim' px={4}>
  Denim
</ChakraLink>
<ChakraLink as={ReactRouterLink} to='/tshirt' px={4}>
  T-Shirt
</ChakraLink>
<ChakraLink as={ReactRouterLink} to='/' px={4}>
  Shoes
</ChakraLink>
<ChakraLink as={ReactRouterLink} to='/' px={4}>
  Bags
</ChakraLink>
<ChakraLink as={ReactRouterLink} to='/' px={4}>
  Contact
</ChakraLink>


</HStack>
<HStack justifyContent={'space-between'}>
<Text borderRight={"1px solid red"} pr={2}><FaUser/></Text>
<Text borderRight={"1px solid red"} pr={2}><FaSearch/></Text>
<Text><FaShoppingCart/></Text>

</HStack>
    






</Flex>
    </Container>
  )
}

export default Header
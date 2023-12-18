import { Box, Heading, Stack,HStack,Text, Input, Center, Flex } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
   
     
      <HStack  justifyContent={"space-between"}  py={'10%'} px={10}>
        <Stack >
          <Heading size={"md"}>Contact Us</Heading>
          <Text>221b Notingham Forest - London - UK </Text>
          <Text>0123 456 789 - 0123 987 654 </Text>
          <Text>info@yourdomain.com </Text>
        </Stack>
        <Stack >
          <Heading size={"md"}>About Us</Heading>
          <Text>About us </Text>
          <Text>Contact </Text>
          <Text>Official Store </Text>
          <Text>Join us </Text>

        </Stack>
        <Stack >
          <Heading size={"md"}>Support</Heading>
          <Text>Shipping & Return </Text>
          <Text>Privacy Policy </Text>
          <Text>Terms & Conditions</Text>
          <Text>F.A.Qs</Text>

        </Stack>
        <Stack  width={"32%"}>
          <Heading size={"md"}>Newletter</Heading>
          <Text width={'100%'}>Make sure that you're always the first who receive our latest news and promotions</Text>
        <Input type='search' placeholder='Enter Your Email...' width={'70%'}/>
 
        </Stack>

      </HStack>
  
    
    //   <Center py={"1%"}>
    //  <Heading size={"sm"}>All Rights Reserved &reg; 2023</Heading>

    //   </Center>
  )
}

export default Footer
import { Container,Image,Box,VStack,Heading,Text,Center,Stack, Flex, HStack, Divider,Button, UnorderedList, ListItem } from '@chakra-ui/react'
import { FaStar,FaStarHalfAlt} from "react-icons/fa"

import React from 'react'
import { useParams } from 'react-router-dom'
import products from "../components/DenimsData"
function ProductData(props) {
    const {id} = useParams()
    const Product = products.find((pro)=>{
 return pro.id === parseInt(id)
    }) 
  return (

    <Container maxW={"100%"}>
 <Box backgroundImage={"https://vela-demo-1.myshopify.com/cdn/shop/files/vela-image11.jpg?v=1613726694"} backgroundRepeat={"no-repeat"} width={"100%"} height={"80vh"}> 
<Center>
    <VStack marginTop={"30vh"} >
    <Heading size={"4xl"} >{Product.title}</Heading> 
   <Text>Home-Best-Sellers-{Product.title}</Text>
    </VStack>
    </Center>
   </Box>
   <Flex>
<Box width={"50%"}>
    <Image src={Product.image1} width={"60%"} mx={"auto"}/>
</Box>
<Stack width={"50%"}>
<Text fontWeight={"400"} fontSize={"1rem"} color={"gray"}>Denim</Text>
<Heading size={"xl"}>{Product.title}</Heading>
<Stack justifyContent={"space-between"}>
    <HStack>
<FaStar size={12}/>
<FaStar size={12}/>
<FaStar size={12}/>
<FaStar size={12}/>
<FaStarHalfAlt size={12}/>
<Text color={"gray"} fontSize={"0.9rem"}>No reviews</Text>
    </HStack>
    <Stack direction={"column"}>
    <HStack>
    <Text fontWeight={"600"}>
Availibilty:
</Text>
<Text color={"green"} >In Stock</Text>
    </HStack>
    <HStack>
    <Text fontWeight={"600"}>
    SKU: 
</Text>
<Text color={"gray"} >VELA_SKU_4</Text>
    </HStack>
    <HStack>
    <Text fontWeight={"600"}>
    Vendor:
</Text>
<Text color={"gray"} >Citizens of Humanity</Text>
    </HStack>

<HStack>
<Text color={"red"} fontSize={"1.5rem"}>
        {Product.price}
    </Text>
    <Text textDecoration={"line-through"} fontSize={"1.3rem"} color={'gray'}>$298.00</Text>
</HStack>
<Divider borderColor={"grey"} width={"90%"}/>
   <Text width={"90%"}>
   This midi dress is made with a beautiful chiffon. The wrap silhouette and sunburst pleats make for a flattering, flirty fit. Feel free to throw this one in the wash — the permanent pleats will keep their shape. 
   </Text>
   <Heading size={"sm"}>Size</Heading>
   <HStack>
    <Button border={" 1px solid"}   borderColor={"gray.400"} size={"sm" } borderRadius={"0% "}>36</Button>
    <Button border={" 1px solid"} borderColor={"gray.400"} size={"sm"} borderRadius={"0% "}>37</Button>
    <Button border={"1px solid"} borderColor={"gray.400"} size={"sm"} borderRadius={"0% "}>38</Button>

   </HStack>
   <Heading size={"sm"}>Quantity</Heading>

   <Flex>
   <Box bgColor={"gray.100"}><Button mr={2}>-</Button>1 <Button ml={2}>+</Button></Box>
   </Flex> 
   <Flex justifyContent={"space-between"}>
    <Button  bgColor={"black"} color={"white"} borderRadius={"0% "} width={"49% "} height={"4rem"}>ADD TO CART</Button>
    <Button  bgColor={"red.500"} color={"white"} borderRadius={"0% "} width={"49% "} height={"4rem"}>BUY IT NOW</Button>
   </Flex>
</Stack>
</Stack>
</Stack>
    </Flex >
  <Stack width={"90%"} mx={"auto"} spacing={4}>
    <Flex width={"35%"} justifyContent={"space-between"} pt={20}>
    <Heading size={"md"}>Description</Heading>
    <Heading size={"md"}>Shippng & Result</Heading>
    <Heading size={"md"}>Reviews</Heading>

    </Flex>
    <Divider/>
<Stack>
<Heading size={"sm"}>Size & Fit</Heading>
<UnorderedList>
    <ListItem>
    Fit: Classic — follows your contours with a little room
    </ListItem>
    <ListItem>
    Length: Mid-calf
    </ListItem><ListItem>
    Model is 5'9.5/176 wearing a size S
    </ListItem>
</UnorderedList>

<Heading size={"sm"}>Materials & Care</Heading>
<UnorderedList>
    <ListItem>
    Content: 100% polyester
    </ListItem>
    <ListItem>
    Care: Machine wash
    </ListItem><ListItem>
    Imported
    </ListItem>
</UnorderedList>
<Text>
[SHORTDESCRIPTION]
This midi dress is made with a beautiful chiffon. The wrap silhouette and sunburst pleats make for a flattering, flirty fit. Feel free to throw this one in the wash — the permanent pleats will keep their shape. 

The Babaton classic — now in luxe vegan leather that's soft and supple. Just like the original, this version has intricate pleats that feel beautifully feminine.
</Text>

<Heading size={"sm"}>Sample Unordered List</Heading>
<UnorderedList>
    <ListItem>
    Vestibulum sit amet lobortis
    </ListItem>
    <ListItem>
    Phasellus sagittis tellus nec pharetra tempor
    </ListItem><ListItem>

    Etiam suscipit urna at nisl posuere
    </ListItem>
    <ListItem>

    Cras fermentum ut quam vitae efficitur
    </ListItem>
</UnorderedList>
</Stack>
</Stack>

    </Container>
  )
}

export default ProductData
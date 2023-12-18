import React,{useState} from 'react'
import {Box, Heading,Center,Text, Container, VStack,Stack, Button, Checkbox, HStack,Image,Grid} from "@chakra-ui/react"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import Card from '../components/Card'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'

function Denim() {
  const [sliderValue, setSliderValue] = useState(50)

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

  const denimarray = [
    {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image23_564x770.jpg?v=1516463274")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image26_564x770.jpg?v=1516463277")',
      title:"Ageratum T-shirt",
      price:"$60.00-$65.00",
      id:1

    },
    {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image104_564x770.jpg?v=1516530980")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image105_564x770.jpg?v=1516530981")',
      title:"Jean Body Curve",
      price:"$60.00-$65.00",
      id:2
    }, {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image46_564x770.jpg?v=1516504730")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image49_564x770.jpg?v=1516504737")',
      title:"Maude Flutter Sleeve",
      price:"$60.00-$65.00",
      id:3
    }, {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image57_360x.jpg?v=1517830139")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image52_564x770.jpg?v=1517830139")',
      title:"Ruched Mini Dress",
      price:"$60.00-$65.00",
      id:4
    },
    {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image122_360x.jpg?v=1517830157")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image117_564x770.jpg?v=1517830157")',
      title:"Ruched Mini Dress",
      price:"$60.00-$65.00",
      id:5
    },


    
   
  
    
  ];
  return (
    <Container maxW={"100%"}>
   <Box backgroundImage={"https://vela-demo-1.myshopify.com/cdn/shop/files/vela-image11.jpg?v=1613726694"} backgroundRepeat={"no-repeat"} width={"100%"} height={"80vh"}> 
<Center>
    <VStack marginTop={"30vh"} >
    <Heading size={"4xl"} >Denim</Heading> 
   <Text>Home-Denim</Text>
    </VStack>
  
</Center>
   </Box>
   <Stack direction={"row"}>
<Stack width={"30%"}>
    <Stack  color={"gray.700"} spacing={2}>
    <Heading size={"md"} color={"black"} >Category</Heading>
<Text align={"left"}>Top</Text>
<Text>Dress</Text>
<Text>Jeans & Denim</Text>
<Text>Coat & Jacket</Text>
<Text>T-Shirts</Text>
<Text>Skirts</Text>
<Text>Body</Text>
<Text>Bottom</Text>
    </Stack>
    <Box  >
    <Heading size={"md"} py={10} >Price</Heading>
    <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)} size={"md"}  mt={"8%"} ml={"5%"} w={"60%"} focusThumbOnChange={false} max={218}>
    <SliderMark
          value={0}
          textAlign='center'
          backgroundColor={"black"}
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {0}$
        </SliderMark>
        <SliderMark value={0} {...labelStyles}>
          0
        </SliderMark>
        <SliderMark value={55} {...labelStyles}>
          55
        </SliderMark>
        <SliderMark value={109} {...labelStyles}>
          109
        </SliderMark>
        <SliderMark value={164} {...labelStyles}>
          164
        </SliderMark>
        <SliderMark value={218} {...labelStyles}>
          218
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          backgroundColor={"black"}
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}$
        </SliderMark>
        <SliderTrack >
          <SliderFilledTrack bgColor={"black"} />
        </SliderTrack>
        <SliderThumb borderColor={"black"}  />
      </Slider>
    </Box>
    <Button bgColor={"black"} color={"white"} size={"sm"} width={"20%"} mt={"6%"}>Filter</Button>
     <Box>

      <Heading size={"md"} py={10}>Size</Heading>
      <Stack>
        <Stack direction={"row"} justifyContent={"space-between"} width={"66%"}> 
        
        <VStack>
          <HStack>
          <Checkbox/>
         <Text>38</Text> 
          </HStack>
          <HStack>
          <Checkbox/>
         <Text>39</Text> 
          </HStack> <HStack>
          <Checkbox/>
         <Text>40</Text> 
          </HStack>
          </VStack>
        <Box>
          <Text mb={2}>(1)</Text>
          <Text  mb={2}>(1)</Text>
          <Text>(1)</Text>

        </Box>
        </Stack>
      </Stack>
     </Box>

     <Image src='https://cdn.shopify.com/s/files/1/2721/4382/files/vela-image12_540x.jpg?v=1613748729' width={"66%"} py={10}/>
     <Box color={"gray.600"} >
    <Heading size={"md"} color={"black"}>Custom Html</Heading>
<Text width={"60%"} fontSize={"0.9rem"} py={6} >Use HTML to format your text so it can be easily read.</Text>
<Text fontSize={"0.9rem"} width={"50%"}>This text can be used to share information about your brand with customers.</Text>

    </Box>
</Stack>
<Stack width={"70%"}>
<HStack justifyContent={"space-between"}>
  <Text>Showing 1-5 of 5 Results</Text>
  <Text>Sort by: DATE, OLD TO NEW</Text>
</HStack>
<Grid my={8} gap={4} gridTemplateColumns={"repeat(auto-fit,minmax(220px,1fr))"}>
  {denimarray.map((card)=>{
   return  <ChakraLink as={ReactRouterLink} to={`/productdata/ ${card.id}`}>
  <Card img1={card.image1} img2={card.image2} title={card.title}  price={card.price} key={card.id} />
</ChakraLink>
   
  })}
</Grid>
</Stack>


   </Stack>
   <Box pb={"2%"} pt={"12%"} >
  <Center>
    <VStack>
  <Heading pb={10}>Manor</Heading>
  <Text textAlign={"center"} width={'50%'}>Quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
     Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum</Text>
     </VStack>
  </Center>
</Box>

    </Container>

  

  
  )
}

export default Denim
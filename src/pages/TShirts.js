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

function TShirts() {
    const [sliderValue, setSliderValue] = useState(50)

    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    const denimarray = [
      {
        image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image150_564x770.jpg?v=1516623036")',
        image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image151_564x770.jpg?v=1516623042")',
        title:"Ageratum T-shirt",
        price:"$60.00-$65.00",
  
      },
      {
        image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image145_564x770.jpg?v=1516622596")',
        image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image146_564x770.jpg?v=1516622602")',
        title:"Jean Body Curve",
        price:"$60.00-$65.00",
      }, {
        image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image34_564x770.jpg?v=1516500835")',
        image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image35_564x770.jpg?v=1516500836")',
        title:"Maude Flutter Sleeve",
        price:"$60.00-$65.00",
      }, {
        image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image28_564x770.jpg?v=1516500336")',
        image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image29_564x770.jpg?v=1516500338")',
        title:"Ruched Mini Dress",
        price:"$60.00-$65.00",
      },
     
    
      
    ];











  return (
    <Container maxW={"100%"}>
    <Box backgroundImage={"https://vela-demo-1.myshopify.com/cdn/shop/files/vela-image11.jpg?v=1613726694"} backgroundRepeat={"no-repeat"} width={"100%"} height={"80vh"}> 
 <Center>
     <VStack marginTop={"30vh"} >
     <Heading size={"4xl"} >T-Shirts</Heading> 
    <Text>Home-T-Shirts</Text>
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
          <Text>XS</Text> 
           </HStack>
           <HStack>
           <Checkbox/>
          <Text>SM</Text> 
           </HStack> <HStack>
           <Checkbox/>
          <Text>MD</Text> 
           </HStack>
           <HStack>
           <Checkbox/>
          <Text>LG</Text> 
           </HStack>
           <HStack>
           <Checkbox/>
          <Text>XL</Text> 
           </HStack>
           </VStack>
         <Box color={"gray.400"}>
           <Text mb={2}>(1)</Text>
           <Text  mb={2}>(3)</Text>
           <Text  mb={2}>(4)</Text>
           <Text  mb={2}>(3)</Text>
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
 <Stack width={"100%"}>
 <HStack justifyContent={"space-between"}>
   <Text>Showing 1-4 of 4 Results</Text>
   <Text>Sort by: Best Selling</Text>
 </HStack>
 <Grid my={8} gap={4} gridTemplateColumns={"repeat(auto-fit,minmax(220px,1fr))"}>
   {denimarray.map((card)=>{
    return <Card img1={card.image1} img2={card.image2} title={card.title}  price={card.price}  />
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

export default TShirts
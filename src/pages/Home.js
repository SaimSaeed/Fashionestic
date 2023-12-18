import { Container, Flex, Image, VStack,Box,Text,Stack, Center, HStack, Button, Divider, Heading } from '@chakra-ui/react'
import React,{useState} from 'react'
import Card from '../components/Card';
import Instacard from '../components/Instacard';
import IconsCard from '../components/IconsCard';


function Home() {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      img: "https://vela-demo-1.myshopify.com/cdn/shop/files/slideshow3_1283x848.jpg?v=1614291895",
      label: "Arizitia ",
      label2:'New\nCollection',
      description: "Look at the sunset, life is amazing, life is beautiful, life is what you make it.",
      title:"New Fashion"
      
    },
    {
      img:"https://vela-demo-1.myshopify.com/cdn/shop/files/slideshow12_1283x848.jpg?v=1614298288",
      label2: "What\nNews\nToday",
      description: "Look at the sunset, life is amazing, life is beautiful, life is what you make it.",
      title:"Fashion & Show"

      

    }
    
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };



  // card array
  const cardarray = [
    {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image150_564x770.jpg?v=1516623036")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image151_564x770.jpg?v=1516623042")',
      title:"Ageratum T-shirt",
      price:"$60.00-$65.00",

    },
    {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image104_564x770.jpg?v=1516530980")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image105_564x770.jpg?v=1516530981")',
      title:"Jean Body Curve",
      price:"$60.00-$65.00",
    }, {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image110_564x770.jpg?v=1517830375")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image109_564x770.jpg?v=1517830375")',
      title:"Maude Flutter Sleeve",
      price:"$60.00-$65.00",
    }, {
      image1 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image87_564x770.jpg?v=1516509761")',
      image2 :'url("https://vela-demo-1.myshopify.com/cdn/shop/products/product_image88_564x770.jpg?v=1516509762")',
      title:"Ruched Mini Dress",
      price:"$60.00-$65.00",
    },
  
    
  ];

  const insta_array = [
    {
      image :"https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_900x.jpg?v=1641696514",
      
    },
    {
      image :"https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_900x.jpg?v=1641696513",
  
    }, {
      image :"https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_900x.jpg?v=1641696514",
     
    }, {
      image:"https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_900x.jpg?v=1641696513",
    
    },
  
    
  ];


  const icons_array = [
    {
      image :"https://vela-demo-1.myshopify.com/cdn/shop/files/manufacture1_204x144.jpg?v=1613707496",
      
    },
    {
      image :"https://vela-demo-1.myshopify.com/cdn/shop/files/manufacture2_204x144.jpg?v=1613707496",
  
    }, {
      image :"https://vela-demo-1.myshopify.com/cdn/shop/files/manufacture3_204x144.jpg?v=1613707497",
     
    }, {
      image:"https://vela-demo-1.myshopify.com/cdn/shop/files/manufacture4_204x144.jpg?v=1613707497",
      
    
    },
    {
      image:"https://vela-demo-1.myshopify.com/cdn/shop/files/manufacture5_204x144.jpg?v=1613707497",
      
    
    },
  
    
  ];
 

  return (
    <>
    <Container maxW={"87%"}>
   <Flex>
   
      
{/* <Image src='https://vela-demo-1.myshopify.com/cdn/shop/files/slideshow3_1283x848.jpg?v=1614291895' width={"75%"}/> */}
<Flex
w={"80%"}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex height={"550px"} w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">

              <Stack
                p="8px 12px"
                pos="absolute"
                top={"15%"}
                textAlign="center"
                w="full"
                mb="8"
                color="white"
               
              >
                 <Text fontSize="md" fontWeight={"500"} >{slide.title}</Text>
                <Text fontSize="5xl" fontWeight={"500"} whiteSpace={"pre-line"}  lineHeight={"60%"}>{slide.label}</Text>
                <Heading size="3xl" fontWeight={"600"} whiteSpace={"pre-line"}  lineHeight={"100%"}>{slide.label2}</Heading>
                <Text fontSize="lg">{slide.description}</Text>
             <Center><Button width={"30%"} height={"4rem"} mt={"2%"}>Discover Now</Button></Center>   
              </Stack>
              <Image
                src={slide.img}
                alt="carousel image"
          
              h={"full"}
              w={"full"}
              
              />
             
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
    </Flex>
  
<VStack pl={3.5} height={"550px"}>
<Image src='https://vela-demo-1.myshopify.com/cdn/shop/files/vela-image21_408x408.jpg?v=1614291335'  width={"100%"} height={"50%"} pb={1.5}/>
<Image src='https://vela-demo-1.myshopify.com/cdn/shop/files/vela-image22_408x408.jpg?v=1614291335' width={"100%"} height={"50%"}/>
</VStack>
</Flex>

{/* new section */}
<Stack spacing={16}>
  <Center fontSize={"4xl"} fontWeight={"500"} mt={"10%"}>Best Sellers</Center>

<HStack justifyContent={"space-around"}>
{cardarray.map((card=>{
 return  <Card img1={card.image1} img2={card.image2} title={card.title}  price={card.price}  />
}))}
</HStack >
<Center><Button width={"18%"} height={"3.5rem"} bg={"black"} textColor={"white"}>Load More</Button></Center>
</Stack>
<HStack py={"10rem"} justifyContent={'space-between'}>
  
  <Image src='https://vela-demo-1.myshopify.com/cdn/shop/files/home2_banner1-min_553x384.jpg?v=1642521213' width={"30%"}/>
  <Image src='https://vela-demo-1.myshopify.com/cdn/shop/files/home2_banner2-min_553x384.jpg?v=1642521224'  width={"30%"}/>
  <Image src='https://vela-demo-1.myshopify.com/cdn/shop/files/home2_banner3-min_553x384.jpg?v=1642521236'  width={"30%"}/>
  
</HStack>
<Stack spacing={16}> 
<Center>
<Text fontSize={'2rem'} fontWeight={'500'}>
    Get Inspired From Instagram
  </Text>
</Center>
 <Center>
  <HStack justifyContent={"space-between"}>
{insta_array.map((insta=>{
 return <Instacard img={insta.image}/>
}))}
  </HStack>
  </Center>
  <Center>
<Divider orientation='horizontal' colorScheme='blackAlpha' borderColor={"grey"} />
  </Center>
  <Center>
  <HStack justifyContent={"space-between"}>
{icons_array.map((icons=>{
 return <IconsCard img={icons.image}/>
}))}
  </HStack>
  </Center>

</Stack>
<Box pb={"8%"} pt={"12%"} >
  <Center>
    <VStack>
  <Heading>Manor</Heading>
  <Text textAlign={"center"} width={'50%'}>Quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
     Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum</Text>
     </VStack>
  </Center>
</Box>
</Container>
</>
  )
}

export default Home
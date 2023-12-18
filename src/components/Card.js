import { Image,Box, Button, Center,ButtonGroup ,Text, VStack} from '@chakra-ui/react'
import {FaShoppingCart} from "react-icons/fa"
import React,{useState} from 'react'

function Cards(props) {

  const [image, setImage] = useState(props.img1);

  

  return (

   <Box width={"15rem"} className='box'>
    <Box width={"15rem"}>
  <Image
       position={"relative"}
      style={{ content: image }}
       onMouseEnter={() => setImage(props.img2)}
       onMouseOut={() =>  setImage(props.img1)}
    width={"15rem"}
    />
    <Center>
  
     <ButtonGroup spacing='2'  className='button' pos={"absolute"} mb={"10%"} >
      <Button bg={"black"} textColor={'white'} borderRadius={"0%"} width={"100%"} px={10} opacity={"0.9"}>
        Buy now
      </Button>
      <Button textColor={'white'} borderRadius={"0%"} width={"40%"} bg={"black"} opacity={"0.9"}>
        <FaShoppingCart/>
      </Button>
    </ButtonGroup>
    <VStack>
      <Text fontWeight={"500"}>{props.title}</Text>
      <Text fontSize={"0.8rem"} color={"darkgrey"}>{props.price}</Text>

    </VStack>
    
   

    </Center>
    
    </Box>
  

    
    </Box>
  )
}

export default Cards
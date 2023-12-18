import { Image,Box, Container, Button, Center} from '@chakra-ui/react'
import { FaInstagram} from "react-icons/fa"

import React from 'react'

function Instacard({img}) {



  return (
   <>
<Box  width={"22%"} height={"22%"} pos={"relative"} className='box1'>
  
<Image 
src={img}
className='img'
/>
<Center>
<Box position={"absolute"} bottom={"40%"} className='button' ><FaInstagram size={"2rem"} color='white'/></Box>
</Center>
</Box>


   </>




   
  )
}

export default Instacard
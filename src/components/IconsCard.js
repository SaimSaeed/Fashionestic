import React from 'react'
import {Box,Image} from "@chakra-ui/react"

function IconsCard({img}) {
  return (
 <Box  width={"22%"} height={"22%"}>
<Image 
src={img}
className='img'
/>
</Box>

  )
}

export default IconsCard
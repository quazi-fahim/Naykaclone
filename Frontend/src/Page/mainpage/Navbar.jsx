import React from 'react'
import { Box, Image, Flex, Button } from "@chakra-ui/react";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Searchbox from '../navpages/Searchbox';
const Navbar = () => {
  return (
   <Box position={"sticky"} top={0} >

<Flex
        as="nav"
        align="center"
        justify="center"
        wrap="wrap"
        p={4}
       mt="-4"
        height="50px"
        gap="30px"
      >
<Link to="/"   _hover={{ textDecoration: "none" }}>
          <Box width={"80px"} height={"50px"} >
            <Image
              src="https://cdn.iconscout.com/icon/free/png-256/free-nykaa-logo-icon-download-in-svg-png-gif-file-formats--cosmetics-makeup-beauty-fashion-care-brand-pack-logos-icons-2822953.png?f=webp&w=256"
              alt="Aquarium Fish Store"
              ml="20px"
              width="100%"
              height="100%"
            />
          </Box>
        </Link>

  <Flex
        as="nav"
        align="center"
        justify="flex-start"
        wrap="wrap"
        p={4}
       fontWeight={"550"}
        height="50px"
        gap="20px"
      
      >
         
        <Link   _hover={{ textDecoration: "none", color:"#FF93BC" }} to="/categories">Categories</Link>
        <Link  _hover={{ textDecoration: "none",color:"#FF93BC"  }} to='/brand'>Brand</Link>
        <Link  _hover={{ textDecoration: "none",color:"#FF93BC"  }} to="/luxe">Luxe</Link>
        <Link  _hover={{ textDecoration: "none",color:"#FF93BC"  }} to="/naykafashion">Naykaa Fashion</Link>
        <Link _hover={{ textDecoration: "none" ,color:"#FF93BC" }}  to="/beautyadvice">Beauty Advice</Link>
       
        
      </Flex>
      <Searchbox/>
      <Button style={{background:"#E80071",color:"#ffffff"}} _hover={{background:"E2006F"}} ><Link  _hover={{ textDecoration: "none" }} color={"#ffffff"} to="/signin">Sign in</Link></Button>
      <Link   to="/cart"><IoBagHandleOutline size={"30px"}/></Link>
      </Flex>
   </Box>
  )
}

export default Navbar
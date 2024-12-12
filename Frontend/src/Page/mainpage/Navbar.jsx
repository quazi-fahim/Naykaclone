import React from 'react';
import { Box, Image, Flex, Button } from '@chakra-ui/react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import Searchbox from '../navpages/Searchbox';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/signin/action';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Access user state from Redux

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action to Redux
  };

  return (
    <Box 
      position="fixed"  // Ensures navbar stays fixed at the top
      top={12} 
      left={0}  // Ensure it stays at the left edge
      width="100%"  // Make the navbar span the entire width
      zIndex={10}  // Ensure navbar stays on top of other content
      backgroundColor="white"  // Make sure navbar has a background
      boxShadow="sm"  // Adds subtle shadow for visibility
      padding="0 20px"  // Add padding to avoid content touching the edges
      height="60px"  // Set a fixed height for consistency
      display="flex"  // Use flex layout for positioning child elements
      justifyContent="center"  // Space between logo, nav links, and buttons
      alignItems="center"  // Vertically center the items in the navbar
      gap="25px"
    >
      {/* Logo */}
      <Link to="/" _hover={{ textDecoration: "none" }}>
        <Box width="80px" height="50px">
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-nykaa-logo-icon-download-in-svg-png-gif-file-formats--cosmetics-makeup-beauty-fashion-care-brand-pack-logos-icons-2822953.png?f=webp&w=256"
            alt="Aquarium Fish Store"
            ml="20px"
            width="100%"
            height="100%"
            objectFit="contain"  // Ensure the logo fits within the box without stretching
          />
        </Box>
      </Link>

      {/* Navbar Links */}
      <Flex align="center" gap="20px" display={{ base: "none", md: "flex" }}>
        <Link _hover={{ textDecoration: "none", color:"#FF93BC" }} to="/">Categories</Link>
        <Link _hover={{ textDecoration: "none", color:"#FF93BC" }} to='/brand'>Brand</Link>
        <Link _hover={{ textDecoration: "none", color:"#FF93BC" }} to="/luxe">Luxe</Link>
        <Link _hover={{ textDecoration: "none", color:"#FF93BC" }} to="/naykafashion">Naykaa Fashion</Link>
        <Link _hover={{ textDecoration: "none", color:"#FF93BC" }} to="/beautyadvice">Beauty Advice</Link>
      </Flex>

      {/* Search Box */}
      <Searchbox />

      {/* Authentication Button */}
      {user ? (
        <Button
          style={{ background: "#E80071", color: "#ffffff" }}
          _hover={{ background: "#E2006F" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button style={{ background: "#E80071", color: "#ffffff" }} _hover={{ background: "#E2006F" }}>
          <Link _hover={{ textDecoration: "none" }} color={"#ffffff"} to="/signin">Sign in</Link>
        </Button>
      )}
      <Button style={{ background: "#E80071", color: "#ffffff" }} _hover={{ background: "#E2006F" }}>
          <Link _hover={{ textDecoration: "none" }} color={"#ffffff"} to="/register">Sign up</Link>
        </Button>

      {/* Cart Icon */}
      <Link to="/cart">
        <IoBagHandleOutline size={"30px"} />
      </Link>
    </Box>
  );
};

export default Navbar;

import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Categories = () => {
  const categories = [
    "Makeup", "Skin", "Hair", "Appliances", "Bath&Body", 
    "Natural", "Mom&Baby", "Health&Wellness", "Men", "Fragrance", "Lingerie&Accessories"
  ]; // Example categories

  return (
    <Box
      height={{ base: "auto", md: "80px" }} // Adjust height on smaller screens
      mt="60px"
      backgroundColor="white"
      boxShadow="sm"
      padding={{ base: "10px", md: "0 20px" }} // Adjust padding on smaller screens
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Categories container */}
      <Flex
        gap={{ base: 3, md: 5 }} // Adjust gap on smaller screens
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap" // Allow items to wrap on smaller screens
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            padding="5px"
            _hover={{ color: "#E2006F", cursor: "pointer" }}
            minWidth={{ base: "120px", sm: "150px", md: "auto" }} // Adjust min width based on screen size
            textAlign="center"
          >
            <Text fontSize={{ base: "sm", md: "md" }}>{category}</Text> {/* Adjust font size for responsiveness */}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Categories;

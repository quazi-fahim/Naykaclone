import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // import arrow icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Secondslider = () => {
  // Create a reference for the slider
  const sliderRef = useRef(null);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows because we are using custom ones
    focusOnSelect: true,
  };

  // Function to go to the previous slide
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to go to the next slide
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Box mt={"50px"} ml={"7px"} mr={"7px"}>
      <Box maxWidth="100%" margin="auto" padding="20px" position="relative" mt={10}>
      {/* Slider Component with custom ref */}
      <Slider ref={sliderRef} {...sliderSettings}>
        <Box marginX="10px">
          <Image 
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/b100/a76d/2801/1fd6/5b07/938c/f3ac/6852/c949/174d/174d.jpeg" 
            alt="Sale 12/12"
            borderRadius="10px"
            marginBottom="15px"
          />
        </Box>

        <Box marginX="10px">
          <Image 
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/6a80/0be3/2faa/265d/686a/e262/0b1b/44c3/1b87/2cb9/2cb9.jpeg" 
            alt="Hydration vs Moisturising"
            borderRadius="10px"
            marginBottom="15px"
          />
        </Box>

        <Box marginX="10px">
          <Image 
            src="https://imgmedia.lbb.in/media/2024/09/66da98444601c50dffa50aef_1725601860650.jpg" 
            alt="Festive Bucket List Sale"
            borderRadius="10px"
            marginBottom="15px"
          />
        </Box>
      </Slider>

      {/* Custom Left Arrow */}
      <Box position="absolute" top="50%" left="0" transform="translateY(-50%)">
        <IconButton 
          icon={<FaArrowLeft />} 
          aria-label="Previous Slide" 
          variant="outline" 
          colorScheme="teal" 
          onClick={goToPrev} // Call goToPrev function
          backgroundColor="white" // White background
          borderRadius="50%" // Circular button
          size="lg" // Increase the size of the button
          padding="10px" // Adjust padding to make it round
          boxShadow="md" // Optional: Add a shadow for better visibility
          _hover={{ backgroundColor: 'gray.100' }} // Optional: Add hover effect
        />
      </Box>

      {/* Custom Right Arrow */}
      <Box position="absolute" top="50%" right="0" transform="translateY(-50%)">
        <IconButton 
          icon={<FaArrowRight />} 
          aria-label="Next Slide" 
          variant="outline" 
          colorScheme="black" 
          onClick={goToNext} // Call goToNext function
          backgroundColor="white" // White background
          borderRadius="50%" // Circular button
          size="lg" // Increase the size of the button
          padding="10px" // Adjust padding to make it round
          boxShadow="md" // Optional: Add a shadow for better visibility
          _hover={{ backgroundColor: 'gray.100' }} // Optional: Add hover effect
            color="black"
        />
      </Box>
    </Box>
    </Box>
  );
};

export default Secondslider;

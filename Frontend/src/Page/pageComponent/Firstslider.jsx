import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // import arrow icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Firstslider = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows because we are using custom ones
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Box bg={'green.100'}>
      <Box bg={'green.100'}  margin="50px" padding="20px" position="relative">
      {/* Slider Component with custom ref */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {/* Slide 1 */}
        <Box w="300px" h="300px" padding="10px" boxShadow="md" borderRadius="10px" bg="white">
          <Image 
            src="https://via.placeholder.com/300x200" 
            alt="Makeup Bestsellers"
            borderRadius="10px"
            objectFit="cover"
            boxSize="100%" // Ensures the image fills the box size
          />
        </Box>

        {/* Slide 2 */}
        <Box w="300px" h="300px" padding="10px" boxShadow="md" borderRadius="10px" bg="white">
          <Image 
            src="https://via.placeholder.com/300x200" 
            alt="Skin Care"
            borderRadius="10px"
            objectFit="cover"
            boxSize="100%" // Ensures the image fills the box size
          />
        </Box>

        {/* Slide 3 */}
        <Box w="300px" h="300px" padding="10px" boxShadow="md" borderRadius="10px" bg="white">
          <Image 
            src="https://via.placeholder.com/300x200" 
            alt="Hair Care"
            borderRadius="10px"
            objectFit="cover"
            boxSize="100%" // Ensures the image fills the box size
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
          onClick={goToPrev}
          backgroundColor="white" 
          borderRadius="50%" 
          size="lg" 
          padding="10px"
          boxShadow="md" 
          _hover={{ backgroundColor: 'gray.100' }}
        />
      </Box>

      {/* Custom Right Arrow */}
      <Box position="absolute" top="50%" right="0" transform="translateY(-50%)">
        <IconButton 
          icon={<FaArrowRight />} 
          aria-label="Next Slide" 
          variant="outline" 
          colorScheme="black" 
          onClick={goToNext}
          backgroundColor="white" 
          borderRadius="50%" 
          size="lg" 
          padding="10px"
          boxShadow="md" 
          _hover={{ backgroundColor: 'gray.100' }}
        />
      </Box>
    </Box>
    </Box>
  );
};

export default Firstslider;

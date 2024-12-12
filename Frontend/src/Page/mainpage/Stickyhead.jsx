import { Box } from '@chakra-ui/react';
import React from 'react';

const Stickyhead = () => {
  return (
    <Box
      position="sticky"  // Makes the header sticky
      top={0}  // Keeps it at the top
      background="#FF93BC"  // Background color of the sticky header
      height="50px"  // Height of the header
      zIndex={10}  // Ensures it stays on top of other content
    >
      {/* You can add content or other components here, like text, logo, etc. */}
      <Box display="flex" alignItems="center" justifyContent="center" height="100%">
       
      </Box>
    </Box>
  );
};

export default Stickyhead;

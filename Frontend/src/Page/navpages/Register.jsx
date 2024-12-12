import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Input, Button, Text } from '@chakra-ui/react';
import { register } from '../../Redux/signin/action';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({ name: '', email: '', password: '',role:'' });
  const dispatch = useDispatch();
  const { isLoading, error, successMessage } = useSelector((state) => state);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    dispatch(register(data));
    navigate("/signin")
  };

  return (
    <Box p={5} maxW="400px" mx="auto" mt={10} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Text fontSize="2xl" mb={4} textAlign="center">Register</Text>

      {error && <Text color="red.500" mb={4}>{error}</Text>}
      {successMessage && <Text color="green.500" mb={4}>{successMessage}</Text>}

      
        
        <Input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleInputChange}
        />
      

        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleInputChange}
        />
   

      
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleInputChange}
        />
          
          <Input
          type="role"
          name="role"
          placeholder="Enter role"
          value={data.role}
          onChange={handleInputChange}
        />
    

      <Button
        colorScheme="teal"
        width="full"
        onClick={handleRegister}
        isLoading={isLoading}
        loadingText="Registering..."
      >
        Register
      </Button>
    </Box>
  );
};

export default Register;

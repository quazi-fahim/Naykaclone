import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { login, logout } from '../../Redux/signin/action';
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate(); // Initialize the navigate hook
  const dispatch = useDispatch();
  const { isLoading, error, isLoggedIn } = useSelector((state) => state); // Assuming 'isLoggedIn' is in state

  useEffect(() => {
    if (isLoggedIn) {
      setSuccessMessage("Login successful! You are already logged in.");
    }
  }, [isLoggedIn]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      await dispatch(login(data)); // Dispatch login action
      setSuccessMessage("Login successful! Redirecting to home...");
      setTimeout(() => {
        navigate("/"); // Navigate to home after a delay
      }, 2000); // Delay for 2 seconds to show the success message
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    setSuccessMessage(""); // Reset success message
    navigate("/signin"); // Navigate back to signin
  };

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      height="50vh"  // Takes full height of the viewport
      p={5}
    >
      <Box 
        p={5} 
        maxW="400px" 
        width="100%"  // Ensures the box adjusts to screen size
        borderWidth={1} 
        borderRadius="lg" 
        boxShadow="md"
        backgroundColor="white"
      >
        <Text fontSize="2xl" mb={4} textAlign="center">Please Login</Text>

        {error && <Text color="red.500" mb={4}>{error}</Text>}
        {successMessage && <Text color="green.500" mt={3} mb={4}>{successMessage}</Text>} {/* Success message */}

        {!isLoggedIn ? (
          <>
            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={data.email}
              onChange={handleInputChange}
              mb={3}
            />

            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={data.password}
              onChange={handleInputChange}
              mb={4}
            />

            <Button
              colorScheme="teal"
              width="full"
              onClick={handleLogin}
              isLoading={isLoading}
              loadingText="Logging in..."
            >
              Login
            </Button>
          </>
        ) : (
          <Button
            colorScheme="red"
            width="full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Signin;

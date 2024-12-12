import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Text, List, ListItem, Flex, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, setCart, setTotalPrice } from '../../Redux/cart/action';

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  useEffect(() => {
    axios.get('/cart')
      .then(response => {
        dispatch(setCart(response.data.cart || []));  // Update cart in Redux store
        dispatch(setTotalPrice(response.data.totalPrice || 0));  // Update total price in Redux store
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));  // Dispatch the action to remove the item
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" minHeight="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Shopping Cart
      </Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <List spacing={4}>
          {cart.map((item) => (
            <ListItem key={item._id} borderBottom="1px solid" pb={4}>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="lg" fontWeight="semibold">{item.productId.name}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text>Price: ${item.price}</Text>
                </Box>
                <Button colorScheme="red" onClick={() => handleRemoveFromCart(item._id)}>Remove</Button>
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
      <Flex justify="space-between" mt={6}>
        <Text fontSize="lg" fontWeight="bold">Total Price: ${totalPrice}</Text>
      </Flex>
    </Box>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For accessing the URL params
import { Box, Image, Heading, Text, VStack,  Button, Spinner, Alert,  } from "@chakra-ui/react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data.product);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <Box textAlign="center" mt="50px">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt="50px">
        <Alert status="error">
      
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box maxW="1200px" mx="auto" p="5">
      <VStack align="flex-start" spacing="4">
        <Image
          src={product.image}
          alt={product.name}
          boxSize="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Heading as="h1" size="xl">
          {product.name}
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Category: {product.category.name}
        </Text>
        <Text fontSize="lg" color="gray.600">
          Brand: {product.brand.name}
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="teal.500">
          ${product.price}
        </Text>
        <Text fontSize="md" color="gray.600">
          Rating: <span>{product.rating}</span> / 5
        </Text>
        <Text fontSize="md" color="gray.800" mt="4">
          {product.description}
        </Text>
        <Text fontSize="sm" color="gray.500" mt="4">
          How to use: {product.howtouse || "Not available"}
        </Text>
        {product.review && (
          <Text fontSize="md" color="gray.700" mt="4">
            Review: {product.review}
          </Text>
        )}
        <Button colorScheme="teal" size="lg" mt="6">
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Input, Text, Spinner, PopoverRoot, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, PopoverTitle } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate hook

  // Debounce logic
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler); // Cleanup
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Fetch products from backend
  const fetchProducts = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get("https://nayka-backend-l0iw.onrender.com/products", {
        params: { search: query },
      });
      setProducts(response.data.products);
      setError(null); // Clear previous errors
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (debouncedSearchQuery) {
      fetchProducts(debouncedSearchQuery);
    } else {
      setProducts([]); // Clear products if search query is empty
    }
  }, [debouncedSearchQuery]);

  // Handle product click to navigate to the detail page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to product detail page
  };

  return (
    <Box mt={4}>
      <Input
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="lg"
        mb="4"
      />

      {loading && (
        <Box textAlign="center" mt="4">
          <Spinner size="lg" />
          <Text mt="2">Loading...</Text>
        </Box>
      )}

      {/* Error Message Popover */}
      {error && (
        <PopoverRoot isOpen={!!error}>
          <PopoverTrigger>
            <Box>
              <Text color="red.500" mt="4">
                Error occurred
              </Text>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <PopoverTitle>Error</PopoverTitle>
              <Text>{error}</Text>
            </PopoverBody>
          </PopoverContent>
        </PopoverRoot>
      )}

      {/* Products Popovers */}
      {products.length > 0 && (
        <Box mt="4">
          {products.map((product) => (
            <PopoverRoot key={product._id}>
              <PopoverTrigger>
                <Text
                  fontWeight="bold"
                  color="blue.500"
                  cursor="pointer"
                  mt="2"
                  onClick={() => handleProductClick(product._id)} // Handle click to navigate
                >
                  {product.name}
                </Text>
              </PopoverTrigger>
            </PopoverRoot>
          ))}
        </Box>
      )}

      {/* No Products Found Message */}
      {!loading && products.length === 0 && searchQuery && !error && (
        <Text mt="4" color="gray.500">
          No products found. Try a different search.
        </Text>
      )}
    </Box>
  );
};

export default SearchBox;

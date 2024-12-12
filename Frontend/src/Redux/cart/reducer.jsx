
const initialState = {
    cart: [],
    totalPrice: 0
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CART':
        return {
          ...state,
          cart: action.payload
        };
      case 'SET_TOTAL_PRICE':
        return {
          ...state,
          totalPrice: action.payload
        };
      case 'REMOVE_ITEM':
        return {
          ...state,
          cart: state.cart.filter(item => item._id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
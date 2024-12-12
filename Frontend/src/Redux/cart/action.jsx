
export const SET_CART="SET_CART";
export const SET_TOTAL_PRICE="SET_TOTAL_PRICE";
export const REMOVE_ITEM="REMOVE_ITEM";





export const setCart = (cart) => {
    return {
      type: 'SET_CART',
      payload: cart
    };
  };
  
  export const setTotalPrice = (totalPrice) => {
    return {
      type: 'SET_TOTAL_PRICE',
      payload: totalPrice
    };
  };
  
  export const removeFromCart = (itemId) => {
    return {
      type: 'REMOVE_ITEM',
      payload: itemId
    };
  };
  
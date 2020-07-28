import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [shoppingcart, setshoppingcart] = useState([]);
  return (
    <CartContext.Provider value={[shoppingcart, setshoppingcart]}>
      {props.children}
    </CartContext.Provider>
  );
};

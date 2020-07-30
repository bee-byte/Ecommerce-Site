import React, { useContext, Fragment } from 'react';
import { CartContext } from '../context/cart/CartContext';

const Checkout = () => {
  const [shoppingcart, setshoppingcart] = useContext(CartContext);

  const totalprice = shoppingcart.reduce((acc, curr) => acc + curr.price, 0);

  return <div></div>;
};

export default Checkout;

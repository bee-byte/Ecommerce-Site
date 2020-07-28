import React, { useContext } from 'react';
import { CartContext } from '../context/cart/CartContext';
import Checkout from '../layout/Checkout';

const ShoppingCart = () => {
  const [shoppingcart, setshoppingcart] = useContext(CartContext);

  const totalprice = shoppingcart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Checkout>
      <div>
        <h4>
          Cart
          <span>{shoppingcart.length}</span>
        </h4>
        <span>total price: {totalprice}</span>
      </div>
    </Checkout>
  );
};

export default ShoppingCart;

import React, { useContext, Fragment } from 'react';
import { CartContext } from '../context/cart/CartContext';
import { item } from '../product pages/RugbyItems';

const ShoppingCart = () => {
  console.log('Shopping Cart');
  const [shoppingcart, setshoppingcart] = useContext(CartContext);

  const totalprice = shoppingcart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(shoppingcart);
  return (
    <Fragment>
      <div className="container">
        <div className="py-5 text-center">
          <h2>Checkout</h2>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span>{shoppingcart.length}</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">R{totalprice}</span>
              </li>
            </ul>

            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingCart;

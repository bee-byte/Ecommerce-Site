import React, { useContext } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart/CartContext';

const RugbyItems = ({ item }) => {
  const [shoppingcart, setshoppingcart] = useContext(CartContext);
  const addToCart = () => {
    const rugby = { name: item.name, price: item.price };
    setshoppingcart((curr) => [...curr, rugby]);
  };

  return (
    <div className="items-page">
      <div className="card-container">
        <img className="item-image" src={item.image} alt={item.name} />
        <h5 className="item-name">{item.name}</h5>
        <div className="item-price">R{item.price}</div>
        <div className="item-AddToCart">{item.AddToCart}</div>
        <br />
        <Popup
          trigger={
            <button className="add-to-cart-button" onClick={addToCart}>
              Add to cart
            </button>
          }
          position="right-center"
        >
          <div>Item added</div>
        </Popup>
      </div>
    </div>
  );
};

RugbyItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RugbyItems;

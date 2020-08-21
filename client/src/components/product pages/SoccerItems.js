import React, { useContext } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart/CartContext';

const SoccerItems = ({ item }) => {
  const [shoppingcart, setshoppingcart] = useContext(CartContext);
  const addToCart = () => {
    const soccer = { name: item.name, price: item.price };
    setshoppingcart((curr) => [...curr, soccer]);
  };
  return (
    <div className="items-page">
      <div className="card-container">
        <img className="item-image" src={item.image} alt={item.name} />
        <h5 className="item-name">{item.name}</h5>
        <div className="item-price">R{item.price}</div>
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

SoccerItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SoccerItems;

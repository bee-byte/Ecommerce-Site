import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart/CartContext';

const CricketItems = ({ item }) => {
  const [shoppingcart, setshoppingcart] = useContext(CartContext);
  const addToCart = () => {
    const cricket = { name: item.name, price: item.price };
    setshoppingcart((curr) => [...curr, cricket]);
  };
  return (
    <div className="items-page">
      <div className="card-container">
        <img className="item-image" src={item.image} alt={item.name} />
        <h5 className="item-name">{item.name}</h5>
        <div className="item-price">{item.price}</div>
        <button className="add-to-cart-button" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

CricketItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CricketItems;

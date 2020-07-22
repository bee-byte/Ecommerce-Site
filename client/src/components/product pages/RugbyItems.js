import React from 'react';
import PropTypes from 'prop-types';

const RugbyItems = ({ item }) => {
  return (
    <div className="items-page">
      <div className="card-container">
        <img className="item-image" src={item.image} alt={item.name} />
        <h5 className="item-name">{item.name}</h5>
        <div className="item-price">{item.price}</div>
        <div className="item-AddToCart">{item.AddToCart}</div>
      </div>
    </div>
  );
};

RugbyItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RugbyItems;

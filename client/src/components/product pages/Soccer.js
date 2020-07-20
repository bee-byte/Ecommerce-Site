import React, { Fragment } from 'react';
import SoccerItems from './SoccerItems';
import './Products.css';

const socceritems = [
  {
    name: 'Soccer Ball',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price :R100',
    AddToCart: '',
  },
  {
    name: 'Soccer Bag',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Soccer Cones',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Soccer Poles',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Soccer Boots',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price : R100',
    AddToCart: '',
  },
  {
    name: 'Soccer NailClipper',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
];

const Soccer = () => {
  return (
    <Fragment>
      <div className="rows">
        <div className="products">
          {socceritems.map((item) => (
            <SoccerItems item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Soccer;

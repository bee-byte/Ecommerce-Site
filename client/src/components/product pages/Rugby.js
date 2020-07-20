import React, { Fragment } from 'react';
import RugbyItems from './RugbyItems';
import './Products.css';

const rugbyitems = [
  {
    name: 'Rugby Ball',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price :R100',
    AddToCart: '',
  },
  {
    name: 'Rugby Bag',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Rugby Cap',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Rugby Gum Holder',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Rugby Tackle Bag',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price : R100',
    AddToCart: '',
  },
  {
    name: 'Rugby NailClipper',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
];

const Rugby = () => {
  return (
    <Fragment>
      <div className="rows">
        <div className="products">
          {rugbyitems.map((item) => (
            <RugbyItems item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Rugby;

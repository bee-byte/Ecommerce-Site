import React, { Fragment } from 'react';
import CricketItems from './CricketItems';
import './Products.css';

const cricketitems = [
  {
    name: 'Cricket Ball',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price :R100',
    AddToCart: '',
  },
  {
    name: 'Cricket Bat',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Wickets',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Knee Pads',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
  {
    name: 'Cricket Helmet',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price : R100',
    AddToCart: '',
  },
  {
    name: 'Cricket Cap',
    image: 'https://i.postimg.cc/4ydXDTJz/training-ball.jpg',
    price: 'Price: R100',
    AddToCart: '',
  },
];

const Cricket = () => {
  return (
    <Fragment>
      <div className="rows">
        <div className="products">
          {cricketitems.map((item) => (
            <CricketItems item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Cricket;

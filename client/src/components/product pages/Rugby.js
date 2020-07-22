import React, { Fragment } from 'react';
import RugbyItems from './RugbyItems';
import './Products.css';

const rugbyitems = [
  {
    image: 'https://i.postimg.cc/wj2sxBgJ/gilbert-ball.jpg',
    name: 'Rugby Ball',
    price: 'Price :R299.99',
    AddToCart: '',
  },
  {
    image: 'https://i.postimg.cc/x8Lcwf6X/kicking-tee.jpg',
    name: 'Rugby Kicking Tee',
    price: 'Price: R260.00',
    AddToCart: '',
  },
  {
    image: 'https://i.postimg.cc/FF0zsKxR/rugby-shoulder-pads.jpg',
    name: 'Rugby Shoulder Pads',
    price: 'Price: R799.99',
    AddToCart: '',
  },
  {
    image: 'https://i.postimg.cc/Yqw41FSY/Mouth-Guard.jpg',
    name: 'Rugby Gum Guard',
    price: 'Price: R89.90',
    AddToCart: '',
  },
  {
    image: 'https://i.postimg.cc/FHCsnkhP/tackling-bag.png',
    name: 'Rugby Tackle Bag',
    price: 'Price : R5 500.00',
    AddToCart: '',
  },
  {
    name: 'Rugby Scrum Machine',
    image: 'https://i.postimg.cc/KYVj4kVK/rugby-scrum-machine.jpg',
    price: 'Price: R19 999.99',
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

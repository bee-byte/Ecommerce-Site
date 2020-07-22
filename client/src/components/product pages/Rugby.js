import React, { Fragment } from 'react';
import RugbyItems from './RugbyItems';
import './Products.css';

const rugbyitems = [
  {
    name: 'Rugby Ball',
    image: 'https://i.postimg.cc/wj2sxBgJ/gilbert-ball.jpg',
    price: 'Price :R299.99',
    AddToCart: '',
  },
  {
    name: 'Rugby Kicking Tee',
    image: 'https://i.postimg.cc/x8Lcwf6X/kicking-tee.jpg',
    price: 'Price: R260.00',
    AddToCart: '',
  },
  {
    name: 'Rugby Shoulder Pads',
    image: 'https://i.postimg.cc/FF0zsKxR/rugby-shoulder-pads.jpg',
    price: 'Price: R799.99',
    AddToCart: '',
  },
  {
    name: 'Rugby Gum Guard',
    image: 'https://i.postimg.cc/Yqw41FSY/Mouth-Guard.jpg',
    price: 'Price: R89.90',
    AddToCart: '',
  },
  {
    name: 'Rugby Tackle Bag',
    image: 'https://i.postimg.cc/FHCsnkhP/tackling-bag.png',
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

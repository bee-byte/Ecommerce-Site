import React, { Fragment } from 'react';
import RugbyItems from './RugbyItems';
import './Products.css';

const rugbyitems = [
  {
    id: 1,
    image: 'https://i.postimg.cc/wj2sxBgJ/gilbert-ball.jpg',
    name: 'Rugby Ball',
    price: 300.0,
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/x8Lcwf6X/kicking-tee.jpg',
    name: 'Rugby Kicking Tee',
    price: 260.0,
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/FF0zsKxR/rugby-shoulder-pads.jpg',
    name: 'Rugby Shoulder Pads',
    price: 800.0,
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/Yqw41FSY/Mouth-Guard.jpg',
    name: 'Rugby Gum Guard',
    price: 90.0,
  },
  {
    id: 5,
    image: 'https://i.postimg.cc/FHCsnkhP/tackling-bag.png',
    name: 'Rugby Tackling Bag ',
    price: 5500.0,
  },
  {
    id: 6,
    name: 'Rugby Scrum Machine',
    image: 'https://i.postimg.cc/KYVj4kVK/rugby-scrum-machine.jpg',
    price: 20000.0,
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

import React, { Fragment } from 'react';
import SoccerItems from './SoccerItems';
import './Products.css';

const socceritems = [
  {
    name: 'Soccer Ball',
    image: 'https://i.postimg.cc/xjZ5YttY/soccer-ball1.jpg',
    price: 269.98,
  },
  {
    name: 'Agility Hurdles',
    image: 'https://i.postimg.cc/NfftqGJZ/soccer-agility-hurdles.png',
    price: 899.98,
  },
  {
    name: 'Training Cones',
    image: 'https://i.postimg.cc/fbXnjVyS/training-cones.jpg',
    price: 299.99,
  },
  {
    name: 'Goal Posts',
    image: 'https://i.postimg.cc/pX2WWJTG/goal-posts.jpg',
    price: 1699.99,
  },
  {
    name: 'Gym Bag',
    image: 'https://i.postimg.cc/c1B5fV7m/gym-bag.jpg',
    price: 1099.99,
  },
  {
    name: 'Shin Guards',
    image: 'https://i.postimg.cc/jS1thVhm/shin-guards.jpg',
    price: 99.99,
  },
];

const Soccer = () => {
  return (
    <Fragment>
      <div className="rows">
        <div className="products">
          {socceritems.map((item) => (
            <SoccerItems item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Soccer;

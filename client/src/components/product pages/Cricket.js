import React, { Fragment } from 'react';
import CricketItems from './CricketItems';
import './Products.css';

const cricketitems = [
  {
    name: 'Cricket Ball',
    image: 'https://i.postimg.cc/m2SvmxTV/cricket-ball.jpg',
    price: 'Price :R149.90',
    AddToCart: '',
  },
  {
    name: 'Cricket Bat',
    image: 'https://i.postimg.cc/8Cx97Nbk/cricket-bat.jpg',
    price: 'Price: R999.99',
    AddToCart: '',
  },
  {
    name: 'Wickets',
    image: 'https://i.postimg.cc/pVf4dN5x/wickets.png',
    price: 'Price: R599.99',
    AddToCart: '',
  },
  {
    name: 'Batting Pads',
    image: 'https://i.postimg.cc/dtvMRQcL/batting-pads.jpg',
    price: 'Price: R499.90',
    AddToCart: '',
  },
  {
    name: 'Cricket Helmet',
    image: 'https://i.postimg.cc/tJjczkfL/cricket-helmet.jpg',
    price: 'Price : R899.90',
    AddToCart: '',
  },
  {
    name: 'Wicket Keeping Gloves',
    image: 'https://i.postimg.cc/9MDsLzLj/wicket-keeping-gloves.jpg',
    price: 'Price: R399.90',
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

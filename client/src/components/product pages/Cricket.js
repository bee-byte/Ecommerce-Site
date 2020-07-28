import React, { Fragment } from 'react';
import CricketItems from './CricketItems';
import './Products.css';

const cricketitems = [
  {
    id: 1,
    name: 'Cricket Ball',
    image: 'https://i.postimg.cc/vZCt9z4M/dukes.png',
    price: 'R149.90',
  },
  {
    id: 2,
    name: 'Cricket Bat',
    image: 'https://i.postimg.cc/8Cx97Nbk/cricket-bat.jpg',
    price: 'R999.99',
  },
  {
    id: 3,
    name: 'Wickets',
    image: 'https://i.postimg.cc/pVf4dN5x/wickets.png',
    price: 'R599.99',
  },
  {
    id: 4,
    name: 'Batting Pads',
    image: 'https://i.postimg.cc/dtvMRQcL/batting-pads.jpg',
    price: 'R499.90',
  },
  {
    id: 5,
    name: 'Cricket Helmet',
    image: 'https://i.postimg.cc/tJjczkfL/cricket-helmet.jpg',
    price: 'R90.00',
  },
  {
    id: 6,
    name: 'Wicket Keeping Gloves',
    image: 'https://i.postimg.cc/9MDsLzLj/wicket-keeping-gloves.jpg',
    price: 'R399.90',
  },
];

const Cricket = () => {
  return (
    <Fragment>
      <div className="rows">
        <div className="products">
          {cricketitems.map((item) => (
            <CricketItems item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Cricket;

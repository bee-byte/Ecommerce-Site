import React, { Fragment } from 'react';
import './Home.css';

const Home = () => {
  return (
    <Fragment>
      <div className="bg-image1">
        <div className="HomeScreen">
          <div className="bg">
            <div className="wrap">
              <div className="heading-bg"></div>
              <div className="Home-Heading">
                <h1>Sports Inc.</h1>
                <h3>
                  'Whatever it takes'
                  <i className="fas fa-fire-alt" />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

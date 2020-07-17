import React, { Fragment } from 'react';
import './Home.css';

const Home = () => {
  return (
    <Fragment>
      <div className="HomeScreen">
        <div class="bg">
          <div class="wrap">
            <div class="newsletter-bg"></div>
            <div class="Home-Heading">
              <h1>Sports Inc.</h1>
              <h3>
                'Whatever it takes'
                <i class="fas fa-fire-alt" />
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="FeaturedItems">
        <div className="image2" />
        <h1>Popular Items</h1>
      </div> */}
    </Fragment>
  );
};

export default Home;

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-text">
        <h1 className="aboutUsheading">About Us</h1>
        <p className="aboutUs-text">
          Sports Inc. was found in 2020 during the course of the international
          pandemic.
          <br />
          It has crossed the mind of CEO that purchasing fitness items online
          would be
          <br />
          an excellent idea . Sports Inc has become one of the most popular
          retail stores
          <br />
          and been rated the <b>NUMBER 1</b> store for sports equipment in South
          Africa.
          <br />
          <br />
          Operation Hours:
          <br />
          Monday-Friday from 8am - 6pm
          <br />
          Saturday-Sunday from 9am- 4pm
          <br />
          Customer care contact number :
          <br />
          0800-751-1562
        </p>
      </div>
      <div className="card">
        <img src="https://i.postimg.cc/dVp4PYc7/about-us.jpg" alt="Logo" />
      </div>
    </div>
  );
};

export default About;

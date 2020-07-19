import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-text">
        <h1 className="aboutUsheading">About Us</h1>
        <p className="aboutUs-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          since the 1500s, when an unknown printer took a galley of type and
          <br />
          scrambled it to make a type specimen book. It has survived not only
          <br />
          five centuries, but also the leap into electronic typesetting,
          <br />
          remaining essentially unchanged. It was popularised in the 1960s with
          <br />
          the release of Letraset sheets containing Lorem Ipsum passages, and
          <br />
          more recently with desktop publishing software like Aldus PageMaker
          <br />
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="card">
        <img
          src="https://i.postimg.cc/GtmZG0Zd/featured-items-bg.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default About;

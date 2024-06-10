// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Learn more about our company, our mission, our team, and our history.
      </p>
      <div className="about-extra-info">
        <section className="about-section">
          <h2 className="about-section-title">Our Mission</h2>
          <p className="about-section-content">
            Our mission is to provide the best services to our customers and to make a positive impact in our industry.
          </p>
        </section>
        <section className="about-section">
          <h2 className="about-section-title">Our Team</h2>
          <p className="about-section-content">
            We are a group of passionate professionals committed to delivering excellence. Meet our team members:
          </p>
          <ul className="about-list">
            <li>G.Anandsagar- Frontend Developer</li>
            <li>M.Sharanya -LEAD</li>
            <li>P.swapna-Backend Developer</li>
            <li>Naidu bhageeratha</li>
            <li>A. Joy Rachel</li>
            <li>Thota Shivasaini</li>
            <li>Bonkuri charmila</li>
            <li>Polisetty.varshita</li>
            <li>Thanugula.Archana</li>
          </ul>
        </section>
        <section className="about-section">
          <h2 className="about-section-title">Our History</h2>
          <p className="about-section-content">
            Founded in 2022, our company has grown from a small startup to a leading player in the industry. Here are some key milestones:
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
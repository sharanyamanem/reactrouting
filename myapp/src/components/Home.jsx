// src/components/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <p className="home-description">
        Welcome to our application! This is the home page where you can find an overview of the features and navigate to other sections.
      </p>
      <div className="home-extra-info">
        <section className="home-section">
          <h2 className="home-section-title">Features</h2>
          <ul className="home-list">
            <li>Feature 1: Fast contact support.</li>
            <li>Feature 2: Explicit User Experience .</li>
            <li>Feature 3: Fast and Secure.</li>
          </ul>
        </section>
        <section className="home-section">
          <h2 className="home-section-title">Getting Started</h2>
          <p>
            To get started, register for an account and explore the features of our application. You can find more details in the About section.
          </p>
        </section>
        <section className="home-section">
          <h2 className="home-section-title">Contact Us</h2>
          <p>
            If you have any questions or need support, feel free to <a href="/contact">contact us</a>. We are here to help!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
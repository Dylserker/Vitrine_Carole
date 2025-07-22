import React from 'react';
import './Home.css';
import About from '../../components/About/About';
import Work from '../../components/Work/Work';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <section className="home-container">
      <h1>Bienvenue</h1>
      <section className="home-section">
        <About />
      </section>
      <section className="home-section">
        <Work />
      </section>
      <section className="home-section">
        <Contact />
      </section>
    </section>
  );
};

export default Home;

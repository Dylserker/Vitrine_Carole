import React from 'react';
import './Home.css';
import About from '../../components/About/About';
import Work from '../../components/Work/Work';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenue sur la vitrine Carole</h1>
      <p>Votre site principal est prêt !</p>
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;

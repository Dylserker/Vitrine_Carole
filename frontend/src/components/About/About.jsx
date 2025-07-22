import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-photo-wrapper">
        <img src="/photo-nounou.jpg" alt="Photo de la nourrice" className="about-photo" />
      </div>
      <div className="about-content">
        <h2>À propos</h2>
        <p>Découvrez qui nous sommes et notre histoire.</p>
      </div>
    </section>
  );
};

export default About;

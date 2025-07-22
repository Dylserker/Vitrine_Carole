import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-photo-wrapper">
        <img src="/photo-nounou.jpg" alt="Photo de la nourrice" className="about-photo" />
      </div>
      <div className="about-content">
        <h2>Qui je suis ?</h2>
        <p>Je me présente, Je m'appelle Carole Levant, j'ai 44 ans. Je suis Mariée et nous <br />
          avons 3 grands enfants. Nicolas 25 ans, Mécanicien - Kelly 22 ans, EJE <br />
          - Jérémy, étudiant. Je ne possède pas d'animal. <br />
          <br />
          Je suis assistante maternelle agrée et j'exerce ce métier depuis 2021, année où j'ai <br />
          effectué et validé ma formation initiale. Je suis agréée pour l'accueil de deux enfants. <br />
          Les raisons qui me conduisent à passer le CAP AEPE par la VAE, c'est déjà pouvoir <br />
          me sentir "professionnelle" auprès des parents et les rassurer. Ce diplôme serait une <br />
          reconnaissance personnelle et me permettrait d'évoluer dans ce beau métier.
        </p>
      </div>
    </section>
  );
};

export default About;

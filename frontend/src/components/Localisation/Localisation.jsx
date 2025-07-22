import React from 'react';
import './Localisation.css';

const Localisation = () => {
  return (
    <section className="localisation-section">
      <h2>Ma localisation</h2>
      <p>Je me situe dans la ville de Riom</p>
      <div className="localisation-map">
        <iframe
          title="Carte localisation"
          src="https://maps.google.com/maps?q=Riom%2C%2063200&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '16px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Localisation;

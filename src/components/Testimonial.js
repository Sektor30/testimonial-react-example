// src/Testimonial.js
import React from 'react';
import '../Testimonial.css'; // Para los estilos

const Testimonial = ({ name, title, image, text }) => {
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-content">
        <p className="testimonial-text">"{text}"</p>
        <p className="testimonial-name">- {name}, {title}</p>
      </div>
    </div>
  );
};

export default Testimonial;

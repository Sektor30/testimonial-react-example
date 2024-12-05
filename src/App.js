import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer'; 
import Testimonial from './components/Testimonial';

const App = () => {
  const testimonials = [
    {
      name: 'Juan Pérez',
      title: 'Desarrollador Frontend',
      image: 'https://via.placeholder.com/80',
      text: '¡Este producto cambió mi vida! Lo recomiendo al 100%.'
    },
    {
      name: 'Ana Gómez',
      title: 'Gerente de Proyecto',
      image: 'https://via.placeholder.com/80',
      text: 'Excelente atención al cliente y resultados sorprendentes.'
    },
    {
      name: 'Carlos Martínez',
      title: 'Diseñador Gráfico',
      image: 'https://via.placeholder.com/80',
      text: 'Una herramienta increíble. Ayuda mucho en mi trabajo diario.'
    }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Section id="home" title="Home">
          <p>Bienvenido a nuestra página de inicio.</p>
        </Section>
        <Section id="about" title="About">
          <p>Información sobre nosotros.</p>
        </Section>
        <Section id="services" title="Services">
          <p>Detalles de nuestros servicios.</p>
        </Section>
        <Section id="contact" title="Contact">
          <p>Información de contacto.</p>
        </Section>
      </main>



      <div className="App">
    <h1>Testimonios</h1>
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          title={testimonial.title}
          image={testimonial.image}
          text={testimonial.text}
        />
      ))}
    </div>
  </div>

      <Footer />
    </div>
  );
}

export default App;


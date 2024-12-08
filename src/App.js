import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer'; 
import Testimonial from './components/Testimonial';

const App = () => {
  const testimonials = [
    {
      name: 'Ana Gómez',
      title: 'Gerente de Proyecto',
      image: 'https://images.pexels.com/photos/4855369/pexels-photo-4855369.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
      text: '¡Este producto cambió mi vida! Lo recomiendo al 100%.'
    },
    {
      name: 'Juan Pérez',
      title: 'Desarrollador Frontend',
      image: 'https://images.pexels.com/photos/7752893/pexels-photo-7752893.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Excelente atención al cliente y resultados sorprendentes.'
    },
    {
      name: 'Carlos Martínez',
      title: 'Diseñador Gráfico',
      image: 'https://images.pexels.com/photos/7752822/pexels-photo-7752822.jpeg?auto=compress&cs=tinysrgb&w=400',
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


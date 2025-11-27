
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Identity from './components/Identity';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-gold-500 selection:text-black">
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <Identity />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;

import React from 'react';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <WorkShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Projects from './components/Projects';
import Services from './components/Services';
import Method from './components/Method';
import Sustainability from './components/Sustainability';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Vision />
        <Projects />
        <Services />
        <Method />
        <Sustainability />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Cupcakes from './components/Cupcakes';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-body selection:bg-brand-berry selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Cupcakes />
        <Gallery />
        <Reviews />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;
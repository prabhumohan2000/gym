import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Video from './components/Video';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Video />
      <Pricing />
      <WhatsApp />
    </div>
  );
}

export default App;
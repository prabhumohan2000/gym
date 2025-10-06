import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import VideoSection from './components/VideoSection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <VideoSection />
      <Pricing />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

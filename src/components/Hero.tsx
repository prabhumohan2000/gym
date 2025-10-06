import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-small">Welcome to</span>
          <span className="hero-title-large">ALPHA SCULPT ARENA</span>
        </h1>
        <p className="hero-subtitle">
          Transform Your Body, Transform Your Life
        </p>
        <p className="hero-description">
          Where champions are made. State-of-the-art facilities, expert trainers, 
          and a community dedicated to pushing limits.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={() => scrollToSection('pricing')}>
            START YOUR JOURNEY
          </button>
          <button className="hero-btn secondary" onClick={() => scrollToSection('services')}>
            EXPLORE SERVICES
          </button>
        </div>
      </div>
      
      <div className="hero-images">
        <div className="hero-image hero-image-1">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" alt="Gym Training" />
        </div>
        <div className="hero-image hero-image-2">
          <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80" alt="CrossFit Training" />
        </div>
        <div className="hero-image hero-image-3">
          <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" alt="Functional Training" />
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>Active Members</p>
        </div>
        <div className="stat-item">
          <h3>15+</h3>
          <p>Expert Trainers</p>
        </div>
        <div className="stat-item">
          <h3>10K+</h3>
          <p>Training Hours</p>
        </div>
      </div>
    </section>
  )
}

export default Hero

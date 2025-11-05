import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-image hero-image-1"></div>
        <div className="hero-image hero-image-2"></div>
        <div className="hero-image hero-image-3"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Body at
              <span className="highlight"> Alpha Sculpt Arena</span>
            </h1>
            <p className="hero-subtitle">
              Where champions are made. Experience world-class training with state-of-the-art equipment, 
              expert trainers, and a community that pushes you to achieve your fitness goals.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Active Members</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Expert Trainers</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Access</p>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary">Start Your Journey</button>
              <button className="btn btn-secondary">Watch Our Story</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
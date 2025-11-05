import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <video
          className="gym-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/gym-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="gym-title">ALPHA SCULPT ARENA</h1>
            <p className="gym-subtitle">Transform Your Body, Transform Your Life</p>
            <button className="cta-button">Start Your Journey</button>
          </div>
        </div>
      </div>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="/personal-training-icon.png" alt="Personal Training" />
              </div>
              <h3>Personal Training</h3>
              <p>One-on-one personalized training sessions tailored to your fitness goals and needs.</p>
              <button className="service-btn">Learn More</button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/crossfit-icon.png" alt="CrossFit" />
              </div>
              <h3>CrossFit</h3>
              <p>High-intensity functional movements that deliver serious fitness results.</p>
              <button className="service-btn">Learn More</button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/functional-fit-icon.png" alt="Functional Fitness" />
              </div>
              <h3>Functional Fitness</h3>
              <p>Build strength, endurance, and mobility for real-life activities and sports.</p>
              <button className="service-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
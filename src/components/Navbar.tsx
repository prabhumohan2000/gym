import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentNavbar, setCurrentNavbar] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle through different navbar styles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNavbar(prev => (prev % 3) + 1);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const renderNavbar1 = () => (
    <nav className={`navbar navbar-1 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <h2>Alpha Sculpt Arena</h2>
        </div>
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
          <a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          <button className="btn">Join Now</button>
        </div>
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );

  const renderNavbar2 = () => (
    <nav className={`navbar navbar-2 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <div className="logo">
            <div className="logo-icon">ASA</div>
          </div>
          <span>Alpha Sculpt Arena</span>
        </div>
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
          <a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div className="nav-cta">
          <button className="btn btn-secondary">Free Trial</button>
          <button className="btn">Membership</button>
        </div>
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );

  const renderNavbar3 = () => (
    <nav className={`navbar navbar-3 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <h2>Alpha Sculpt Arena</h2>
        </div>
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
          <a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-outline">Login</button>
          <button className="btn">Sign Up</button>
        </div>
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {currentNavbar === 1 && renderNavbar1()}
      {currentNavbar === 2 && renderNavbar2()}
      {currentNavbar === 3 && renderNavbar3()}
    </>
  );
};

export default Navbar;
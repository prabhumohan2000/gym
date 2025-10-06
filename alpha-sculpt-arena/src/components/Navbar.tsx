import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <Dumbbell className="logo-icon" />
            <span>Alpha Sculpt Arena</span>
          </Link>
          
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>

      {/* Secondary Navigation - Services Focus */}
      <div className="secondary-nav">
        <div className="secondary-nav-container">
          <div className="service-links">
            <a href="#personal-training" className="service-link">
              <span className="service-icon">💪</span>
              Personal Training
            </a>
            <a href="#crossfit" className="service-link">
              <span className="service-icon">🔥</span>
              CrossFit
            </a>
            <a href="#functional-fit" className="service-link">
              <span className="service-icon">⚡</span>
              Functional Fit
            </a>
          </div>
        </div>
      </div>

      {/* Pricing Navigation */}
      <div className="pricing-nav">
        <div className="pricing-nav-container">
          <div className="pricing-tabs">
            <button className="pricing-tab active">Basic</button>
            <button className="pricing-tab">Premium</button>
            <button className="pricing-tab">Elite</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data/filmsData';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3>{companyData.name}</h3>
          <p>{companyData.focus}</p>
          <div className="contact-info">
            <p>{companyData.contact}</p>
          </div>
        </div>
        
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/films/soundtrack-to-a-coup-detat">Soundtrack to a Coup d'Etat</Link>
            <Link to="/films/i-am-not-your-negro">I Am Not Your Negro</Link>
            <Link to="/films/a-taste-of-whale">A Taste of Whale</Link>
          </nav>
        </div>

        <div className="footer-section social-links">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.vimeo.com" target="_blank" rel="noopener noreferrer">Vimeo</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Warboys Films. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

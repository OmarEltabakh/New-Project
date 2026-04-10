import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/logo/logo.webp";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container ">
        
        {/* Logo - First in DOM goes to Right in RTL layout */}
        <div className="navbar-right">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo-img" />
            <span className="logo-text">وسائل النمو</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="mobile-menu-toggle d-lg-none" onClick={toggleMenu} style={{ order: 3 }}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Center Menu - Second in DOM goes to Left in RTL layout */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/#" onClick={closeMenu}>الرئيسية</Link></li>
          <li><Link to="/#about" onClick={closeMenu}>من نحن</Link></li>
          <li>
            <Link to="/#projects" onClick={closeMenu}>المشاريع</Link>
          </li>
          <li><Link to="/#services" onClick={closeMenu}>خدمات الشركة</Link></li>
          <li><Link to="/#partners" onClick={closeMenu}>شركاء النجاح</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>تواصل معنا</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;

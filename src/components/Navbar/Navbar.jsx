import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import logo from "../../assets/logo/logo.webp";
import AnnouncementBar from './AnnouncementBar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';

  // Lock scroll when menu is open to prevent the background from moving
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <>
      <AnnouncementBar />
      <nav 
        className="navbar-custom" 
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="navbar-container">
          
          {/* Logo Section */}
          <div className="navbar-brand">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src={logo} alt="logo" className="logo-img" />
              <span className="logo-text">{t('navbar.company_name')}</span>
            </Link>
          </div>

          {/* Navigation Links - Desktop and Mobile Wrapper */}
          <div className={`navbar-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
            {/* Transparent Overlay to close menu */}
            <div className="menu-overlay" onClick={closeMenu}></div>
            
            <ul className="navbar-links ">
              <div className="mobile-menu-header d-lg-none">
                <span className="lang-switch-mobile" onClick={toggleLanguage}>
                  {i18n.language === 'ar' ? 'English' : 'عربي'}
                </span>
                <div className="close-icon" onClick={closeMenu}>✕</div>
              </div>

              <li><Link to="/#" onClick={closeMenu}>{t('navbar.home')}</Link></li>
              <li><Link to="/#about" onClick={closeMenu}>{t('navbar.about')}</Link></li>
              <li><Link to="/#projects" onClick={closeMenu}>{t('navbar.projects')}</Link></li>
              <li><Link to="/#services" onClick={closeMenu}>{t('navbar.services')}</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>{t('navbar.contact')}</Link></li>
            </ul>
          </div>

          {/* Action */}
          <div className="navbar-actions">
            {/* <span className="lang-switch d-none d-lg-block" onClick={toggleLanguage}>
              {i18n.language === 'ar' ? 'English' : 'عربي'}
            </span> */}

            <div className="mobile-toggle d-lg-none" onClick={toggleMenu}>
              <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
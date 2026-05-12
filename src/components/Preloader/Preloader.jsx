import React, { useEffect, useState } from 'react';
import './Preloader.css';
import logo from "../../assets/logo/logo.webp";

const Preloader = ({ fadeOut }) => {
  return (
    <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="logo-container">
          <img src={logo} alt="Wasael Alnomou Logo" className="preloader-logo" />
          <div className="logo-glow"></div>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        <div className="loading-text">وسائل النمو العقارية</div>
      </div>
    </div>
  );
};

export default Preloader;

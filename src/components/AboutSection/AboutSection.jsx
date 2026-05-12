import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutSection.css';
import medina1 from "../../assets/about/medina-1.webp"
import medina2 from "../../assets/about/almadena-1.jpg"

const AboutSection = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: t('about.vision_title'),
      text: t('about.vision_text'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: t('about.mission_title'),
      text: t('about.mission_text'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: t('about.goals_title'),
      text: t('about.goals_text'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];


  return (
    <section id="about" className="about-section-wrapper">
      <div className="container about-container">

        <div className="about-top-row">
          <div className="about-content-side">
            <h2 className="section-title">{t('about.title')}</h2>
            <div className="title-underline"></div>
            <p className="about-intro-text">
              {t('about.intro')}
            </p>
          </div>
          <div className="about-image-side">
            <div className="dual-image-container">
              <div className="image-wrapper main-image">
                <img src={medina1} alt="Medina Mosque" className="about-image" />
              </div>
              <div className="image-wrapper secondary-image">
                <img src={medina2} alt="Medina View" className="about-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="about-card-item">
              <div className="card-icon-wrapper">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import image1 from "../../assets/heroImages/image-1.webp"
import image2 from "../../assets/heroImages/image-2.webp"
import image3 from "../../assets/heroImages/image-3_compressed.webp"

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: image1,
      title: t('hero.s1_title'),
      subtitle: t('hero.s1_subtitle')
    },
    {
      id: 2,
      image: image2,
      title: t('hero.s2_title'),
      subtitle: t('hero.s2_subtitle')
    },
    {
      id: 3,
      image: image3,
      title: t('hero.s3_title'),
      subtitle: t('hero.s3_subtitle')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content ">
            <h1 className={`hero-title ${index === currentSlide ? 'animate' : ''}`}>{slide.title}</h1>
            <p className={`hero-subtitle ${index === currentSlide ? 'animate' : ''}`}>{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="hero-indicators ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

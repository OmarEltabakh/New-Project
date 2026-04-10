import React, { useState, useEffect } from 'react';
import './Hero.css';
import image1 from "../../assets/heroImages/image-1.webp"
import image2 from "../../assets/heroImages/image-2.webp"
import image3 from "../../assets/heroImages/image-3.webp"
const slides = [
  {
    id: 1,
    image: image1,
    title: 'نصنع الفارق في كل تفصيلة',
    subtitle: 'بيئة عمل مبتكرة تلهم النجاح'
  },
  {
    id: 2,
    image: image2,
    title: 'رؤية مستقبلية',
    subtitle: 'تطوير مستمر نحو الأفضل'
  },
  {
    id: 3,
    image: image3,
    title: 'معايير عالمية',
    subtitle: 'الجودة في صميم كل ما نقدمه'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

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

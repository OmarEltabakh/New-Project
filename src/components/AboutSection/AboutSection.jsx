import React from 'react';
import './AboutSection.css';
import aboutImage from "../../assets/heroImages/image-2.webp"

const AboutSection = () => {
  const cards = [
    {
      title: 'رؤيتنا',
      text: 'نسعى لأن نكون من الجهات الرائدة في تقديم حلول عقارية متكاملة في المملكة، من خلال تطوير مشاريع تواكب تطلعات السوق، وتقديم نموذج حديث يجمع بين الجودة، والكفاءة، والاستدامة.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: 'مهمتنا',
      text: 'تطوير فرص عقارية واعدة وتحويلها إلى مشاريع نوعية بمعايير عالية، تلبي احتياجات السوق وتسهم في تنمية المجتمع، برؤية حديثة وبصمة مميزة.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'أهدافنا',
      text: 'إدارة المشاريع بكفاءة تضمن الالتزام بالوقت والتكلفة، وتقديم حلول تسويقية فعّالة تحقق أفضل عائد استثماري.',
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
            <h2 className="section-title">عن وسائل النمو</h2>
            <div className="title-underline"></div>
            <p className="about-intro-text">
              نحن كيان عقاري نقدّم نموذجًا متكاملًا في التطوير وإدارة المشاريع العقارية، نعمل على تحويل الأفكار إلى مشاريع قائمة، ثم إلى أصول استثمارية جاهزة للتشغيل. لا نركّز فقط على البناء، بل على إدارة الرحلة بالكامل.
            </p>
          </div>
          <div className="about-image-side">
            <div className="image-frame">
              <img src={aboutImage} alt="عن شركة وسائل النمو" className="about-image" />
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

import React from 'react';
import './AboutSection.css';
import aboutImage from "../../assets/heroImages/image-2.webp"
const AboutSection = () => {
  return (
    <section id="about" className="about-section-wrapper ">
      <div className="container about-container ">
        <div className="about-content ">
          <h2 className="section-title">من نحن</h2>
          <div className="title-underline"></div>
          <p className="about-text">
            شركة عقارية تعمل في مجال التطوير العقاري بمفهوم مستقبلي يساهم في تطوير المنتج السكني في المدينة المنورة بشكل كبير من خلال تقديم خدمات سكنية والمساهمة في بناء بيئات حضارية حديثة ومتناغمة، بشكل يحقق الرفاه والاستقرار لكل عملائنا، مع التركيز على التميز في التصميم وجودة البناء والتسليم في الوقت المناسب.
          </p>
          <div className="about-stats">
             <div className="stat-card">
               <span className="stat-number">+10</span>
               <span className="stat-label">سنوات خبرة</span>
             </div>
             <div className="stat-card">
               <span className="stat-number">%100</span>
               <span className="stat-label">جودة وثقة</span>
             </div>

          </div>
        </div>
        <div className="about-image-wrapper ">
          <img src={aboutImage} alt="عن شركة وسائل النمو" className="about-image" />

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

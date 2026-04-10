import React from 'react';
import './ServicesSection.css';

const servicesList = [
  { 
    id: 1, 
    title: 'التطوير العقاري', 
    desc: 'بناء وتطوير المجمعات السكنية والتجارية بمفاهيم عصرية مبتكرة تحقق أعلى معايير الجودة والاستدامة، لنصنع معالم استثنائية.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80',
    number: '01'
  },
  { 
    id: 2, 
    title: 'التسويق العقاري', 
    desc: 'نضع عقارك في دائرة الضوء عبر خطط تسويقية متكاملة تضمن وصوله للجمهور المستهدف وتعظيم عوائدك في أسرع وقت.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    number: '02'
  },
  { 
    id: 3, 
    title: 'إدارة المشاريع', 
    desc: 'نهج احترافي وإشراف هندسي دقيق لضمان تنفيذ أدق التفاصيل في مشروعك وفق الميزانية والجدول الزمني المطروح.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    number: '03'
  },
  { 
    id: 4, 
    title: 'إدارة الأملاك', 
    desc: 'راحة بالك هي هدفنا؛ ندير أملاكك باحترافية عالية مع ضمان الحفاظ على قيمة العقار وصيانته بصفة دورية.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
    number: '04'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="premium-services-wrapper">
      <div className="container">
        <div className="section-header text-center mb-5 pb-2">
          <h2 className="section-title">خدمات الشـركة</h2>
          <div className="title-underline mx-auto"></div>
          <p className="mt-3 text-muted fs-5">منظومة متكاملة من الحلول العقارية لتجربة استثنائية</p>
        </div>

        <div className="premium-services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="premium-service-card">
              <img src={service.image} alt={service.title} className="service-bg" />
              <div className="service-overlay">
                <div className="service-number">{service.number}</div>
                <div className="service-content-box">
                  <h3 className="service-premium-title">{service.title}</h3>
                  <div className="service-premium-desc-box">
                    <p className="service-premium-desc">{service.desc}</p>
                    <button className="service-premium-btn">
                      اكتشف المزيد
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

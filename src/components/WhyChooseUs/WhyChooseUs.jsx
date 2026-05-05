import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    id: 1,
    title: 'زيادة العائد',
    desc: 'زيادة العائد للعقار من خلال تحسين تأجير الوحدات وتوفير خدمات صيانة منتظمة.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'تخصيص شامل',
    desc: 'نقدم حلاً مخصصاً يتناسب مع احتياجاتك وأهدافك الخاصة.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'فريق محترف',
    desc: 'نمتلك فريقاً محترفاً متخصصاً في مجال إدارة الأملاك والأصول.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'خبرة واعتماد',
    desc: 'تمتلك وسائل النمو الخبرة الكافية في إدارة الأملاك والأصول العقارية.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="why-title">لماذا اختيار شركة وسائل النمو العقارية؟</h2>
          <div className="title-divider mx-auto"></div>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="reason-icon-wrapper">
                {reason.icon}
              </div>
              <h3 className="reason-card-title">{reason.title}</h3>
              <p className="reason-card-desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

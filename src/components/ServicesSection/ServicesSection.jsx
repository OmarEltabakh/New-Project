import { useTranslation } from 'react-i18next';
import './ServicesSection.css';
import image1 from '../../assets/services-images/image-1.webp';
import image2 from '../../assets/services-images/image-2.webp';
import image3 from '../../assets/services-images/image-3.webp';
import image4 from '../../assets/services-images/image-4.webp';

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const servicesList = [
    {
      id: 1,
      title: t('services.s1_title'),
      desc: t('services.s1_desc'),
      image: image1,
      number: '01'
    },
    {
      id: 2,
      title: t('services.s2_title'),
      desc: t('services.s2_desc'),
      image: image2,
      number: '02'
    },
    {
      id: 3,
      title: t('services.s3_title'),
      desc: t('services.s3_desc'),
      image: image3,
      number: '03'
    },
    {
      id: 4,
      title: t('services.s4_title'),
      desc: t('services.s4_desc'),
      image: image4,
      number: '04'
    }
  ];

  return (
    <section id="services" className="premium-services-wrapper">
      <div className="container">
        <div className="section-header text-center mb-5 pb-2">
          <h2 className="section-title">{t('services.title')}</h2>
          <div className="title-underline mx-auto"></div>
          <p className="mt-3 text-muted fs-5">{t('services.subtitle')}</p>
        </div>

        <div className="premium-services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="premium-service-card">
              <img 
                src={service.image} 
                alt={service.title} 
                className="service-bg" 
                decoding="async"
              />
              <div className="service-overlay">
                <div className="service-number">{service.number}</div>
                <div className="service-content-box">
                  <h3 className="service-premium-title">{service.title}</h3>
                  <div className="service-premium-desc-box">
                    <p className="service-premium-desc">{service.desc}</p>

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

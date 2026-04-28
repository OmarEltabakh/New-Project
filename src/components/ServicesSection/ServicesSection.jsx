import './ServicesSection.css';
import image1 from '../../assets/services-images/image-1.webp';
import image2 from '../../assets/services-images/image-2.webp';
import image3 from '../../assets/services-images/image-3.webp';
import image4 from '../../assets/services-images/image-4.webp';

const servicesList = [
  { 
    id: 1, 
    title: 'التطوير العقاري', 
    desc: 'بناء وتطوير المجمعات السكنية والتجارية بمفاهيم عصرية مبتكرة تحقق أعلى معايير الجودة والاستدامة، لنصنع معالم استثنائية.',
    image: image1,
    number: '01'
  },
  { 
    id: 2, 
    title: 'التسويق العقاري', 
    desc: 'نضع عقارك في دائرة الضوء عبر خطط تسويقية متكاملة تضمن وصوله للجمهور المستهدف وتعظيم عوائدك في أسرع وقت.',
    image: image2,
    number: '02'
  },
  { 
    id: 3, 
    title: 'إدارة المشاريع', 
    desc: 'نهج احترافي وإشراف هندسي دقيق لضمان تنفيذ أدق التفاصيل في مشروعك وفق الميزانية والجدول الزمني المطروح.',
    image: image3,
    number: '03'
  },
  { 
    id: 4, 
    title: 'إدارة الأملاك', 
    desc: 'راحة بالك هي هدفنا؛ ندير أملاكك باحترافية عالية مع ضمان الحفاظ على قيمة العقار وصيانته بصفة دورية.',
    image: image4,
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

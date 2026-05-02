import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { projects } from '../../data/projects';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container mt-5 text-center empty-state ">
        <h2 className="mb-4">عذراً، هذا المشروع غير موجود!</h2>
        <Link to="/" className="btn btn-outline-primary">العودة للرئيسية</Link>
      </div>
    );
  }

  const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];

  const getFeatureIcon = (text) => {
    if (text.includes('أسطح')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>;
    if (text.includes('تصميم')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>;
    if (text.includes('ذكي') || text.includes('دخول')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
    if (text.includes('تأمين')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
    if (text.includes('عزل')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>;
    if (text.includes('مصاعد')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2" ry="2"></rect><path d="M12 15V9"></path><polyline points="10 11 12 9 14 11"></polyline></svg>;
    if (text.includes('نوافذ')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="12" x2="21" y2="12"></line><line x1="12" y1="3" x2="12" y2="21"></line></svg>;
    if (text.includes('غسيل')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2" ry="2"></rect><line x1="5" y1="7" x2="19" y2="7"></line><circle cx="12" cy="14" r="3"></circle></svg>;
    if (text.includes('مساحات')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3H3v18h18V3zM9 21v-8M21 9h-8"></path></svg>;
    if (text.includes('زراعية') || text.includes('أحواض')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13V6l2.3 2.3A5.4 5.4 0 0 1 11 20zM13 20a7 7 0 0 0 7-7V6l-2.3 2.3A5.4 5.4 0 0 0 13 20zM12 20v-8M12 20v-5M12 22v-2"/></svg>;
    if (text.includes('موقع')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
    if (text.includes('ممرات')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 20l-6-6 6-6M15 4l6 6-6 6"/></svg>;
    if (text.includes('جناح')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M22 4v16M2 8h20M2 12h20M7 8v4M17 8v4"/></svg>;
    if (text.includes('سلامة') || text.includes('دفاع')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
    if (text.includes('مواقف')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 16V8h4a2 2 0 0 1 0 4H9"></path></svg>;
    if (text.includes('كود') || text.includes('بناء')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
    if (text.includes('أدوار')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 21h8M3 21h8M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M7 9h2M7 13h2M7 17h2M15 9h2M15 13h2M15 17h2"/></svg>;
    if (text.includes('سلالم') || text.includes('طوارئ')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L7 17l1 1h4l5-5V6zM4 14l3-3M2 20l3-3"/></svg>;
    if (text.includes('خزانات') || text.includes('مياه')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z"/></svg>;
    
    // Default feature icon
    return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
  };

  const getLocationIcon = (text) => {
    if (text.includes('مسجد') || text.includes('حرم')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l-9 4v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-9-4z"></path><path d="M12 12L3 8"></path><path d="M21 8l-9 4"></path><path d="M12 22v-10"></path></svg>;
    if (text.includes('جامعة')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>;
    if (text.includes('دائري') || text.includes('طريق')) return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
    
    // Default location icon
    return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
  };

  return (
    <div className="project-details-page">
      {/* Hero Section */}
      <div className="project-hero">
        <div className="hero-slider-bg">
          <div className="slide-image" style={{ backgroundImage: `url(${projectImages[0]})` }}></div>
        </div>
        
        <div className="hero-overlay "></div>
        <div className="container mt-5 hero-content ">
          <Link to="/#projects" className="back-link mb-4 d-inline-block ">
            &rarr; العودة للمشاريع
          </Link>
          <div className="project-header  d-flex flex-column align-items-center">
            <span className="project-badge mb-3 d-inline-block px-3 py-1 ">تطوير عقاري متميز</span>
            <h1 className="project-title-large">{project.title}</h1>
            <p className="project-location-hero mt-2  ">
              <svg className="location-icon ms-2" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {project.location}
            </p>
          </div>
        </div>
      </div>

      <div className="container px-3 px-lg-4 mx-auto w-100 py-5 project-main-content mt-5">
        <div className="row g-5">
          {/* Main Info Column */}
          <div className="col-lg-8">
            
            {/* Gallery Slider for Current Project */}
            <div className="content-card mb-5 modern-card p-0 overflow-hidden position-relative">
              {projectImages.length > 1 && (
                <>
                  <div className="gallery-swiper-button-prev">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
                  </div>
                  <div className="gallery-swiper-button-next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
                  </div>
                </>
              )}
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={{
                  prevEl: '.gallery-swiper-button-next',
                  nextEl: '.gallery-swiper-button-prev'
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={projectImages.length > 1}
                className="main-gallery-swiper"
                dir="rtl"
                style={{ height: '500px' }}
              >
                {projectImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="gallery-slide-card h-100 w-100 position-relative">
                      <div className="gallery-image" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                      <div className="gallery-overlay">
                        <div className="overlay-text-content">
                          <h4 className="gallery-title mb-2">{project.title}</h4>
                          <p className="gallery-desc mb-0">
                            <svg className="ms-1" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            {project.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="content-card mb-5 modern-card">
              <h3 className="section-heading mb-4 px-2">نظرة عامة على المشروع</h3>
              <p className="lead-text mt-3 px-2" style={{ whiteSpace: 'pre-line' }}>
                {project.detailedDescription || project.description}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="content-card mb-5 modern-card">
                <div className="d-flex justify-content-between align-items-center mb-4 px-2">
                  <h3 className="section-heading m-0">المميزات الرئيسية والفنية</h3>
                </div>
                
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1.2 },
                    576: { slidesPerView: 2.2 },
                    992: { slidesPerView: 3 },
                  }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  className="services-swiper pb-5"
                  dir="rtl"
                >
                  {project.features.map((tech, index) => (
                    <SwiperSlide key={index} className="h-auto">
                      <div className="feature-slider-card h-100">
                        <div className="icon-wrapper mb-3">
                          {getFeatureIcon(tech)}
                        </div>
                        <h4 className="feature-title">{tech}</h4>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-card modern-card mb-4">
              <h4 className="sidebar-heading mb-4">تفاصيل سريعة</h4>
              
              <div className="detail-item">
                <span className="detail-label">المساحات المتوفرة:</span>
                <span className="detail-value">{project.space}</span>
              </div>
              <hr className="custom-hr" />

              {project.category && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">نوع المشروع:</span>
                    <span className="detail-value">{project.category}</span>
                  </div>
                  <hr className="custom-hr" />
                </>
              )}

              {project.buildingsCount && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">عدد المباني:</span>
                    <span className="detail-value">{project.buildingsCount} مباني</span>
                  </div>
                  <hr className="custom-hr" />
                </>
              )}

              {project.floorsCount && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">عدد الأدوار:</span>
                    <span className="detail-value">{project.floorsCount} أدوار</span>
                  </div>
                  <hr className="custom-hr" />
                </>
              )}


              {project.apartmentsCount && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">عدد الشقق:</span>
                    <span className="detail-value">{project.apartmentsCount} شقة</span>
                  </div>
                  <hr className="custom-hr" />
                </>
              )}
              {project.salesType && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">نظام البيع:</span>
                    <span className="detail-value">{project.salesType}</span>
                  </div>
                  <hr className="custom-hr" />
                </>
              )}




            </div>

            {/* Locations (moved to sidebar) */}
            {project.locationsDistance && project.locationsDistance.length > 0 && (
              <div className="sidebar-card modern-card sticky-sidebar p-0 overflow-hidden">
                <div className="p-4 pb-2 border-bottom">
                  <h4 className="sidebar-heading m-0">الموقع وبعده عن المناطق</h4>
                </div>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  className="services-swiper pb-4 h-100"
                  dir="rtl"
                >
                  {project.locationsDistance.map((loc, index) => (
                    <SwiperSlide key={index} className="h-auto">
                      <div className="location-slider-card h-100 m-4 mt-3 mb-1 border-0 shadow-none text-center d-flex flex-column justify-content-center align-items-center bg-transparent p-0">
                        <div className="location-icon-wrapper mb-3" style={{ width: '80px', height: '80px' }}>
                           {getLocationIcon(loc)}
                        </div>
                        <h4 className="location-title" style={{ fontSize: '1.2rem' }}>{loc}</h4>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Button for Location (Project Specific) */}
      <div className="project-location-floating">
        <a 
          href={project.mapUrl || '#'} 
          target="_blank" 
          rel="noreferrer" 
          className="floating-btn location-btn"
          data-tooltip="الموقع"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;

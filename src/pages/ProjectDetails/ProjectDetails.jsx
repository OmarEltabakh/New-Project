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

  return (
    <div className="project-details-page">
      {/* Hero Section */}
      <div className="project-hero  ">
        <div className="hero-slider-bg ">
          {projectImages.length > 1 && (
            <>
              <div className="pd-swiper-button-prev-custom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
              </div>
              <div className="pd-swiper-button-next-custom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
              </div>
            </>
          )}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={projectImages.length > 1 ? { delay: 5000, disableOnInteraction: false } : false}
            pagination={projectImages.length > 1 ? { clickable: true } : false}
            
            navigation={projectImages.length > 1 ? { nextEl: '.pd-swiper-button-prev-custom', prevEl: '.pd-swiper-button-next-custom' } : false}
            loop={projectImages.length > 1}
            allowTouchMove={projectImages.length > 1}
            className="hero-swiper"
            dir="rtl"
          >
            {projectImages.map((img, index) => (
              <SwiperSlide  key={index}>
                <div className="slide-image" style={{ backgroundImage: `url(${img})` }}></div>
              </SwiperSlide>
            ))}
          </Swiper>
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

      <div className="container px-3 px-lg-5 mx-auto w-100 py-5 project-main-content  mt-5">
        <div className="row g-5">
          {/* Main Info Column */}
          <div className="col-lg-8">
            <div className="content-card mb-4">
              <h3 className="section-heading mb-4">نظرة عامة على المشروع</h3>
              <p className="lead-text">{project.description}</p>
            </div>

            <div className="content-card">
              <h3 className="section-heading mb-4">المميزات الرئيسية والفنية</h3>
              <div className="features-grid">
                {project.features?.map((tech, index) => (
                  <div key={index} className="feature-item">
                    <svg className="check-icon ms-2" viewBox="0 0 24 24" width="24" height="24" fill="#c09e6b">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.locationsDistance && project.locationsDistance.length > 0 && (
              <div className="content-card mt-4">
                <h3 className="section-heading mb-4">الموقع وبعده عن المناطق الرئيسية</h3>
                <div className="features-grid">
                  {project.locationsDistance.map((loc, index) => (
                    <div key={index} className="feature-item">
                      <svg className="check-icon ms-2" viewBox="0 0 24 24" width="24" height="24" fill="#c09e6b">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-card">
              <h4 className="sidebar-heading mb-4">تفاصيل سريعة</h4>
              
              <div className="detail-item">
                <span className="detail-label">المساحات المتوفرة:</span>
                <span className="detail-value">{project.space}</span>
              </div>
              <hr />

              {project.category && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">نوع المشروع:</span>
                    <span className="detail-value">{project.category}</span>
                  </div>
                  <hr />
                </>
              )}

              {project.buildingsCount && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">عدد المباني:</span>
                    <span className="detail-value">{project.buildingsCount} مباني</span>
                  </div>
                  <hr />
                </>
              )}

              {project.apartmentsCount && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">عدد الشقق:</span>
                    <span className="detail-value">{project.apartmentsCount} شقة</span>
                  </div>
                  <hr />
                </>
              )}

              {project.salesType && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">نظام البيع:</span>
                    <span className="detail-value">{project.salesType}</span>
                  </div>
                  <hr />
                </>
              )}

              {project.progress !== null && project.progress !== undefined && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">نسبة الإنجاز:</span>
                    <div className="w-100">
                      <div className="d-flex justify-content-between mb-2 mt-2">
                        <strong>{project.progress}%</strong>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: `${project.progress}%`, backgroundColor: '#c09e6b' }} aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              )}

              <div className="contact-box text-center mt-4 pt-3">
                <p className="mb-3 font-weight-bold">هل أنت مهتم بهذا المشروع؟</p>
                <Link to="/contact" className="btn btn-primary-gold w-100 py-3">تواصل معنا الآن</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

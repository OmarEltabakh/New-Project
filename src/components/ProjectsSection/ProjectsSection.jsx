import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { projects } from '../../data/projects';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section-wrapper  ">
      <div className="container-fluid px-4 px-lg-5 ">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">أحدث المشاريع العقارية</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="projects-swiper-wrapper " style={{ position: 'relative', padding: '0 50px' }}>
          {projects.length > 4 && (
            <>
              <div className="swiper-button-prev-custom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
              </div>
              <div className="swiper-button-next-custom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
              </div>
            </>
          )}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={projects.length > 4 ? { nextEl: '.swiper-button-prev-custom', prevEl: '.swiper-button-next-custom' } : false}
            pagination={{ clickable: true }}
            autoplay={projects.length > 4 ? { delay: 4000, disableOnInteraction: false } : false}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            }
          }}
          className="projects-swiper pb-5"
          dir="rtl"
        >
          {projects.map(project => (
            <SwiperSlide key={project.id} style={{ height: 'auto', display: 'flex' }}>
              <div className="project-card  d-flex flex-column w-100">
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <Link to={`/project/${project.id}`} className="btn-view-project">التفاصيل الكاملة</Link>
                  </div>
                  {/* tags */}
                  <div className="project-space-badge">
                    {project.space}
                  </div>
                </div>
                <div className="project-info p-4 flex-grow-1 d-flex flex-column">
                  <h3 className="project-title mb-1" style={{ color: '#1a1a2e', fontWeight: '800', transition: 'none', fontSize: '20px' }}>{project.title}</h3>
                  <p className="project-location mb-3" style={{ color: '#c09e6b', fontWeight: '600', fontSize: '13px' }}>
                    <svg className="location-icon ms-1" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {project.location}
                  </p>
                  <p className="project-desc mb-4 flex-grow-1" style={{ color: '#555', lineHeight: '1.6', fontSize: '14px' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

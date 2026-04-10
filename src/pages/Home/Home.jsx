import React from 'react';
import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection/AboutSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      {/* Additional sections (Partners) will be added here later */}
    </div>
  );
};

export default Home;

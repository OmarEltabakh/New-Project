import React from 'react';
import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection/AboutSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

import SEO from '../../components/SEO/SEO';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <SEO 
        title={t('seo.home_title')}
        description={t('seo.home_desc')}
      />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <WhyChooseUs />
      {/* Additional sections (Partners) will be added here later */}
    </div>
  );
};

export default Home;

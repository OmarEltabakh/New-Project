import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

import SEO from '../../components/SEO/SEO';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="container mt-5">
      <SEO 
        title={t('seo.projects_title')}
        description={t('seo.projects_desc')}
      />
      <h2 className="mb-4">{t('projects.title')}</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 col-sm-6">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

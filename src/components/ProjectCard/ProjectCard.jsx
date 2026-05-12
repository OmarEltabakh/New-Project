import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  return (
    <div className="card h-100 shadow-sm">
      {/* <img src={project.image} className="card-img-top" alt={t(`projects.p${project.id}_title`)} /> */}
      <div className="card-body">
        <h5 className="card-title">{t(`projects.p${project.id}_title`)}</h5>
        <p className="card-text">{t(`projects.p${project.id}_desc`).substring(0, 100)}...</p>
        <Link to={`/project/${project.id}`} className="btn btn-primary">
          {t('projects.view_details')}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm">
      {/* <img src={project.image} className="card-img-top" alt={project.title} /> */}
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description.substring(0, 100)}...</p>
        <Link to={`/projects/${project.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

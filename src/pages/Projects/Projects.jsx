import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Our Projects</h2>
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

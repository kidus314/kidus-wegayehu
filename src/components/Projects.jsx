// src/components/Projects.jsx
// import React from 'react';
import data from '../data.json';
import './Projects.css';

const Projects = () => (
  <section className="projects-container">
    <h2 className="projects-title">{data.projects.title}</h2>
    <div className="projects-grid">
      {data.projects.list.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.name} className="project-image" />
          <div className="project-content">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <img src="/github-svgrepo-com.svg" alt="GitHub" className="link-icon" />
              </a>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link">
                <img src="/web-select-svgrepo-com.svg" alt="Website" className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

import React from 'react';
import './projects.css';
import instaClone from '../assets/insta1.png';
import foodApp from '../assets/e-commerce5.png';
import dashboard1 from '../assets/dashboard1.png';
import dashboard2 from '../assets/netflix3.png';

export default function Projects() {
  const projectData = [
    { title: 'Instagram Clone', image: instaClone },
    { title: 'Food Delivery App', image: foodApp },
    { title: 'Dashboard Finance', image: dashboard1 },
    { title: 'Analytics Dashboard', image: dashboard2 },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

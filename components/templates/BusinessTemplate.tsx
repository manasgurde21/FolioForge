
import React from 'react';
import { PortfolioData } from '../../types';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ProjectSlider } from '../ui/ProjectSlider';

export const BusinessTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-white shadow-sm sticky-top">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <h1 className="h3 fw-bold text-primary mb-0">{data.name}</h1>
          <nav className="d-none d-md-flex gap-4">
            <a href="#about" className="text-dark text-decoration-none fw-medium">About</a>
            <a href="#projects" className="text-dark text-decoration-none fw-medium">Projects</a>
            <a href="#experience" className="text-dark text-decoration-none fw-medium">Experience</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container py-5">
            <h2 className="display-3 fw-bold mb-3">{data.title}</h2>
            <p className="lead mb-4 text-white-50 mx-auto" style={{maxWidth: 700}}>{data.bio}</p>
            <div className="d-flex justify-content-center gap-4">
                <a href={`mailto:${data.email}`} className="text-white opacity-75 hover-opacity-100"><Mail size={24} /></a>
                <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-opacity-100"><Github size={24} /></a>
                <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-opacity-100"><Linkedin size={24} /></a>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Core Competencies</h2>
          <div className="row g-4 justify-content-center">
            {data.skills.map(skill => (
              <div key={skill.id} className="col-6 col-md-3">
                <div className="card border-0 shadow-sm text-center h-100">
                    <div className="card-body">
                        <p className="mb-0 fw-bold text-secondary">{skill.name}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Updated with Slider */}
      <section id="projects" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Key Projects</h2>
          <ProjectSlider projects={data.projects} darkMode={false} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5">
        <div className="container" style={{maxWidth: 800}}>
          <h2 className="text-center fw-bold mb-5">Professional Experience</h2>
          <div className="d-flex flex-column gap-4">
            {data.experience.map(exp => (
              <div key={exp.id} className="border-start border-4 border-primary ps-4 py-2 bg-white shadow-sm pe-4 rounded-end">
                <div className="text-muted small mb-1 text-uppercase fw-bold">{exp.startDate} - {exp.endDate}</div>
                <h3 className="h4 fw-bold mb-1">{exp.role}</h3>
                <h4 className="h6 text-primary mb-3">{exp.company}</h4>
                <p className="text-secondary mb-0">{exp.longDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5 text-center">
        <div className="container">
          <div className="d-flex justify-content-center gap-4 mb-4">
              <a href={`mailto:${data.email}`} className="text-white-50"><Mail size={20} /></a>
              <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="text-white-50"><Github size={20} /></a>
              <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white-50"><Linkedin size={20} /></a>
          </div>
          <p className="mb-0 text-white-50 small">&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

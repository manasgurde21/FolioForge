
import React from 'react';
import { PortfolioData } from '../../types';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ProjectSlider } from '../ui/ProjectSlider';

export const DesignerTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="bg-white text-dark font-sans-serif">
      {/* Hero Section */}
      <section className="py-5 min-vh-75 d-flex align-items-center">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-md-6 order-md-1 order-2">
                    <h1 className="display-1 fw-bold mb-3 lh-1">{data.name}</h1>
                    <p className="h3 text-primary mb-4 fw-normal">{data.title}</p>
                    <p className="lead text-muted mb-5">{data.bio}</p>
                    <div className="d-flex gap-3">
                        <a href={`mailto:${data.email}`} className="text-dark"><Mail size={32} /></a>
                        <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="text-dark"><Github size={32} /></a>
                        <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-dark"><Linkedin size={32} /></a>
                    </div>
                </div>
                <div className="col-md-6 order-md-2 order-1 text-center">
                     <img src="https://picsum.photos/seed/avatar/600/600" alt={data.name} className="img-fluid rounded-circle shadow-lg" style={{maxWidth: '80%'}} />
                </div>
            </div>
        </div>
      </section>

      {/* Skills Section */}
       <section id="skills" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">My Toolbox</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {data.skills.map(skill => (
              <span key={skill.id} className="h5 text-muted fw-normal">{skill.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
            <h2 className="text-center fw-bold mb-5 display-5">Featured Work</h2>
            <ProjectSlider projects={data.projects} darkMode={false} />
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-5 bg-light">
        <div className="container" style={{maxWidth: 900}}>
           <h2 className="text-center fw-bold mb-5">Career Path</h2>
           <div className="d-flex flex-column gap-4">
             {data.experience.map(exp => (
                <div key={exp.id} className="card border-0 shadow-sm p-4">
                   <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
                        <div>
                            <h4 className="fw-bold text-primary mb-0">{exp.role}</h4>
                            <h5 className="fw-normal">{exp.company}</h5>
                        </div>
                        <span className="badge bg-secondary text-white">{exp.startDate} - {exp.endDate}</span>
                   </div>
                   <p className="text-muted mt-2">{exp.longDescription}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-white text-center">
        <div className="container">
             <div className="d-flex justify-content-center gap-4 mb-4">
                <a href={`mailto:${data.email}`} className="text-muted"><Mail size={24} /></a>
                <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="text-muted"><Github size={24} /></a>
                <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-muted"><Linkedin size={24} /></a>
            </div>
          <p className="text-muted mb-0">&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

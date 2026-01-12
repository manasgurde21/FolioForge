
import React from 'react';
import { PortfolioData } from '../../types';
import { Github, Linkedin, Mail, ExternalLink, Download, Phone, MapPin } from 'lucide-react';

export const DeveloperTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const { visualConfig } = data;
  
  const fontStyle = { fontFamily: visualConfig.font };
  const themeStyle = { color: visualConfig.themeColor };
  const bgStyle = visualConfig.backgroundImageUrl 
    ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${visualConfig.backgroundImageUrl})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }
    : { background: 'radial-gradient(circle at center, #212529 0%, #000 100%)' };

  return (
    <div className="bg-dark text-white min-vh-100" style={fontStyle}>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-center py-5 min-vh-100" style={bgStyle}>
        <div className="container">
          {visualConfig.showProfileImage && visualConfig.profileImageUrl && (
              <img src={visualConfig.profileImageUrl} alt={data.name} className="rounded-circle mb-4 border border-4 border-white shadow" style={{width: 150, height: 150, objectFit: 'cover'}} />
          )}
          <h1 className="display-2 fw-bold mb-2" style={themeStyle}>
            {data.name}
          </h1>
          <h2 className="h4 text-light mb-3">{data.title}</h2>
          <p className="lead text-secondary mb-5 fst-italic">{data.tagline}</p>
          
          <div className="d-flex justify-content-center gap-4 mb-5">
            <a href={`mailto:${data.email}`} className="text-white opacity-75 hover-opacity-100"><Mail size={28} /></a>
            <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-opacity-100"><Github size={28} /></a>
            <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-opacity-100"><Linkedin size={28} /></a>
          </div>

           {data.resumeLink && (
              <a href={data.resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4">
                  <Download size={18} className="me-2" /> Download Resume
              </a>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-dark">
        <div className="container" style={{maxWidth: 800}}>
          <h2 className="text-center fw-bold mb-4 border-bottom d-inline-block pb-2 mx-auto" style={{borderColor: visualConfig.themeColor}}>About Me</h2>
          <p className="lead text-center text-secondary mb-4">{data.bio}</p>
          {data.strengths && (
             <div className="bg-secondary bg-opacity-10 p-4 rounded text-center">
                 <strong className="text-light d-block mb-2">Key Strengths</strong>
                 <p className="mb-0 text-white-50">{data.strengths}</p>
             </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-black">
        <div className="container text-center" style={{maxWidth: 900}}>
          <h2 className="fw-bold mb-5 text-uppercase letter-spacing-2">Technical Arsenal</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {data.skills.map(skill => (
              <span key={skill.id} className="badge rounded-pill bg-dark border p-3 fs-6 fw-normal" style={{borderColor: visualConfig.themeColor, color: '#fff'}}>
                <span className="opacity-50 me-2 small">| {skill.category} |</span> {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-dark">
        <div className="container" style={{maxWidth: 1000}}>
          <h2 className="text-center fw-bold mb-5">Featured Projects</h2>
          <div className="row g-5">
            {data.projects.map(project => (
              <div key={project.id} className="col-12">
                 <div className="card bg-secondary bg-opacity-10 border-0 text-white overflow-hidden">
                    <div className="row g-0">
                        {project.imageUrl && (
                            <div className="col-md-5">
                                <img src={project.imageUrl} className="img-fluid h-100 w-100" style={{objectFit: 'cover'}} alt={project.name} />
                            </div>
                        )}
                        <div className={project.imageUrl ? "col-md-7" : "col-12"}>
                             <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <h3 className="h3 mb-0" style={themeStyle}>{project.name}</h3>
                                    <div className="d-flex gap-2">
                                        {project.githubLink && <a href={project.githubLink} className="text-white-50 hover-white"><Github size={20}/></a>}
                                        <a href={project.link} className="text-white-50 hover-white"><ExternalLink size={20}/></a>
                                    </div>
                                </div>
                                <p className="text-white-50 fw-medium mb-3">{project.role}</p>
                                <p className="text-secondary small mb-3">{project.longDescription}</p>
                                {project.keyFeatures && (
                                    <p className="small text-light mb-3"><strong className="text-white-50">Key Features:</strong> {project.keyFeatures}</p>
                                )}
                                <div className="d-flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                    <span key={tech} className="badge bg-black bg-opacity-50 text-light border border-secondary">{tech.trim()}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-5 bg-black">
        <div className="container" style={{maxWidth: 800}}>
           <h2 className="text-center fw-bold mb-5">Experience</h2>
           <div className="position-relative border-start border-secondary ms-3 ps-4">
             {data.experience.map(exp => (
                <div key={exp.id} className="mb-5 position-relative">
                   <div className="position-absolute bg-dark border border-secondary rounded-circle" style={{width: 16, height: 16, left: -33, top: 5}}></div>
                   <h3 className="h4 fw-bold mb-1" style={{color: visualConfig.themeColor}}>{exp.role}</h3>
                   <div className="text-white mb-2 fs-5">{exp.company}</div>
                   <div className="text-secondary small mb-3 text-uppercase tracking-wide">{exp.startDate} - {exp.endDate}</div>
                   <p className="text-secondary">{exp.longDescription}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Education & Certs Split */}
      <section className="py-5 bg-dark">
          <div className="container">
              <div className="row g-5">
                  {/* Education */}
                  <div className="col-md-6">
                      <h3 className="h4 fw-bold mb-4 border-bottom border-secondary pb-2">Education</h3>
                      {data.education.map(edu => (
                          <div key={edu.id} className="mb-4">
                              <h4 className="h5 text-white mb-1">{edu.degree}</h4>
                              <p className="text-secondary mb-1">{edu.school} • {edu.year}</p>
                              {edu.achievements && <p className="text-white-50 small">Award: {edu.achievements}</p>}
                          </div>
                      ))}
                  </div>
                   {/* Certifications & Achievements */}
                  <div className="col-md-6">
                       <h3 className="h4 fw-bold mb-4 border-bottom border-secondary pb-2">Certifications & Awards</h3>
                       <ul className="list-unstyled">
                           {data.certifications.map(cert => (
                               <li key={cert.id} className="mb-3">
                                   <strong className="text-light d-block">{cert.name}</strong>
                                   <span className="text-secondary small">{cert.platform} • {cert.year}</span>
                               </li>
                           ))}
                           {data.achievements.map(ach => (
                                <li key={ach.id} className="mb-3">
                                   <strong className="text-light d-block text-warning"><span role="img" aria-label="trophy">🏆</span> {ach.title}</strong>
                                   <span className="text-secondary small">{ach.description}</span>
                               </li>
                           ))}
                       </ul>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Footer */}
      <footer className="py-5 bg-black text-center text-secondary border-top border-secondary">
        <h2 className="text-white h3 mb-4">Let's Connect</h2>
        <div className="mb-4 d-flex justify-content-center gap-4 flex-wrap">
            <a href={`mailto:${data.email}`} className="text-decoration-none text-secondary hover-text-white d-flex align-items-center gap-2"><Mail size={18} /> {data.email}</a>
            {data.phone && <span className="d-flex align-items-center gap-2"><Phone size={18} /> {data.phone}</span>}
            <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary hover-text-white d-flex align-items-center gap-2"><Linkedin size={18} /> LinkedIn</a>
             <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary hover-text-white d-flex align-items-center gap-2"><Github size={18} /> GitHub</a>
        </div>
        <p className="small mb-0">&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

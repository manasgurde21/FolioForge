
import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectSliderProps {
  projects: Project[];
  darkMode?: boolean;
}

export const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects, darkMode = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (projects.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // 3 second lap as requested
    return () => clearInterval(interval);
  }, [projects.length]);

  if (!projects || projects.length === 0) return null;

  // Calculate widths to ensure the slider works regardless of project count
  // If there are 3 projects: Track is 300% wide, Item is 33.33% of Track (which is 100% of Viewport)
  const itemWidthPercentage = 100 / projects.length; 

  return (
    <div className="position-relative w-100" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
      <div 
        className="d-flex" 
        style={{ 
          // The track needs to be wide enough to hold all items horizontally
          width: `${projects.length * 100}%`,
          // We translate by the width of one item * current index
          transform: `translateX(-${currentIndex * itemWidthPercentage}%)`,
          transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)', // Stylish sliding effect
        }}
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="position-relative" 
            style={{ 
                // Each item must be the width of the VIEWPORT, which is (100 / Count)% of the TRACK
                width: `${itemWidthPercentage}%`,
                flexShrink: 0 
            }}
          >
             <div className={`card h-100 border-0 ${darkMode ? 'bg-dark text-white' : 'bg-white shadow-sm'}`} style={{minHeight: '400px', margin: '0 2px'}}>
                <div className="row g-0 h-100">
                    <div className="col-md-6 position-relative overflow-hidden" style={{minHeight: '300px'}}>
                         <img 
                            src={project.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`} 
                            className="w-100 h-100 position-absolute top-0 start-0" 
                            style={{objectFit: 'cover'}}
                            alt={project.name} 
                        />
                         <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'}}>
                             <h3 className="h3 text-white fw-bold mb-0">{project.name}</h3>
                         </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body p-4 p-lg-5 d-flex flex-column h-100 justify-content-center">
                            <div className="mb-4">
                                <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 rounded-pill">{project.role || 'Creator'}</span>
                                <h4 className="h5 fw-bold mb-3 opacity-75">Project Overview</h4>
                                <p className={`lead ${darkMode ? 'text-secondary' : 'text-muted'}`} style={{fontSize: '1rem'}}>{project.longDescription}</p>
                            </div>
                            
                            <div className="mb-4">
                                <h5 className="h6 fw-bold opacity-75 mb-2">Tech Stack</h5>
                                <div className="d-flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className={`badge ${darkMode ? 'bg-secondary bg-opacity-25 text-light' : 'bg-light text-dark'} border`}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="d-flex gap-3 mt-auto">
                                <a href={project.link || '#'} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill px-4 d-flex align-items-center gap-2">
                                    Live Demo <ExternalLink size={16} />
                                </a>
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noreferrer" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-pill px-4 d-flex align-items-center gap-2`}>
                                        Source Code <Github size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Indicators */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2 z-2">
        {projects.map((_, idx) => (
            <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`border-0 rounded-pill transition-all ${idx === currentIndex ? 'bg-primary' : 'bg-white opacity-50'}`}
                style={{ width: idx === currentIndex ? '30px' : '10px', height: '6px', padding: 0, transition: 'all 0.3s ease' }}
                aria-label={`Go to project ${idx + 1}`}
            />
        ))}
      </div>
    </div>
  );
};

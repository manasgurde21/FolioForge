
import React from 'react';
import { PortfolioData } from '../../types';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ProjectSlider } from '../ui/ProjectSlider';

// --- 1. Minimalist Template ---
export const MinimalistTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
    return (
        <div className="bg-white text-dark min-vh-100 font-serif">
            <div className="container py-5">
                <header className="mb-5 border-bottom pb-4">
                    <h1 className="display-4 fw-light mb-0">{data.name}.</h1>
                    <p className="text-muted mt-2">{data.title}</p>
                </header>
                
                <div className="row g-5">
                    <div className="col-lg-4">
                        <h6 className="text-uppercase fw-bold small letter-spacing-2 mb-4">About</h6>
                        <p className="lead mb-5 fw-light">{data.bio}</p>
                        
                        <h6 className="text-uppercase fw-bold small letter-spacing-2 mb-4">Contact</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href={`mailto:${data.email}`} className="text-dark text-decoration-none border-bottom border-dark pb-1">Email</a></li>
                            <li className="mb-2"><a href={`https://${data.linkedin}`} className="text-dark text-decoration-none border-bottom border-dark pb-1">LinkedIn</a></li>
                            <li className="mb-2"><a href={`https://${data.github}`} className="text-dark text-decoration-none border-bottom border-dark pb-1">GitHub</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                         <h6 className="text-uppercase fw-bold small letter-spacing-2 mb-4">Selected Work</h6>
                         <ProjectSlider projects={data.projects} darkMode={false} />
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-12">
                        <h6 className="text-uppercase fw-bold small letter-spacing-2 mb-4">Experience</h6>
                         {data.experience.map(exp => (
                            <div key={exp.id} className="row mb-4">
                                <div className="col-md-3 text-muted">{exp.startDate} — {exp.endDate}</div>
                                <div className="col-md-9">
                                    <h5 className="fw-normal">{exp.role} @ {exp.company}</h5>
                                    <p className="text-muted fw-light">{exp.shortDescription}</p>
                                </div>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 2. Glassmorphism Template ---
export const GlassTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
    return (
        <div className="min-vh-100" style={{
            background: 'linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
            fontFamily: "'Poppins', sans-serif"
        }}>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Glass Card */}
                        <div className="p-5 rounded-4 shadow-lg" style={{
                            background: 'rgba(255, 255, 255, 0.25)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.5)'
                        }}>
                             <div className="text-center mb-5">
                                 {data.visualConfig.profileImageUrl && (
                                     <img src={data.visualConfig.profileImageUrl} className="rounded-circle shadow-sm mb-3" width="100" alt="Profile"/>
                                 )}
                                 <h1 className="fw-bold text-dark display-5">{data.name}</h1>
                                 <p className="text-dark opacity-75 lead">{data.tagline}</p>
                             </div>

                             <div className="row g-4 mb-5">
                                 {data.skills.slice(0, 4).map(skill => (
                                     <div key={skill.id} className="col-md-3 col-6 text-center">
                                         <div className="bg-white bg-opacity-50 p-3 rounded-3 fw-bold text-dark shadow-sm">
                                             {skill.name}
                                         </div>
                                     </div>
                                 ))}
                             </div>

                             <div className="mb-5">
                                 <h3 className="fw-bold mb-4 text-center">Portfolio</h3>
                                 <ProjectSlider projects={data.projects} darkMode={false} />
                             </div>

                             <div className="bg-white bg-opacity-50 p-4 rounded-4 mb-4">
                                 <h4 className="fw-bold mb-3">About Me</h4>
                                 <p className="mb-0 text-dark opacity-75">{data.bio}</p>
                             </div>
                             
                             <div className="text-center mt-5">
                                 <a href={`mailto:${data.email}`} className="btn btn-dark rounded-pill px-5 py-2 shadow-sm">Contact Me</a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 3. Bold Template ---
export const BoldTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
    return (
        <div className="bg-warning min-vh-100 text-black">
            <div className="container-fluid px-0">
                <div className="p-5 border-bottom border-black border-3">
                    <h1 className="display-1 fw-bolder text-uppercase mb-0" style={{fontSize: '12vw', lineHeight: 0.8}}>{data.name}</h1>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 border-end border-black border-3 p-5 bg-black text-warning">
                        <p className="display-6 fw-bold mb-5">{data.title}</p>
                        <p className="lead">{data.bio}</p>
                         <div className="mt-5">
                            {data.skills.map(s => <span key={s.id} className="badge bg-warning text-black me-2 mb-2 fs-5 rounded-0">{s.name}</span>)}
                        </div>
                    </div>
                    <div className="col-lg-6 p-5">
                        <h2 className="fw-black text-uppercase mb-4 border-bottom border-black border-3 pb-2 d-inline-block">Work</h2>
                        <ProjectSlider projects={data.projects} darkMode={false} />
                    </div>
                </div>
                 <div className="p-5 border-top border-black border-3 bg-white">
                    <div className="row">
                        {data.experience.map(exp => (
                            <div key={exp.id} className="col-md-4 mb-4">
                                <h4 className="fw-bold text-uppercase">{exp.company}</h4>
                                <h5 className="text-muted">{exp.role}</h5>
                                <p className="small">{exp.shortDescription}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 4. Gradient Flow Template ---
export const GradientTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
    return (
        <div className="min-vh-100 text-white" style={{
            background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
        }}>
            <div className="container py-5">
                <div className="row align-items-center min-vh-50 mb-5">
                    <div className="col-lg-6">
                        <h1 className="display-3 fw-bold mb-3">{data.name}</h1>
                        <p className="h3 mb-4 opacity-75">{data.tagline}</p>
                        <a href="#work" className="btn btn-light rounded-pill px-4 fw-bold text-primary shadow">View Work</a>
                    </div>
                     <div className="col-lg-6 text-end d-none d-lg-block">
                         <div className="display-1 fw-bold opacity-25" style={{fontSize: '15rem', lineHeight: 0.7}}>HI.</div>
                     </div>
                </div>

                <div id="work" className="bg-white text-dark rounded-5 p-5 shadow-lg mb-5">
                     <h2 className="fw-bold mb-4">Featured Projects</h2>
                     <ProjectSlider projects={data.projects} darkMode={false} />
                </div>

                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="bg-dark text-white rounded-5 p-5 h-100 shadow">
                            <h3 className="fw-bold mb-4">Experience</h3>
                            {data.experience.map(exp => (
                                <div key={exp.id} className="mb-4 pb-4 border-bottom border-secondary">
                                    <div className="d-flex justify-content-between mb-2">
                                        <h5 className="mb-0">{exp.role}</h5>
                                        <span className="opacity-50 small">{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <div className="text-info">{exp.company}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                         <div className="bg-primary text-white rounded-5 p-5 h-100 shadow">
                            <h3 className="fw-bold mb-4">Skills</h3>
                            <div className="d-flex flex-wrap gap-2">
                                {data.skills.map(skill => (
                                    <span key={skill.id} className="bg-white bg-opacity-25 px-3 py-2 rounded-3 fw-bold">{skill.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 5. Split Screen Template ---
export const SplitTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
    return (
        <div className="d-flex flex-column flex-lg-row min-vh-100">
            <div className="col-lg-4 bg-dark text-white p-5 position-fixed-lg h-100-lg d-flex flex-column justify-content-center">
                <div>
                     <h1 className="display-4 fw-bold mb-3">{data.name}</h1>
                     <p className="lead text-secondary mb-4">{data.title}</p>
                     <p className="opacity-75 mb-5">{data.bio}</p>
                     <div className="d-flex gap-3">
                        <a href={`https://${data.github}`} className="text-white"><Github /></a>
                        <a href={`https://${data.linkedin}`} className="text-white"><Linkedin /></a>
                        <a href={`mailto:${data.email}`} className="text-white"><Mail /></a>
                     </div>
                </div>
            </div>
            <div className="col-lg-8 offset-lg-4 bg-light p-5 min-vh-100">
                 <div className="mb-5">
                     <h3 className="fw-bold border-bottom pb-2 mb-4">My Work</h3>
                     <ProjectSlider projects={data.projects} darkMode={false} />
                 </div>
                 
                 <div className="mb-5">
                     <h3 className="fw-bold border-bottom pb-2 mb-4">Journey</h3>
                     {data.experience.map(exp => (
                         <div key={exp.id} className="mb-4">
                             <h4 className="fw-bold">{exp.company}</h4>
                             <h5 className="text-primary">{exp.role}</h5>
                             <p className="text-muted">{exp.longDescription}</p>
                         </div>
                     ))}
                 </div>
            </div>
        </div>
    );
};

// --- 6. Art Gallery Template ---
export const ArtGalleryTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
    return (
        <div className="bg-black text-white min-vh-100 font-monospace">
             <div className="container py-5">
                 <div className="text-center mb-5 pb-5">
                     <span className="border rounded-pill px-3 py-1 small text-uppercase mb-3 d-inline-block">Portfolio 2024</span>
                     <h1 className="display-1 fw-normal fst-italic">{data.name}</h1>
                     <p className="lead opacity-50">{data.title}</p>
                 </div>

                 <div className="row justify-content-center mb-5">
                     <div className="col-lg-10">
                        <div className="border border-secondary p-2">
                             <ProjectSlider projects={data.projects} darkMode={true} />
                        </div>
                        <p className="text-center mt-3 small opacity-50">FIGURE 1.0 — SELECTED WORKS</p>
                     </div>
                 </div>

                 <div className="row g-5 mt-5 border-top border-secondary pt-5">
                     <div className="col-md-4">
                         <h3 className="text-uppercase h6 opacity-50 mb-4">Specialization</h3>
                         <ul className="list-unstyled">
                             {data.skills.map(s => <li key={s.id} className="mb-2 border-bottom border-dark pb-1">{s.name}</li>)}
                         </ul>
                     </div>
                     <div className="col-md-4">
                         <h3 className="text-uppercase h6 opacity-50 mb-4">Experience</h3>
                         {data.experience.map(e => (
                             <div key={e.id} className="mb-3">
                                 <div>{e.company}</div>
                                 <div className="opacity-50 small">{e.role}</div>
                             </div>
                         ))}
                     </div>
                      <div className="col-md-4">
                         <h3 className="text-uppercase h6 opacity-50 mb-4">Bio</h3>
                         <p className="opacity-75">{data.bio}</p>
                     </div>
                 </div>
             </div>
        </div>
    );
};

// --- 7. Retro Template ---
export const RetroTemplate: React.FC<{ data: PortfolioData }> = ({ data }) => {
    return (
        <div className="min-vh-100 bg-dark text-success p-4 font-monospace" style={{backgroundColor: '#0a0a0a', color: '#0f0'}}>
            <div className="container border border-success p-4 rounded" style={{maxWidth: 1000, boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)'}}>
                <div className="mb-4 pb-2 border-bottom border-success opacity-50">
                    root@folioforge:~/portfolio# ./init.sh
                </div>
                
                <div className="mb-5">
                    <h1 className="display-5 fw-bold mb-3">{`> ${data.name}`}</h1>
                    <p className="lead opacity-75">{`> ${data.title}`}</p>
                    <p className="opacity-75">{`> ${data.tagline}`}</p>
                </div>

                <div className="mb-5">
                    <h2 className="h4 border-bottom border-success d-inline-block mb-4 pe-4">./projects.exe</h2>
                    <div className="p-2 border border-success border-opacity-25 rounded bg-black">
                         <ProjectSlider projects={data.projects} darkMode={true} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2 className="h4 border-bottom border-success d-inline-block mb-3 pe-4">./skills.txt</h2>
                        <div className="d-flex flex-wrap gap-2">
                            {data.skills.map(skill => (
                                <span key={skill.id} className="border border-success px-2 py-1 small hover-bg-success hover-text-black transition-colors">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                     <div className="col-md-6 mb-4">
                        <h2 className="h4 border-bottom border-success d-inline-block mb-3 pe-4">./contact_info</h2>
                        <ul className="list-unstyled">
                            <li>Email: {data.email}</li>
                            <li>GitHub: {data.github}</li>
                            <li>Status: Online</li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-5 pt-3 border-top border-success opacity-50 text-center small">
                    System ready. Waiting for input...
                    <span className="cursor-blink">_</span>
                </div>
            </div>
            <style>{`
                .cursor-blink { animation: blink 1s step-end infinite; }
                @keyframes blink { 50% { opacity: 0; } }
            `}</style>
        </div>
    );
};

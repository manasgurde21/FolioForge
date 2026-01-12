
import React, { useState } from 'react';
import { usePortfolioBuilder } from '../hooks/usePortfolioBuilder';
import { Card } from './ui/Card';
import { Input, Textarea } from './ui/Input';
import { Button } from './ui/Button';
import { Trash2, Wand2, PlusCircle, ChevronDown, ChevronUp, X, Upload } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

type BuilderFormProps = ReturnType<typeof usePortfolioBuilder>;

export const BuilderForm: React.FC<BuilderFormProps> = ({
  portfolioData,
  loadingStates,
  updateField,
  addSkill,
  removeSkill,
  addProject,
  updateProject,
  removeProject,
  addExperience,
  updateExperience,
  removeExperience,
  addEducation,
  updateEducation,
  removeEducation,
  addCertification,
  updateCertification,
  removeCertification,
  addAchievement,
  updateAchievement,
  removeAchievement,
  generateAIBio,
  generateAIProjectDescription,
  generateAIExperienceDescription,
}) => {
  const [skillInput, setSkillInput] = useState('');
  const [skillCategory, setSkillCategory] = useState('Web');

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (skillInput.trim()) {
      addSkill(skillInput.trim(), skillCategory);
      setSkillInput('');
    }
  };

  return (
    <div className="d-flex flex-column gap-4">
      {/* 1. Basic Information */}
      <Card title="Basic Information">
          <div className="row g-3">
            <div className="col-md-6">
                 <Input label="Full Name" value={portfolioData.name} onChange={(e) => updateField('name', e.target.value)} placeholder="e.g. John Doe" />
            </div>
            <div className="col-md-6">
                <Input label="Professional Title" value={portfolioData.title} onChange={(e) => updateField('title', e.target.value)} placeholder="e.g. Full Stack Developer" />
            </div>
             <div className="col-12">
                <Input label="Tagline (1 line)" value={portfolioData.tagline} onChange={(e) => updateField('tagline', e.target.value)} placeholder="e.g. Building digital experiences that matter." />
            </div>
          </div>
      </Card>

      {/* 2. About Me */}
      <Card title="About Me">
        <div className="row g-3">
            <div className="col-12 position-relative">
                <Textarea label="Bio (Who you are, goals, interests)" value={portfolioData.bio} onChange={(e) => updateField('bio', e.target.value)} placeholder="Share your professional journey..." />
                <div className="input-button-absolute">
                    <Button variant="magic" size="sm" onClick={generateAIBio} isLoading={loadingStates.bio} type="button">
                        <Wand2 size={14} className="me-1" /> Generate
                    </Button>
                </div>
            </div>
            <div className="col-12">
                <Textarea label="Strengths (2-3 lines)" rows={2} value={portfolioData.strengths || ''} onChange={(e) => updateField('strengths', e.target.value)} placeholder="e.g. Scalable architecture, Team leadership..." />
            </div>
        </div>
      </Card>

      {/* 3. Skills */}
      <Card title="Skills">
        <form onSubmit={handleAddSkill} className="d-flex gap-2 mb-3 align-items-end">
          <div className="flex-grow-1">
             <label className="form-label fw-medium small">Skill Name</label>
             <input className="form-control" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="e.g., Python" />
          </div>
          <div style={{minWidth: '140px'}}>
             <label className="form-label fw-medium small">Category</label>
             <select className="form-select" value={skillCategory} onChange={(e) => setSkillCategory(e.target.value)}>
                {SKILL_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
             </select>
          </div>
          <Button type="submit" variant="soft"><PlusCircle size={18}/></Button>
        </form>
        <div className="d-flex flex-wrap gap-2">
          {portfolioData.skills.map((skill) => (
            <span key={skill.id} className="badge bg-light text-primary border skill-badge d-flex align-items-center py-2 px-3">
              <span className="fw-bold me-1 text-secondary opacity-75 small">[{skill.category || 'Tool'}]</span>
              {skill.name}
              <button onClick={() => removeSkill(skill.id)} className="btn-close ms-2" aria-label="Remove"></button>
            </span>
          ))}
        </div>
      </Card>
      
      {/* 4. Projects */}
      <Accordion title="Projects" onAdd={addProject} addButtonText="Add Project">
        {portfolioData.projects.map((project, index) => (
          <div key={project.id} className="card mb-3 bg-light border">
             <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 fw-bold">#{index + 1} {project.name || 'New Project'}</h6>
              <Button variant="danger" size="sm" onClick={() => removeProject(project.id)} className="p-1"><Trash2 size={16} /></Button>
            </div>
            <div className="card-body pt-0 row g-3">
              <div className="col-md-6">
                <Input label="Project Title" value={project.name} onChange={(e) => updateProject(project.id, 'name', e.target.value)} />
              </div>
              <div className="col-md-6">
                <Input label="Your Role" value={project.role || ''} onChange={(e) => updateProject(project.id, 'role', e.target.value)} placeholder="e.g. Lead Developer" />
              </div>
              <div className="col-12">
                <Input label="Short Description (Problem it solves)" value={project.shortDescription} onChange={(e) => updateProject(project.id, 'shortDescription', e.target.value)} />
              </div>
              <div className="col-md-6">
                 <Input label="Technologies (comma-separated)" value={project.technologies.join(',')} onChange={(e) => updateProject(project.id, 'technologies', e.target.value.split(',').map(s => s.trim()))} />
              </div>
              <div className="col-md-6">
                 <Input label="Key Features" value={project.keyFeatures || ''} onChange={(e) => updateProject(project.id, 'keyFeatures', e.target.value)} placeholder="e.g. Dark mode, Real-time sync" />
              </div>
              <div className="col-md-6">
                 <Input label="GitHub Link" value={project.githubLink || ''} onChange={(e) => updateProject(project.id, 'githubLink', e.target.value)} />
              </div>
              <div className="col-md-6">
                 <Input label="Live Demo Link" value={project.link} onChange={(e) => updateProject(project.id, 'link', e.target.value)} />
              </div>
               <div className="col-12">
                 <Input label="Project Image URL" value={project.imageUrl || ''} onChange={(e) => updateProject(project.id, 'imageUrl', e.target.value)} placeholder="https://..." />
              </div>
              <div className="col-12 position-relative">
                <Textarea label="Detailed Description" value={project.longDescription} onChange={(e) => updateProject(project.id, 'longDescription', e.target.value)} />
                 <div className="input-button-absolute">
                    <Button variant="magic" size="sm" onClick={() => generateAIProjectDescription(project.id)} isLoading={loadingStates[`project-${project.id}`]} type="button">
                        <Wand2 size={14} className="me-1" /> Generate
                    </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Accordion>

       {/* 5. Experience */}
       <Accordion title="Experience / Internships" onAdd={addExperience} addButtonText="Add Experience">
        {portfolioData.experience.map((exp, index) => (
          <div key={exp.id} className="card mb-3 bg-light border">
             <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 fw-bold">#{index + 1} {exp.company || 'New Experience'}</h6>
              <Button variant="danger" size="sm" onClick={() => removeExperience(exp.id)} className="p-1"><Trash2 size={16} /></Button>
            </div>
            <div className="card-body pt-0 row g-3">
              <div className="col-md-6">
                <Input label="Company Name" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} />
              </div>
              <div className="col-md-6">
                <Input label="Role" value={exp.role} onChange={(e) => updateExperience(exp.id, 'role', e.target.value)} />
              </div>
              <div className="col-md-6">
                <Input label="Start Date" value={exp.startDate} onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)} placeholder="e.g. Jan 2022" />
              </div>
              <div className="col-md-6">
                <Input label="End Date" value={exp.endDate} onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)} placeholder="e.g. Present" />
              </div>
              <div className="col-12">
                 <Input label="What you worked on (Short)" value={exp.shortDescription} onChange={(e) => updateExperience(exp.id, 'shortDescription', e.target.value)} />
              </div>
              <div className="col-12 position-relative">
                <Textarea label="Detailed Description" value={exp.longDescription} onChange={(e) => updateExperience(exp.id, 'longDescription', e.target.value)} />
                 <div className="input-button-absolute">
                    <Button variant="magic" size="sm" onClick={() => generateAIExperienceDescription(exp.id)} isLoading={loadingStates[`experience-${exp.id}`]} type="button">
                        <Wand2 size={14} className="me-1" /> Generate
                    </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Accordion>

      {/* 6. Education */}
      <Accordion title="Education" onAdd={addEducation} addButtonText="Add Education">
         {portfolioData.education.map((edu, index) => (
           <div key={edu.id} className="card mb-3 bg-light border">
             <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center">
               <h6 className="mb-0 fw-bold">#{index + 1} {edu.school || 'New Education'}</h6>
               <Button variant="danger" size="sm" onClick={() => removeEducation(edu.id)} className="p-1"><Trash2 size={16} /></Button>
             </div>
             <div className="card-body pt-0 row g-3">
               <div className="col-md-6">
                 <Input label="Degree / Course" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)} />
               </div>
               <div className="col-md-6">
                 <Input label="College / University" value={edu.school} onChange={(e) => updateEducation(edu.id, 'school', e.target.value)} />
               </div>
               <div className="col-md-4">
                 <Input label="Year" value={edu.year} onChange={(e) => updateEducation(edu.id, 'year', e.target.value)} />
               </div>
               <div className="col-md-8">
                 <Input label="Achievements (Optional)" value={edu.achievements || ''} onChange={(e) => updateEducation(edu.id, 'achievements', e.target.value)} placeholder="e.g. 9.5 GPA, Class Representative" />
               </div>
             </div>
           </div>
         ))}
      </Accordion>

      {/* 7. Certifications */}
      <Accordion title="Certifications" onAdd={addCertification} addButtonText="Add Certification">
         {portfolioData.certifications.map((cert, index) => (
           <div key={cert.id} className="card mb-3 bg-light border">
             <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center">
               <h6 className="mb-0 fw-bold">#{index + 1} {cert.name || 'New Certificate'}</h6>
               <Button variant="danger" size="sm" onClick={() => removeCertification(cert.id)} className="p-1"><Trash2 size={16} /></Button>
             </div>
             <div className="card-body pt-0 row g-3">
               <div className="col-md-6">
                 <Input label="Course Name" value={cert.name} onChange={(e) => updateCertification(cert.id, 'name', e.target.value)} />
               </div>
               <div className="col-md-6">
                 <Input label="Platform / Issuer" value={cert.platform} onChange={(e) => updateCertification(cert.id, 'platform', e.target.value)} placeholder="e.g. Coursera, Udemy" />
               </div>
               <div className="col-md-4">
                 <Input label="Year" value={cert.year} onChange={(e) => updateCertification(cert.id, 'year', e.target.value)} />
               </div>
             </div>
           </div>
         ))}
      </Accordion>

      {/* 8. Achievements */}
       <Accordion title="Achievements & Awards" onAdd={addAchievement} addButtonText="Add Achievement">
         {portfolioData.achievements.map((ach, index) => (
           <div key={ach.id} className="card mb-3 bg-light border">
             <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center">
               <h6 className="mb-0 fw-bold">#{index + 1} {ach.title || 'New Achievement'}</h6>
               <Button variant="danger" size="sm" onClick={() => removeAchievement(ach.id)} className="p-1"><Trash2 size={16} /></Button>
             </div>
             <div className="card-body pt-0 row g-3">
               <div className="col-12">
                 <Input label="Title (Hackathon, Award, etc.)" value={ach.title} onChange={(e) => updateAchievement(ach.id, 'title', e.target.value)} />
               </div>
               <div className="col-12">
                 <Input label="Description" value={ach.description} onChange={(e) => updateAchievement(ach.id, 'description', e.target.value)} />
               </div>
             </div>
           </div>
         ))}
      </Accordion>

      {/* 9. Contact & Resume */}
      <Card title="Contact & Resume">
        <div className="row g-3">
          <div className="col-md-6">
             <Input label="Email Address" type="email" value={portfolioData.email} onChange={(e) => updateField('email', e.target.value)} />
          </div>
           <div className="col-md-6">
             <Input label="Phone Number (Optional)" value={portfolioData.phone || ''} onChange={(e) => updateField('phone', e.target.value)} />
          </div>
          <div className="col-md-6">
             <Input label="LinkedIn URL" value={portfolioData.linkedin} onChange={(e) => updateField('linkedin', e.target.value)} />
          </div>
          <div className="col-md-6">
             <Input label="GitHub URL" value={portfolioData.github} onChange={(e) => updateField('github', e.target.value)} />
          </div>
          <div className="col-12">
             <Input label="Link to Resume (PDF)" value={portfolioData.resumeLink || ''} onChange={(e) => updateField('resumeLink', e.target.value)} placeholder="https://drive.google.com/..." />
          </div>
        </div>
      </Card>

    </div>
  );
};

const Accordion: React.FC<{ title: string; children: React.ReactNode, onAdd: () => void, addButtonText: string }> = ({ title, children, onAdd, addButtonText }) => {
    const [isOpen, setIsOpen] = useState(false); // Default closed for cleaner UI with so many sections
    return (
        <Card className="overflow-hidden">
            <div className="d-flex justify-content-between align-items-center mb-3">
                 <button onClick={() => setIsOpen(!isOpen)} className="btn btn-link text-decoration-none text-dark p-0 d-flex align-items-center fw-bold fs-5 border-0">
                    {title}
                    {isOpen ? <ChevronUp size={20} className="ms-2" /> : <ChevronDown size={20} className="ms-2" />}
                </button>
                <Button onClick={onAdd} variant="soft" size="sm"><PlusCircle size={16} className="me-1"/> {addButtonText}</Button>
            </div>
            
            {isOpen && <div className="d-flex flex-column">{children}</div>}
        </Card>
    );
}

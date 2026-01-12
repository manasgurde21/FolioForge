
import { useState, useCallback } from 'react';
import { PortfolioData, Project, Experience, Skill, Template, Education, Certification, Achievement, VisualConfig } from '../types';
import { generateBio, generateProjectDescription, generateExperienceDescription } from '../services/geminiService';
import { TEMPLATES } from '../constants';

const INITIAL_STATE: PortfolioData = {
  name: 'Jane Doe',
  title: 'Full-Stack Developer',
  tagline: 'Building digital experiences that matter.',
  email: 'jane.doe@example.com',
  linkedin: 'linkedin.com/in/janedoe',
  github: 'github.com/janedoe',
  phone: '123-456-7890',
  resumeLink: '',
  bio: 'A passionate developer ready to build the future.',
  strengths: 'Problem solving, scalable architecture, and team leadership.',
  skills: [
    {id: '1', name: 'React', category: 'Web'}, 
    {id: '2', name: 'Python', category: 'Language'},
    {id: '3', name: 'MongoDB', category: 'Database'}
  ],
  projects: [
    {
      id: 'p1',
      name: 'E-commerce Platform',
      shortDescription: 'Built a full-stack online store.',
      longDescription: 'Developed a comprehensive e-commerce platform with features like product catalog, shopping cart, user authentication, and a payment gateway. Leveraged modern technologies to ensure a seamless and secure shopping experience for users.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      link: 'https://example.com',
      githubLink: 'https://github.com/example/repo',
      role: 'Lead Developer',
      keyFeatures: 'Real-time inventory, Stripe integration',
      imageUrl: 'https://picsum.photos/seed/p1/800/600'
    }
  ],
  experience: [
    {
      id: 'e1',
      company: 'Tech Solutions Inc.',
      role: 'Software Engineer',
      startDate: 'Jan 2022',
      endDate: 'Present',
      shortDescription: 'Worked on front-end and back-end systems.',
      longDescription: 'As a Software Engineer at Tech Solutions Inc., I contributed to the development of several key products. My responsibilities included designing and implementing user-facing features, building scalable backend services, and maintaining database integrity.',
    }
  ],
  education: [
    {
      id: 'ed1',
      degree: 'B.Sc. Computer Science',
      school: 'University of Tech',
      year: '2021',
      achievements: 'Graduated with Honors'
    }
  ],
  certifications: [],
  achievements: [],
  template: TEMPLATES[0],
  visualConfig: {
    font: 'Inter',
    themeColor: '#0d6efd', // Bootstrap Primary
    showProfileImage: true,
    profileImageUrl: 'https://picsum.photos/seed/avatar1/400/400',
    backgroundImageUrl: ''
  }
};

export const usePortfolioBuilder = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(INITIAL_STATE);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const updateField = useCallback(<K extends keyof PortfolioData>(field: K, value: PortfolioData[K]) => {
    setPortfolioData(prev => ({ ...prev, [field]: value }));
  }, []);

  const updateVisualConfig = useCallback(<K extends keyof VisualConfig>(field: K, value: VisualConfig[K]) => {
    setPortfolioData(prev => ({ 
      ...prev, 
      visualConfig: { ...prev.visualConfig, [field]: value } 
    }));
  }, []);

  const setTemplate = useCallback((template: Template) => {
    updateField('template', template);
  }, [updateField]);

  // --- Skills ---
  const addSkill = useCallback((name: string, category: string = 'Tool') => {
    if (name && !portfolioData.skills.find(s => s.name === name)) {
      const newSkill: Skill = { id: Date.now().toString(), name, category: category as any };
      updateField('skills', [...portfolioData.skills, newSkill]);
    }
  }, [portfolioData.skills, updateField]);

  const removeSkill = useCallback((id: string) => {
    updateField('skills', portfolioData.skills.filter(s => s.id !== id));
  }, [portfolioData.skills, updateField]);

  // --- Projects ---
  const addProject = useCallback(() => {
    const newProject: Project = {
      id: `p${Date.now()}`,
      name: 'New Project',
      shortDescription: '',
      longDescription: '',
      technologies: [],
      link: ''
    };
    updateField('projects', [...portfolioData.projects, newProject]);
  }, [portfolioData.projects, updateField]);
  
  const updateProject = useCallback((id: string, field: keyof Omit<Project, 'id'>, value: any) => {
      const updatedProjects = portfolioData.projects.map(p => 
          p.id === id ? { ...p, [field]: value } : p
      );
      updateField('projects', updatedProjects);
  }, [portfolioData.projects, updateField]);

  const removeProject = useCallback((id: string) => {
    updateField('projects', portfolioData.projects.filter(p => p.id !== id));
  }, [portfolioData.projects, updateField]);

  // --- Experience ---
  const addExperience = useCallback(() => {
    const newExperience: Experience = {
      id: `e${Date.now()}`,
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      shortDescription: '',
      longDescription: ''
    };
    updateField('experience', [...portfolioData.experience, newExperience]);
  }, [portfolioData.experience, updateField]);

  const updateExperience = useCallback((id: string, field: keyof Omit<Experience, 'id'>, value: any) => {
      const updatedExperience = portfolioData.experience.map(e => 
          e.id === id ? { ...e, [field]: value } : e
      );
      updateField('experience', updatedExperience);
  }, [portfolioData.experience, updateField]);

  const removeExperience = useCallback((id: string) => {
    updateField('experience', portfolioData.experience.filter(e => e.id !== id));
  }, [portfolioData.experience, updateField]);

  // --- Education ---
  const addEducation = useCallback(() => {
    updateField('education', [...portfolioData.education, { id: `ed${Date.now()}`, degree: '', school: '', year: '' }]);
  }, [portfolioData.education, updateField]);

  const updateEducation = useCallback((id: string, field: keyof Omit<Education, 'id'>, value: string) => {
    updateField('education', portfolioData.education.map(i => i.id === id ? { ...i, [field]: value } : i));
  }, [portfolioData.education, updateField]);
  
  const removeEducation = useCallback((id: string) => {
    updateField('education', portfolioData.education.filter(i => i.id !== id));
  }, [portfolioData.education, updateField]);

  // --- Certifications ---
  const addCertification = useCallback(() => {
    updateField('certifications', [...portfolioData.certifications, { id: `c${Date.now()}`, name: '', platform: '', year: '' }]);
  }, [portfolioData.certifications, updateField]);

  const updateCertification = useCallback((id: string, field: keyof Omit<Certification, 'id'>, value: string) => {
    updateField('certifications', portfolioData.certifications.map(i => i.id === id ? { ...i, [field]: value } : i));
  }, [portfolioData.certifications, updateField]);

  const removeCertification = useCallback((id: string) => {
    updateField('certifications', portfolioData.certifications.filter(i => i.id !== id));
  }, [portfolioData.certifications, updateField]);

  // --- Achievements ---
  const addAchievement = useCallback(() => {
    updateField('achievements', [...portfolioData.achievements, { id: `a${Date.now()}`, title: '', description: '' }]);
  }, [portfolioData.achievements, updateField]);

  const updateAchievement = useCallback((id: string, field: keyof Omit<Achievement, 'id'>, value: string) => {
    updateField('achievements', portfolioData.achievements.map(i => i.id === id ? { ...i, [field]: value } : i));
  }, [portfolioData.achievements, updateField]);

  const removeAchievement = useCallback((id: string) => {
    updateField('achievements', portfolioData.achievements.filter(i => i.id !== id));
  }, [portfolioData.achievements, updateField]);


  // --- AI Handlers ---
  const generateAIBio = useCallback(async () => {
    setLoadingStates(prev => ({ ...prev, bio: true }));
    const skillsString = portfolioData.skills.map(s => s.name).join(', ');
    const newBio = await generateBio(portfolioData.name, portfolioData.title, skillsString);
    updateField('bio', newBio);
    setLoadingStates(prev => ({ ...prev, bio: false }));
  }, [portfolioData.name, portfolioData.title, portfolioData.skills, updateField]);
  
  const generateAIProjectDescription = useCallback(async (projectId: string) => {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;
    setLoadingStates(prev => ({ ...prev, [`project-${projectId}`]: true }));
    const newDescription = await generateProjectDescription(project);
    updateProject(projectId, 'longDescription', newDescription);
    setLoadingStates(prev => ({ ...prev, [`project-${projectId}`]: false }));
  }, [portfolioData.projects, updateProject]);

  const generateAIExperienceDescription = useCallback(async (experienceId: string) => {
    const experience = portfolioData.experience.find(e => e.id === experienceId);
    if (!experience) return;
    setLoadingStates(prev => ({ ...prev, [`experience-${experienceId}`]: true }));
    const newDescription = await generateExperienceDescription(experience);
    updateExperience(experienceId, 'longDescription', newDescription);
    setLoadingStates(prev => ({ ...prev, [`experience-${experienceId}`]: false }));
  }, [portfolioData.experience, updateExperience]);


  return {
    portfolioData,
    loadingStates,
    updateField,
    updateVisualConfig,
    setTemplate,
    // Skill CRUD
    addSkill, removeSkill,
    // Project CRUD
    addProject, updateProject, removeProject,
    // Experience CRUD
    addExperience, updateExperience, removeExperience,
    // Education CRUD
    addEducation, updateEducation, removeEducation,
    // Certs CRUD
    addCertification, updateCertification, removeCertification,
    // Achievement CRUD
    addAchievement, updateAchievement, removeAchievement,
    // AI
    generateAIBio, generateAIProjectDescription, generateAIExperienceDescription,
  };
};


import React from 'react';
import { AppStep } from '../types';
import { LayoutTemplate, Sparkles, User, Briefcase, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
    currentStep: AppStep;
    setStep: (step: AppStep) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentStep, setStep }) => {
    
    // Helper to determine progress state
    const getStepState = (stepName: AppStep) => {
        const order = ['FORM', 'TEMPLATES', 'PREVIEW', 'PUBLISHED'];
        const currentIndex = order.indexOf(currentStep);
        const stepIndex = order.indexOf(stepName);
        
        if (currentStep === stepName) return 'active';
        if (currentIndex > stepIndex) return 'completed';
        return 'inactive';
    };

    const steps = [
        { name: 'Content', step: 'FORM' as AppStep, icon: User },
        { name: 'Design', step: 'TEMPLATES' as AppStep, icon: LayoutTemplate },
        { name: 'Publish', step: 'PREVIEW' as AppStep, icon: Sparkles },
    ];

  return (
    <nav className="navbar navbar-expand navbar-glass sticky-top z-3" style={{height: '84px'}}>
      <div className="container">
        <div className="navbar-brand d-flex align-items-center gap-3 cursor-pointer" onClick={() => setStep('FORM')}>
            <div className="position-relative d-flex align-items-center justify-content-center" style={{width: 42, height: 42}}>
                 <div className="position-absolute w-100 h-100 rounded-3 bg-primary opacity-25" style={{transform: 'rotate(6deg)'}}></div>
                 <div className="position-relative bg-primary text-white rounded-3 d-flex align-items-center justify-content-center shadow-sm w-100 h-100" style={{background: 'var(--primary-gradient)'}}>
                    <Briefcase size={22} strokeWidth={2.5} />
                </div>
            </div>
            <div className="d-flex flex-column">
                <span className="fw-extrabold text-dark lh-1 fs-4 brand-gradient-text" style={{letterSpacing: '-0.5px'}}>FolioForge</span>
                <span className="text-secondary small fw-semibold" style={{fontSize: '0.7rem', letterSpacing: '1px'}}>AI PORTFOLIO BUILDER</span>
            </div>
        </div>
        
        <div className="d-flex bg-white border rounded-pill p-1 mx-auto d-none d-md-flex shadow-sm">
            {steps.map((item) => {
                const status = getStepState(item.step);
                const isActive = status === 'active';
                const isCompleted = status === 'completed';
                const Icon = isCompleted ? CheckCircle2 : item.icon;
                
                return (
                <button
                    key={item.name}
                    onClick={() => setStep(item.step)}
                    className={`btn btn-sm rounded-pill px-4 d-flex align-items-center gap-2 transition-all border-0 ${
                        isActive 
                        ? 'bg-primary text-white shadow-sm fw-bold' 
                        : isCompleted 
                            ? 'text-success fw-bold bg-transparent' 
                            : 'text-muted fw-medium bg-transparent'
                    }`}
                    style={{minWidth: 120, height: 40}}
                >
                    <Icon size={16} className={isCompleted ? "text-success" : (isActive ? "text-white" : "text-muted")} />
                    {item.name}
                </button>
            )})}
        </div>

        <div className="d-flex gap-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm rounded-pill d-none d-sm-flex align-items-center gap-2 px-3 fw-bold">
                 <span>GitHub</span>
            </a>
        </div>
      </div>
    </nav>
  );
};

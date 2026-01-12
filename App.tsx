
import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { BuilderForm } from './components/BuilderForm';
import { TemplateSelector } from './components/TemplateSelector';
import { LivePreview } from './components/LivePreview';
import { usePortfolioBuilder } from './hooks/usePortfolioBuilder';
import { TEMPLATES } from './constants';
import { AppStep, Template } from './types';
import { PublishingOverlay } from './components/ui/PublishingOverlay';
import { Button } from './components/ui/Button';
import { downloadPortfolio } from './utils/export';
import { Download, Rocket } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState<AppStep>('FORM');
  const [isPublishing, setIsPublishing] = useState(false);
  const portfolioBuilder = usePortfolioBuilder();
  const { portfolioData, setTemplate, updateVisualConfig } = portfolioBuilder;
  
  // Ref to capture the rendered portfolio HTML for export
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleTemplateSelect = (template: Template) => {
    setTemplate(template);
    setStep('PREVIEW');
  };

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setStep('PUBLISHED');
    }, 2500); // Simulate a 2.5 second publishing process
  };
  
  const handleDownloadCode = () => {
      if (portfolioRef.current) {
          downloadPortfolio(portfolioData, portfolioRef.current);
      }
  };

  const renderStep = () => {
    switch (step) {
      case 'FORM':
        return (
          <div className="container-fluid container-xl py-4">
              <div className="row g-4">
                <div className="col-lg-5 mb-5 mb-lg-0">
                  <BuilderForm {...portfolioBuilder} />
                </div>
                <div className="col-lg-7">
                  <LivePreview data={portfolioData} template={portfolioData.template} onPublish={handlePublish} />
                </div>
              </div>
          </div>
        );
      case 'TEMPLATES':
        return (
          <TemplateSelector
            templates={TEMPLATES}
            onSelect={handleTemplateSelect}
            updateVisualConfig={updateVisualConfig}
            visualConfig={portfolioData.visualConfig}
          />
        );
      case 'PREVIEW':
        return (
             <div className="container py-4">
                <LivePreview data={portfolioData} template={portfolioData.template} onPublish={handlePublish} isStandalone={true} />
            </div>
        );
      case 'PUBLISHED':
          const TemplateComponent = portfolioData.template.component;
            return (
                <div className="d-flex flex-column min-vh-100">
                    <div className="bg-dark text-white py-3 shadow sticky-top z-3">
                        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2">
                                <span className="badge bg-success rounded-pill px-3 py-2">LIVE</span>
                                <span className="fw-medium">Your portfolio is ready!</span>
                            </div>
                            <div className="d-flex gap-3">
                                <Button onClick={handleDownloadCode} variant="primary" size="sm" className="d-flex align-items-center gap-2">
                                    <Download size={16} /> Download Code
                                </Button>
                                <Button onClick={() => setStep('FORM')} variant="secondary" size="sm" className="d-flex align-items-center gap-2">
                                    <Rocket size={16} /> Start New
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* The div below captures the full HTML for export */}
                    <div className="flex-grow-1" ref={portfolioRef}>
                         <TemplateComponent data={portfolioData} />
                    </div>
                </div>
            );
      default:
        return <div>Error: Invalid step</div>;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {isPublishing && <PublishingOverlay />}
      {step !== 'PUBLISHED' && <Navbar currentStep={step} setStep={setStep} />}
      <main className="flex-grow-1">
        {renderStep()}
      </main>
      {step !== 'PUBLISHED' && <footer className="bg-white py-4 border-top text-center text-muted mt-auto">
        <div className="container">
            <p className="mb-0 small">&copy; {new Date().getFullYear()} AI Portfolio Builder. All rights reserved.</p>
        </div>
      </footer>}
    </div>
  );
}

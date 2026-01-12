
import React from 'react';
import { PortfolioData, Template } from '../types';
import { Button } from './ui/Button';

interface LivePreviewProps {
  data: PortfolioData;
  template: Template;
  onPublish: () => void;
  isStandalone?: boolean;
}

export const LivePreview: React.FC<LivePreviewProps> = ({ data, template, onPublish, isStandalone = false }) => {
  const TemplateComponent = template.component;

  const containerClasses = `live-preview-wrapper ${isStandalone ? 'standalone' : ''}`;

  return (
    <div className={containerClasses}>
      <div className="browser-header d-flex align-items-center gap-3">
        <div className="browser-dots">
          <div className="dot dot-red"></div>
          <div className="dot dot-yellow"></div>
          <div className="dot dot-green"></div>
        </div>
        <div className="flex-grow-1">
             <div className="browser-url text-truncate">your-portfolio.ai</div>
        </div>
        <Button onClick={onPublish} size="sm" variant="primary">Publish</Button>
      </div>
      <div className="live-preview-content">
        <div className="live-preview-inner-content h-100">
          <TemplateComponent data={data} />
        </div>
      </div>
    </div>
  );
};

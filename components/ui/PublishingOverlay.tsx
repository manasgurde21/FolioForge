
import React from 'react';
import { Zap } from 'lucide-react';

export const PublishingOverlay: React.FC = () => {
  return (
    <div className="publishing-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
      <div className="text-center text-white">
        <div className="position-relative d-inline-block mb-4" style={{width: 80, height: 80}}>
            <div className="spinner-ring"></div>
            <div className="position-relative d-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle shadow-lg">
                <Zap size={40} className="text-white"/>
            </div>
        </div>
        <h2 className="display-6 fw-bold mb-2">Publishing your site...</h2>
        <p className="lead opacity-75">Finalizing details and deploying to the web.</p>
      </div>
    </div>
  );
};

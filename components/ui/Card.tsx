
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  headerAction?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, headerAction }) => {
  return (
    <div className={`card-modern ${className}`}>
      {(title || headerAction) && (
        <div className="card-header-modern d-flex justify-content-between align-items-center">
            {title && <h5 className="card-title mb-0 fw-bold text-dark">{title}</h5>}
            {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="card-body p-4">
        {children}
      </div>
    </div>
  );
};

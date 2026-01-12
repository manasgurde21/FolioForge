
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-medium">
        {label}
      </label>
      <input
        id={id}
        className={`form-control ${className}`}
        {...props}
      />
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-medium">
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        className={`form-control ${className}`}
        {...props}
      />
    </div>
  );
};

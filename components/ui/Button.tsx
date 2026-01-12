
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link' | 'magic' | 'soft';
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  size = 'md',
  className = '',
  ...props
}) => {
  // Map internal variants to Bootstrap classes or custom classes
  let btnClass = 'btn';
  
  switch(variant) {
    case 'primary': btnClass += ' btn-primary'; break;
    case 'secondary': btnClass += ' btn-secondary'; break;
    case 'ghost': btnClass += ' btn-outline-secondary'; break;
    case 'danger': btnClass += ' btn-danger'; break;
    case 'link': btnClass += ' btn-link text-decoration-none'; break;
    case 'magic': btnClass += ' btn-magic'; break;
    case 'soft': btnClass += ' btn-soft'; break;
    default: btnClass += ' btn-primary';
  }

  switch(size) {
    case 'sm': btnClass += ' btn-sm'; break;
    case 'lg': btnClass += ' btn-lg'; break;
    // md is default
  }

  return (
    <button
      className={`${btnClass} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      )}
      {children}
    </button>
  );
};

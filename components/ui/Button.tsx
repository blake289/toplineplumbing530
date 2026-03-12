import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  // Base styles - minimum 44px height for WCAG touch targets
  const baseStyles = 'font-btn font-semibold rounded-full transition-all duration-base focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 touch-target';

  // Variant styles with proper hover effects
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:scale-105 focus-visible:ring-primary shadow-md hover:shadow-brand',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark hover:scale-105 focus-visible:ring-secondary shadow-md hover:shadow-lg',
    outline: 'border-2 border-navy-900 text-navy-900 bg-transparent hover:bg-navy-900 hover:text-white focus-visible:ring-navy-500 hover:scale-105',
  };

  // Size styles - minimum 44px height
  const sizes = {
    sm: 'h-11 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

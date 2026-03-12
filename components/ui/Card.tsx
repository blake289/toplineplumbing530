import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  hover = false,
}: CardProps) {
  // Padding styles (mobile-first responsive)
  const paddingStyles = {
    sm: 'p-4 lg:p-6',
    md: 'p-6 lg:p-10',
    lg: 'p-8 lg:p-12',
  };

  // Shadow styles
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const hoverStyles = hover
    ? 'transition-all duration-base hover:shadow-lg hover:-translate-y-1'
    : '';

  return (
    <div
      className={`rounded-lg ${paddingStyles[padding]} ${shadowStyles[shadow]} ${hoverStyles} ${className || 'bg-white'}`}
    >
      {children}
    </div>
  );
}

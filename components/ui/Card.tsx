import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  border?: boolean;
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  hover = false,
  border = false,
}: CardProps) {
  // Consistent padding across all cards
  const paddingStyles = {
    sm: 'p-4 md:p-6',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10 lg:p-12',
  };

  // Consistent shadow system
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  // Hover lift animation
  const hoverStyles = hover
    ? 'transition-all duration-base hover:shadow-xl hover:-translate-y-1'
    : '';

  // Optional border
  const borderStyles = border
    ? 'border-2 border-border'
    : '';

  return (
    <div
      className={`
        rounded-lg
        ${paddingStyles[padding]}
        ${shadowStyles[shadow]}
        ${hoverStyles}
        ${borderStyles}
        ${className || 'bg-white'}
      `}
    >
      {children}
    </div>
  );
}

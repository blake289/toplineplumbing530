'use client';

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  required,
  ...props
}: InputProps) {
  // Generate ID from label if not provided
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-2 font-semibold text-gray-900 text-sm"
        >
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full h-12 px-4 text-base
          border rounded-md
          font-body
          transition-all duration-150
          focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-800
          hover:border-gray-400
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
          ${error ? 'border-primary focus:ring-primary/20 focus:border-primary' : 'border-gray-300'}
          ${className}
        `}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-primary">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-600">
          {helperText}
        </p>
      )}
    </div>
  );
}

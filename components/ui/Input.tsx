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
          className="block mb-1 font-semibold text-gray-700 text-[13px]"
        >
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400
          font-body
          transition-[border-color,box-shadow] duration-200 ease-snappy
          focus:outline-none focus:border-navy-900/40 focus:shadow-[0_0_0_3px_rgba(0,30,56,0.08)]
          hover:border-gray-300
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
          ${error ? 'border-primary focus:border-primary focus:shadow-[0_0_0_3px_rgba(221,21,21,0.1)]' : 'border-gray-200'}
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

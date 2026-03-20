'use client';

import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Textarea({
  label,
  error,
  helperText,
  className = '',
  id,
  required,
  rows = 4,
  ...props
}: TextareaProps) {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block mb-2 font-semibold text-gray-700 text-sm"
        >
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className={`
          w-full rounded-xl border bg-white px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-400
          font-body
          transition-all duration-150
          focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary/80 focus:ring-offset-0
          hover:border-gray-400
          disabled:bg-gray-100 disabled:cursor-not-allowed
          resize-vertical
          ${error ? 'border-primary focus:ring-primary/20 focus:border-primary' : 'border-gray-200'}
          ${className}
        `}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="mt-1 text-sm text-primary">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${textareaId}-helper`} className="mt-1 text-sm text-gray-600">
          {helperText}
        </p>
      )}
    </div>
  );
}

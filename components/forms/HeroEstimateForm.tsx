'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validation/contact-schema';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

export default function HeroEstimateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="First Name"
          {...register('firstName')}
          error={errors.firstName?.message}
          required
        />
        <Input
          label="Last Name"
          {...register('lastName')}
          error={errors.lastName?.message}
          required
        />
      </div>

      <Input
        label="Phone"
        type="tel"
        {...register('phone')}
        error={errors.phone?.message}
        required
      />

      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        required
      />

      {/* Service Required dropdown */}
      <div className="w-full">
        <label htmlFor="service" className="block mb-2 font-semibold text-gray-700 text-sm">
          Service Required
        </label>
        <div className="relative">
          <select
            id="service"
            {...register('service')}
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-base text-gray-900 transition-[border-color,box-shadow] duration-200 ease-snappy focus:outline-none focus:border-navy-900/40 focus:shadow-[0_0_0_3px_rgba(0,30,56,0.08)] hover:border-gray-300"
          >
            <option value="" disabled>Select a service…</option>
            <option value="emergency">Emergency Plumbing</option>
            <option value="water-heater">Water Heaters</option>
            <option value="drain-cleaning">Drain Cleaning</option>
            <option value="tankless">Tankless Upgrades</option>
            <option value="repiping">Repiping</option>
            <option value="fixture-installs">Fixture Installs</option>
            <option value="other">Other</option>
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <Textarea
        label="Message"
        {...register('message')}
        placeholder="Brief description of your plumbing need..."
        rows={1}
        error={errors.message?.message}
      />

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-0.5 w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary focus:ring-2 cursor-pointer flex-shrink-0"
          />
          <span className="text-xs text-gray-500 leading-snug">
            By submitting this form, I consent to receive SMS messages from Topline Plumbing regarding my service request and appointment updates. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out.{' '}
            <a href="/privacy" className="text-primary underline">Privacy Policy</a>{' '}&amp;{' '}
            <a href="/terms" className="text-primary underline">Terms</a>.
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-600 text-xs mt-1">{errors.consent.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        isLoading={isSubmitting}
      >
        Request Estimate
      </Button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
          Thank you! We'll contact you shortly.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
          Something went wrong. Please try again or call us directly.
        </div>
      )}
    </form>
  );
}

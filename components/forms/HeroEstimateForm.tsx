'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { heroFormSchema, type HeroFormData } from '@/lib/validation/hero-form-schema';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function HeroEstimateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
  });

  const onSubmit = async (data: HeroFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const [firstName, ...rest] = data.name.trim().split(/\s+/);
    const lastName = rest.join(' ');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: data.phone,
          zip: data.zip,
          service: data.service,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      // GA4 conversion: fire generate_lead on successful submit
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          form: 'hero_estimate',
          service: data.service,
        });
      }

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <Input
        label="Name"
        type="text"
        autoComplete="name"
        {...register('name')}
        error={errors.name?.message}
        required
      />

      <Input
        label="Phone"
        type="tel"
        autoComplete="tel"
        {...register('phone')}
        error={errors.phone?.message}
        required
      />

      <Input
        label="ZIP"
        type="text"
        inputMode="numeric"
        autoComplete="postal-code"
        {...register('zip')}
        error={errors.zip?.message}
        required
      />

      <div className="w-full">
        <label htmlFor="service" className="block mb-1 font-semibold text-gray-700 text-[13px]">
          Service Needed
        </label>
        <div className="relative">
          <select
            id="service"
            {...register('service')}
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm text-gray-900 transition-[border-color,box-shadow] duration-200 ease-snappy focus:outline-none focus:border-navy-900/40 focus:shadow-[0_0_0_3px_rgba(0,30,56,0.08)] hover:border-gray-300"
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
        {errors.service && (
          <p className="text-red-600 text-xs mt-1">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-0.5 w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary focus:ring-2 cursor-pointer flex-shrink-0"
          />
          <span className="text-xs text-gray-500 leading-snug">
            By submitting, I consent to SMS from Topline Plumbing about my request. Msg &amp; data rates may apply. Reply STOP to opt out.{' '}
            <a href="/privacy" className="text-primary underline">Privacy</a>{' '}&amp;{' '}
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
          Thank you! We&apos;ll contact you shortly.
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

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
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

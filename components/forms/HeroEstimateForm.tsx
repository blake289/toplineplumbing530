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
      // TODO: Implement actual form submission
      console.log('Form data:', data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

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
        rows={2}
        error={errors.message?.message}
      />

      {/* Consent Checkbox */}
      <div className="space-y-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-1 w-5 h-5 text-primary bg-white border-gray-300 rounded focus:ring-primary focus:ring-2 cursor-pointer"
          />
          <span className="text-base text-gray-700 leading-relaxed">
            By submitting, you authorize Topline Plumbing to contact you via call, text, or email regarding your inquiry. Message/data rates may apply. Opt out anytime.{' '}
            <a href="/contact" className="text-secondary hover:underline">
              View our Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-600 text-sm">{errors.consent.message}</p>
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
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm">
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

import { z } from 'zod';

export const heroFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[\d\s\-\(\)\+]+$/, 'Invalid phone number format'),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Enter a valid ZIP'),
  service: z.string().min(1, 'Select a service'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to be contacted',
  }),
});

export type HeroFormData = z.infer<typeof heroFormSchema>;

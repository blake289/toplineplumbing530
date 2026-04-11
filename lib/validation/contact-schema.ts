import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[\d\s\-\(\)\+]+$/, 'Invalid phone number format'),
  email: z.string().email('Invalid email address'),
  service: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to be contacted',
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

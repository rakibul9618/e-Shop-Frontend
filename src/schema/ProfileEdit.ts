import { z } from 'zod';

export const ProfileEditSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'At least 3 words Required' })
    .regex(/^[a-z0-9\s-]+$/i, { message: 'Allow a-z, 0-9 and hyphen' }),
  date: z.string().min(5, {
    message: 'Please select a date and time',
  }),
  address: z.string().min(8, { message: 'Address is required' }),
  gender: z
    .string()
    .nullable()
    .refine(
      (value) => {
        return !!value; // checks if the string contains a special character
      },
      {
        message: 'Gender is required ',
      }
    ),
  email: z
    .string({ invalid_type_error: "That's not a date!" })
    .min(1, 'Email is Required')
    .email({ message: 'Please enter a valid Email' })
    .refine(
      (value) => {
        return !/[!#$%^&*()+\-=\[\]{};':"\\|,<>\/?]/.test(value); // checks if the string contains a special character
      },
      {
        message: 'Only "_" and "." special character is allowed',
      }
    ),
  phone: z
    .string()
    .min(10, { message: 'Number should be more than and equal 10 character' })
    .regex(/^\d+$/, { message: 'Only number is allow' }),
});

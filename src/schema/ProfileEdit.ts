import { z } from 'zod';

export const ProfileEditSchema = z.object({
  email: z
    .string()
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
  password: z
    .string()
    .min(8, { message: 'Use more than 8 character' })
    .refine(
      (value) => {
        return /[A-Z]/.test(value); // checks if the string contains an uppercase letter
      },
      {
        message: 'Must contain at least one uppercase letter',
      }
    )
    .refine(
      (value) => {
        return /[0-9]/.test(value); // checks if the string contains a number
      },
      {
        message: 'Must contain at least one number',
      }
    )
    .refine(
      (value) => {
        return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value); // checks if the string contains a special character
      },
      {
        message: 'Must contain at least one special character',
      }
    ),
});

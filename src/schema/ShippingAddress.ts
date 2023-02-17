import { z } from 'zod';

export const ShippingAddress = z.object({
  firstName: z
    .string()
    .min(3, { message: 'At least 3 words Required' })
    .regex(/^[a-z0-9\s-]+$/i, { message: 'Allow a-z, 0-9 and hyphen' }),
  lastName: z
    .string()
    .min(3, { message: 'At least 3 words Required' })
    .regex(/^[a-z0-9\s-]+$/i, { message: 'Allow a-z, 0-9 and hyphen' }),
  email: z
    .string()
    .min(1, 'Email is Required')
    .email({ message: 'Please enter a valid Email' }),
  phone: z
    .string()
    .min(10, { message: 'Number should be more than and equal 10 character' })
    .regex(/^\d+$/, { message: 'Only number is allow' }),
  division: z.string().min(3, { message: 'Division is Required' }),
  district: z.string().min(3, { message: 'district is Required' }),
  area: z.string().min(3, { message: 'area is Required' }),
  address: z
    .string()
    .min(8, { message: 'Address is Required and use more than 8 character' }),
});

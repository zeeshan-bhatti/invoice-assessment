// src/validationSchema.ts
import { z } from 'zod';

export const invoiceSchema = z.object({
  companyName: z.string().min(1,{ message: 'Company Name is required' }),
  companyEmail: z.string().email({ message: 'Invalid email address' }),
  country: z.string().min(1,{ message: 'Country is required' }),
  city: z.string().min(1,{ message: 'City is required' }),
  postalCode: z.string().min(1,{ message: 'Postal Code is required' }),
  streetAddress: z.string().min(1,{ message: 'Street Address is required' }),
  clientName: z.string().min(1,{ message: 'Client Name is required' }),
  clientEmail: z.string().email({ message: 'Invalid email address' }),
  clientCountry: z.string().min(1,{ message: 'Country is required' }),
  clientCity: z.string().min(1,{ message: 'City is required' }),
  clientPostalCode: z.string().min(1,{ message: 'Postal Code is required' }),
  clientStreetAddress: z.string().min(1,{ message: 'Street Address is required' }),
  invoiceDate: z.string().min(1,{ message: 'Invoice Date is required' }),
  paymentTerms: z.string().min(1,{ message: 'Payment Terms are required' }),
  projectDescription: z.string().min(1,{ message: 'Project Description is required' }),
  items: z.array(
    z.object({
      name: z.string().min(1,{ message: 'Item Name is required' }),
      quantity: z.number().positive({ message: 'Quantity must be greater than zero' }),
      price: z.number().positive({ message: 'Price must be greater than zero' }),
    })
  ).min(1,{ message: 'At least one item is required' }),
});

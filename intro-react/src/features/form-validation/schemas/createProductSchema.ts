import * as z from 'zod';

const createProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Name is required' })
    .max(100, { message: 'Name have maximum 100 characters' }),
  price: z
    .number({ message: 'Price must be number' })
    .min(1, { message: 'Price is required' }),
  stocks: z
    .number({ message: 'Stocks must be number' })
    .min(1, { message: 'Price is required' }),
  imageUrl: z.string().trim().min(1, { message: 'Name is required' }),
});

export default createProductSchema;

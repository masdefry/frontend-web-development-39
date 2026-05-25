import { z } from 'zod';

export const createTodoSchema = z.object({
  isCompleted: z.boolean(),
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(150, { message: 'Title have maximum 150 characters' }),
});

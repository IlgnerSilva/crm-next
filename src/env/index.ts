import 'dotenv/config';
import { z } from 'zod';

const enSchema = z.object({
  DATABASE_URL: z.string(),
  GOOGLE_API_KEY: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

if (!enSchema.parse(process.env)) {
  throw new Error('Invalid environment variables');
}

export const env = enSchema.parse(process.env);

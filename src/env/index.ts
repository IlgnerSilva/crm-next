import 'dotenv/config';
import { z } from 'zod';

const enSchema = z.object({
  DATABASE_URL: z.string(),
  GOOGLE_API_KEY: z.string(),
});

if (!enSchema.parse(process.env)) {
  throw new Error('Variáveis de ambiente invalidas!');
}

export const env = enSchema.parse(process.env);

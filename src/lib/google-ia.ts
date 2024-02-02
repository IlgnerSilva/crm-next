import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '@/env';

export const googleIA = new GoogleGenerativeAI(env.GOOGLE_API_KEY);

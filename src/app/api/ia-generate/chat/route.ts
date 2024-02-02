import { googleIA } from '@/lib/google-ia';
import auth from '@/middleware';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await auth();
  if (!session?.user) {
    return res.status(401).json({ message: 'É necessário se autorizar!' });
  }
  const model = googleIA.getGenerativeModel({ model: 'gemini-pro' });
  const chat = await model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 256,
    },
  });
  const { prompt } = await JSON.parse(req.body);
  const result = (await chat.sendMessage(prompt)).response;
  return res.status(200).json({ message: result.text() });
}

import { googleIA } from '@/lib/google-ia';
import { NextApiRequest, NextApiResponse } from 'next';
// import auth from '@/middleware';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  // const session = await auth();
  // if (!session?.user) {
  //   return res.status(401).json({ message: 'É necessário se autorizar!' });
  // }
  const { prompt } = await req.json();
  const model = googleIA.getGenerativeModel({ model: 'gemini-pro' });
  const chat = await model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 256,
    },
  });
  const result = (await chat.sendMessage(prompt)).response;
  return new Response(JSON.stringify({ message: result.text() }));
  // return res.status(200).json({ message: result.text() });
}

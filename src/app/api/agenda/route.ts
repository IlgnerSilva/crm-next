import { getFeriados } from '@/services/agenda/feriados';
import { auth } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // const session = await auth(req, res);
  // if (!session?.user) {
  //   return res.status(401).json({ message: 'É necessário se autorizar!' });
  // }
  const feriados = await getFeriados();
  return new Response(JSON.stringify(feriados));
}

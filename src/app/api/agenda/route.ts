import { getFeriados } from '@/services/agenda/feriados';

export async function GET() {
  const feriados = await getFeriados();
  return new Response(JSON.stringify(feriados));
}

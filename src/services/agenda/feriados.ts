import { prisma } from '@/lib/prismaClient';

export async function getFeriados() {
  const feriados = await prisma.feriados.findMany({
    where: {
      OR: [{ tipo: 'NACIONAL' }, { municipio: 'Ribeirão Preto' }],
    },
    select: {
      data: true,
      nome: true,
      municipio: true,
      uf: true,
      descricao: true,
      tipo: true,
    },
  });

  return feriados;
}

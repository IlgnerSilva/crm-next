import { prisma } from '@/lib/prismaClient';

export async function getFeriados() {
  const feriados = await prisma.feriados.findMany({
    where: {
      municipio: 'Ribeirão Preto',
    },
    select: {
      data: true,
      nome: true,
      municipio: true,
      uf: true,
      descricao: true,
    },
  });

  return feriados;
}

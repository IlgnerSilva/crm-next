import prisma from '@/lib/db';

export async function getFeriados() {
  const feriados = await prisma.feriados.findMany({
    where: {
      OR: [
        { municipio: 'Ribeirão Preto' },
        { tipo: 'NACIONAL' },
        { tipo: 'FACULTATIVO' },
        { tipo: 'ESTADUAL', uf: 'SP' },
      ],
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

'use client';

import { useMyContext } from '@/providers/context/layoutContext';
export function Header() {
  const { fixed } = useMyContext();
  return (
    <p
      className={`w-full ${fixed ? 'mt-0' : 'mt-6'} transition-all bg-gradient-to-t from-indigo-400 via-indigo-300 to-indigo-400 rounded-lg opacity-90`}
    >
      Header
    </p>
  );
}

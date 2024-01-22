'use client';

import { useMyContext } from '@/providers/context/layoutContext';

export function Sidebar() {
  const { hover, setHover, fixed, setFixed } = useMyContext();
  return (
    <div
      onMouseEnter={() => (fixed ? true : setHover(true))}
      onMouseLeave={() => (fixed ? true : setHover(false))}
      className={`max-h-screen ${hover ? 'w-80' : 'w-16'} bg-slate-500 transition-all`}
    >
      Sidebar
    </div>
  );
}

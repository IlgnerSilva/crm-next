'use client';

import { useMyContext } from '@/providers/context/layoutContext';
import { Lock, Unlock } from 'lucide-react';

export function Sidebar() {
  const { hover, setHover, fixed, setFixed } = useMyContext();
  return (
    <div
      onMouseEnter={() => (fixed ? true : setHover(true))}
      onMouseLeave={() => (fixed ? true : setHover(false))}
      className={`absolute p-4 max-h-screen h-screen ${fixed ? 'w-80' : `${hover ? 'w-80' : 'w-16'}`} bg-slate-500 transition-all`}
    >
      <div className="flex flex-col items-center justify-start gap-4">
        <div className="flex gap-5 items-center w-full justify-between">
          <p>Logo</p>
          {fixed || hover ? (
            <span className="p-2 hover:bg-slate-400">
              {fixed ? (
                <Lock width={20} onClick={() => setFixed(false)} />
              ) : (
                <Unlock width={20} onClick={() => setFixed(true)} />
              )}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

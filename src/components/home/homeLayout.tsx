'use client';

import { MyContextProvider } from '@/providers/context/layoutContext';

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <MyContextProvider>
      <div className="min-h-screen w-full">{children}</div>
    </MyContextProvider>
  );
}

'use client';

import { Sidebar } from '@/components/home/sidebar';
import { ChildrenLayout } from '@/components/home/layoutChildren';
import { Header } from '@/components/home/header';

import { MyContextProvider } from '@/providers/context/layoutContext';

export default function LayoutCRM({ children }: { children: React.ReactNode }) {
  return (
    <MyContextProvider>
      <div className="flex w-full min-h-screen justify-between max-w-full bg-indigo-400">
        <Sidebar />
        <ChildrenLayout>
          <Header />
          {children}
        </ChildrenLayout>
        <p className="max-h-screen min-w-16 bg-transparent border-l border-zinc-50">
          Conta
        </p>
      </div>
    </MyContextProvider>
  );
}

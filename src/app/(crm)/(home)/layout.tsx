'use client';

import { HomeLayout } from '@/components/home/homeLayout';
import { Sidebar } from '@/components/home/sidebar';
import { ChildrenLayout } from '@/components/home/children';

import { useMyContext } from '@/providers/context/layoutContext';

export default function LayoutCRM({ children }: { children: React.ReactNode }) {
  // const { fixed } = useMyContext();
  return (
    <HomeLayout>
      <div className="flex w-full min-h-screen justify-between max-w-full bg-gradient-to-r from-stone-500 via-sky-600 to-slate-100">
        <Sidebar />
        <ChildrenLayout>
          <p className="w-full bg-purple-600">Header</p>
          {children}
        </ChildrenLayout>
        <p className="max-h-screen min-w-16 bg-slate-500">Conta</p>
      </div>
    </HomeLayout>
  );
}

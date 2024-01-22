import { useMyContext } from '@/providers/context/layoutContext';

export function ChildrenLayout({ children }: { children: React.ReactNode }) {
  const { fixed } = useMyContext();
  return (
    <div
      className={`flex flex-col w-full transition-all ${fixed ? 'ml-80' : 'ml-16'}`}
    >
      {children}
    </div>
  );
}

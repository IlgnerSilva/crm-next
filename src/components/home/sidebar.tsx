'use client';

import { useMyContext } from '@/providers/context/layoutContext';
import { Lock, Unlock, Settings, Home, Bot, BarChart2 } from 'lucide-react';
import { SidebarUI, IMenuNavigation } from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const items: IMenuNavigation[] = [
  {
    title: 'Dashboard',
    icon: <Home width={20} />,
    children: [
      {
        title: 'Home',
        link: '/',
        icon: <Home width={20} />,
      },
    ],
  },
  {
    title: 'IA Generative',
    icon: <Bot width={20} />,
    children: [
      {
        title: 'Assistant',
        link: '/ia-generate',
        icon: <BarChart2 width={20} />,
      },
    ],
  },
  {
    title: 'Configurações',
    icon: <Settings width={20} />,
    children: [
      {
        title: 'Admin',
        link: '/config/admin',
        icon: <Lock width={20} />,
      },
    ],
  },
];

export function Sidebar() {
  const { hover, setHover, fixed, setFixed } = useMyContext();
  return (
    // <SidebarUI.UI>
    <div
      onMouseEnter={() => (fixed ? true : setHover(true))}
      onMouseLeave={() => (fixed ? true : setHover(false))}
      className={`fixed p-4 z-10  ${fixed ? 'w-75 left-0 h-screen top-0 rounded-l-none' : `${hover ? 'w-75 left-0 h-screen top-0 rounded-l-none' : 'w-16 left-4 h-[95vh] top-[2.5vh]'}`} bg-zinc-50 rounded-lg transition-all`}
    >
      <SidebarUI.Content>
        <div className="flex flex-col items-center justify-start gap-4 text-center">
          <SidebarUI.Header>
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
          </SidebarUI.Header>
          <SidebarUI.Navigation items={items} />
        </div>
        <SidebarUI.Footer>
          {fixed || hover ? (
            <Avatar>
              <AvatarImage src="https://github.com/IlgnerSilva.png" />
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src="https://github.com/IlgnerSilva.png" />
            </Avatar>
          )}
        </SidebarUI.Footer>
      </SidebarUI.Content>
    </div>
    // </SidebarUI.UI>
  );
}

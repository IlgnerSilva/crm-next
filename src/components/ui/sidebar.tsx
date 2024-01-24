import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { useMyContext } from '@/providers/context/layoutContext';

import Link from 'next/link';

export interface IMenuNavigation {
  title: string;
  label?: string;
  icon?: React.ReactNode;
  link?: string;
  children?: {
    title: string;
    link: string;
    icon?: React.ReactNode;
    label?: string;
    children?: IMenuNavigation[];
  }[];
}

function UI({ children }: { children: React.ReactNode }) {
  return <aside className="max-h-screen h-full">{children}</aside>;
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col h-full justify-between">{children}</main>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  const { fixed, hover } = useMyContext();
  return (
    <header
      className={`flex gap-5 items-center w-full ${fixed ? 'justify-between' : hover ? 'justify-between' : 'justify-center'}`}
    >
      {children}
    </header>
  );
}

function Navigation({ items }: { items: IMenuNavigation[] }) {
  const { fixed, hover } = useMyContext();
  return (
    <nav className="w-full">
      {items.map((item) => {
        return (
          <Accordion
            type="single"
            collapsible
            className="w-full"
            key={item.title}
          >
            {fixed || hover ? (
              <AccordionItem value={item.title}>
                <AccordionTrigger>
                  <span className="flex items-center gap-4">
                    {item.icon} {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {item.children ? (
                    <div className="w-full flex flex-col gap-4">
                      {item.children.map((child) => {
                        return (
                          <Link className="w-full" href={child.link || '#'}>
                            {child.title}
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <Link href={item.link || '#'}>{item.title}</Link>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <span className="flex items-center gap-4 justify-center w-full mt-2">
                {item.icon}
              </span>
            )}
          </Accordion>
        );
      })}
    </nav>
  );
}

function Footer({ children }: { children: React.ReactNode }) {
  return <footer className="flex justify-center w-full">{children}</footer>;
}

export const SidebarUI = {
  UI,
  Content,
  Header,
  Navigation,
  Footer,
};

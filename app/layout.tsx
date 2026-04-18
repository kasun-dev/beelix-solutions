import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Navbar, type NavItem } from '@/components/layout/navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
];

export const metadata: Metadata = {
  title: 'Beelix Solutions',
  description: 'IoT, Cloud, and Full-Stack software engineering agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-slate-950 text-slate-100">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,112,243,0.22),_transparent_60%)]" />
          <Navbar items={NAV_ITEMS} />
          {children}
          <Footer companyName="Beelix Solutions" />
        </div>
      </body>
    </html>
  );
}

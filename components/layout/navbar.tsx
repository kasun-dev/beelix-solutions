import Link from 'next/link';

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 shadow-2xl shadow-[#0070f3]/10 backdrop-blur-xl">
        <Link className="text-sm font-semibold tracking-wide text-white" href="/">
          Beelix Solutions
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link className="text-sm text-slate-300 transition-colors hover:text-white" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          className="rounded-lg border border-[#0070f3]/40 bg-[#0070f3]/20 px-3 py-1.5 text-xs font-medium text-[#b6d5ff] transition hover:bg-[#0070f3]/30"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

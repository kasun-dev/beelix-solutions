export interface FooterProps {
  companyName: string;
}

export function Footer({ companyName }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-400 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        <p>Engineering IoT, Cloud, and Full-Stack products for modern industry.</p>
      </div>
    </footer>
  );
}

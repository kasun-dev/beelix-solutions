import { type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group rounded-2xl border border-white/10 bg-slate-900/55 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0070f3]/60',
        className,
      )}
    >
      <div className="inline-flex rounded-xl border border-[#0070f3]/30 bg-[#0070f3]/10 p-3 text-[#66a6ff] transition-colors duration-300 group-hover:text-[#8bbdff]">
        <Icon className="size-5" aria-hidden />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}

'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CloudCog,
  Cpu,
  Database,
  Layers,
  Network,
  Smartphone,
  Wrench,
} from 'lucide-react';

import { ServiceCard, type ServiceCardProps } from '@/components/ui/service-card';

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Project {
  name: string;
  description: string;
  tags: string[];
}

const SERVICES: ServiceCardProps[] = [
  {
    title: 'Software Development',
    description:
      'Build robust web and mobile products with scalable architecture, API-first design, and polished UX.',
    icon: Smartphone,
  },
  {
    title: 'IoT Systems',
    description:
      'Deploy industrial telemetry, predictive maintenance, and edge-to-cloud pipelines for live operations.',
    icon: Cpu,
  },
  {
    title: 'Cloud Architecture',
    description:
      'Engineer secure AWS infrastructure with automation, observability, and cost-aware reliability.',
    icon: CloudCog,
  },
];

const TECH_STACK: TechItem[] = [
  { name: 'React', icon: Layers },
  { name: 'NestJS', icon: Network },
  { name: 'AWS', icon: CloudCog },
  { name: 'Prisma', icon: Database },
];

const PROJECTS: Project[] = [
  {
    name: 'PredictiveOps',
    description:
      'A monitoring suite that surfaces machine-health insights and failure-risk forecasting in real time.',
    tags: ['IoT', 'Telemetry', 'Analytics'],
  },
  {
    name: 'Modular POS',
    description: 'A multi-tenant commerce platform with subscriptions, inventory intelligence, and live reporting.',
    tags: ['SaaS', 'Payments', 'Operations'],
  },
  {
    name: 'Cloud Runtime Hub',
    description: 'Unified deployment workflows and runtime controls for distributed teams and cloud workloads.',
    tags: ['AWS', 'DevOps', 'Observability'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

export default function HomePage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-10 md:pt-16 lg:pt-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 md:p-10 lg:p-14">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <motion.div className="relative max-w-3xl" initial="hidden" animate="show" variants={containerVariants}>
          <motion.span
            className="inline-flex items-center rounded-full border border-[#0070f3]/40 bg-[#0070f3]/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#8bbdff]"
            variants={itemVariants}
          >
            Beelix Solutions
          </motion.span>

          <motion.h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl" variants={itemVariants}>
            Engineering Intelligent Systems for IoT, Cloud, and Modern Software.
          </motion.h1>

          <motion.p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg" variants={itemVariants}>
            We design high-performance digital platforms that connect industrial devices, business operations, and cloud
            infrastructure into one resilient ecosystem.
          </motion.p>

          <motion.a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-[#0070f3]/50 bg-[#0070f3]/20 px-5 py-3 text-sm font-medium text-white shadow-glow transition hover:bg-[#0070f3]/30"
            variants={itemVariants}
          >
            Get Started
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </section>

      <section id="services" className="mt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[#66a6ff]">Services</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">What We Build</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section id="stack" className="mt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[#66a6ff]">Tech Stack</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Core Technologies</h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <div className="flex min-w-max animate-marquee items-center gap-10 px-6 py-4">
            {[...TECH_STACK, ...TECH_STACK].map((item, idx) => {
              const Icon = item.icon;

              return (
                <div key={`${item.name}-${idx}`} className="flex items-center gap-3 text-slate-200">
                  <Icon className="size-4 text-[#66a6ff]" />
                  <span className="text-sm tracking-wide">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="mt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[#66a6ff]">Projects</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Recent Work</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-white/10 bg-slate-900/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0070f3]/60"
            >
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-20 rounded-2xl border border-white/10 bg-slate-900/45 p-8">
        <h2 className="text-2xl font-semibold text-white">Let&apos;s build your next platform.</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us what you&apos;re building, and we&apos;ll map a delivery plan from architecture to launch.
        </p>
      </section>
    </main>
  );
}

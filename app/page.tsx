'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CloudCog,
  Cpu,
  Database,
  Layers,
  Smartphone,
  Wrench,
} from 'lucide-react';

import { ServiceCard, type ServiceCardProps } from '@/components/ui/service-card';

interface TechItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProjectItem {
  title: string;
  summary: string;
  tags: string[];
}

const SERVICES: ServiceCardProps[] = [
  {
    title: 'Software Development',
    description:
      'Custom web and mobile platforms built with clean architecture, robust APIs, and scalable user experiences.',
    icon: Smartphone,
  },
  {
    title: 'Industrial IoT Systems',
    description:
      'Predictive maintenance, telemetry pipelines, and real-time edge monitoring to optimize uptime and operations.',
    icon: Cpu,
  },
  {
    title: 'Cloud Architecture',
    description:
      'AWS-native infrastructure, DevOps automation, and observability for resilient, high-performance systems.',
    icon: CloudCog,
  },
];

const TECH_STACK: TechItem[] = [
  { label: 'React', icon: Layers },
  { label: 'NestJS', icon: Wrench },
  { label: 'AWS', icon: CloudCog },
  { label: 'Prisma', icon: Database },
];

const PROJECTS: ProjectItem[] = [
  {
    title: 'PredictiveOps Dashboard',
    summary: 'A telemetry-driven maintenance suite for industrial equipment with anomaly alerts and scheduling.',
    tags: ['IoT', 'Real-time Analytics', 'AWS'],
  },
  {
    title: 'Modular POS Platform',
    summary: 'A subscription-ready point-of-sale system with multitenancy, inventory sync, and reporting.',
    tags: ['SaaS', 'Payments', 'Prisma'],
  },
  {
    title: 'Cloud Control Center',
    summary: 'Unified infrastructure orchestration portal for deployments, cost insights, and uptime metrics.',
    tags: ['DevOps', 'FinOps', 'Observability'],
  },
];

const HERO_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const HERO_ITEM = {
  hidden: { opacity: 0, y: 18 },
  visible: {
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
    <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-20 pt-12 md:pt-20">
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 md:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <motion.div
          animate="visible"
          className="relative max-w-3xl"
          initial="hidden"
          variants={HERO_CONTAINER}
        >
          <motion.p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#66a6ff]" variants={HERO_ITEM}>
            Beelix Solutions
          </motion.p>
          <motion.h1 className="text-4xl font-bold leading-tight text-white md:text-6xl" variants={HERO_ITEM}>
            Engineering the Future of IoT, Cloud, and Full-Stack Software.
          </motion.h1>
          <motion.p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg" variants={HERO_ITEM}>
            We build mission-critical digital products that connect machines, teams, and cloud intelligence into one
            reliable ecosystem.
          </motion.p>
          <motion.a
            className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-[#0070f3]/50 bg-[#0070f3]/20 px-6 py-3 text-sm font-medium text-white shadow-[0_0_35px_rgba(0,112,243,0.35)] transition hover:bg-[#0070f3]/30"
            href="#contact"
            variants={HERO_ITEM}
          >
            Get Started
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </section>

      <section className="space-y-6" id="services">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[#66a6ff]">Services</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Focused Engineering Pillars</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="space-y-6" id="stack">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[#66a6ff]">Tech Stack</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Tools We Ship With</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 py-4">
          <div className="ticker-track flex min-w-max animate-marquee gap-8 px-6">
            {[...TECH_STACK, ...TECH_STACK].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={`${item.label}-${index}`} className="flex items-center gap-2 text-slate-200">
                  <Icon className="size-4 text-[#66a6ff]" />
                  <span className="text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-6" id="projects">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[#66a6ff]">Projects</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Selected Work</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:border-[#0070f3]/60"
            >
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-8" id="contact">
        <h2 className="text-2xl font-semibold text-white">Let&apos;s build your next platform.</h2>
        <p className="mt-3 text-slate-300">Share your roadmap and we&apos;ll architect the fastest path from idea to deployment.</p>
      </section>
    </main>
  );
}

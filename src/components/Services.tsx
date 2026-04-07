"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layers } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full-stack development",
    body: "End-to-end product engineering — APIs, data layers, and polished client experiences built for reliability and growth.",
  },
  {
    icon: Cpu,
    title: "AI integration",
    body: "LLMs, agents, and intelligent pipelines embedded responsibly into your stack, with observability and guardrails.",
  },
  {
    icon: Globe,
    title: "UI/UX strategy",
    body: "Research-informed interfaces and design systems that make complex capabilities feel effortless to operators and end users.",
  },
];

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const row = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-white/5 bg-slate-900/40 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Capabilities we bring to every engagement — whether you are launching
            a flagship product or hardening an existing platform.
          </p>
        </motion.div>

        <motion.ul
          className="grid gap-6 md:grid-cols-3"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map(({ icon: Icon, title, body }) => (
            <motion.li key={title} variants={row}>
              <div className="glass-panel flex h-full flex-col rounded-2xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-slate-200" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{body}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

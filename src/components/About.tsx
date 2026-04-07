"use client";

import { motion } from "framer-motion";
import { Shield, Target, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Professional standards",
    text: "We operate as a registered LLC with clear accountability, disciplined delivery, and transparent communication from discovery through launch.",
  },
  {
    icon: Target,
    title: "Reliability",
    text: "Systems are designed for uptime, maintainability, and measurable outcomes — not demos that fall apart under real traffic.",
  },
  {
    icon: Wrench,
    title: "Technical rigor",
    text: "Architecture reviews, testing discipline, and performance budgets are part of how we build, especially for data-heavy and AI-adjacent products.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            About Xethra
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Xethra is a high-end software development firm focused on deep-tech and
            AI-driven applications. We partner with teams that need more than
            surface-level builds — we engineer ecosystems where data, intelligence,
            and user experience work together at scale.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="glass-panel rounded-2xl p-7"
            >
              <p.icon className="mb-4 h-8 w-8 text-slate-300" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

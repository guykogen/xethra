"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const flagships = [
  {
    name: "Soundslikeme.org",
    url: "https://soundslikeme.org",
    tag: "Music-to-Personality",
    description:
      "A sophisticated web application that blends musicology with the Big Five personality framework to surface deep, actionable user insights. At its core is the Music-to-Personality engine — translating listening patterns into rich psychological profiles.",
  },
  {
    name: "Agent4socials.com",
    url: "https://agent4socials.com",
    tag: "Enterprise AI agents",
    description:
      "An enterprise-grade social automation platform that deploys AI agents to manage digital presence with persona-consistent messaging, scheduling, and engagement — built for scale and brand integrity.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative border-t border-white/5 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-2 flex items-center gap-2 text-sm font-medium text-sky-400/90">
            <Sparkles className="h-4 w-4" />
            Parent company
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Our flagships
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Xethra architects and ships production systems. These products showcase
            our depth in AI, behavioral modeling, and resilient full-stack delivery.
          </p>
        </motion.div>

        <ul className="grid gap-8 lg:grid-cols-2">
          {flagships.map((app, i) => (
            <motion.li
              key={app.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <article className="glass-panel group flex h-full flex-col rounded-2xl p-8 transition hover:border-white/15 hover:bg-white/[0.06]">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-300">
                    {app.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{app.name}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-slate-400">
                  {app.description}
                </p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition group-hover:text-white"
                >
                  Visit product
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </a>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

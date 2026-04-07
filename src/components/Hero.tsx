"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="gradient-mesh relative flex min-h-screen flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.85))]" />

      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400"
        >
          Xethra LLC · App development
        </motion.p>
        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Xethra: Engineering Next-Generation Digital Ecosystems
        </motion.h1>
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          An LLC dedicated to turning complex data into intuitive, high-performance
          applications — from deep-tech systems to AI-driven experiences.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/40 transition hover:bg-white"
          >
            View our flagships
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-sm transition hover:bg-white/10"
          >
            Let&apos;s build
          </a>
        </motion.div>
        <motion.a
          variants={item}
          href="#portfolio"
          className="mt-16 inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-500 transition hover:text-slate-300"
          aria-label="Scroll to portfolio"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}

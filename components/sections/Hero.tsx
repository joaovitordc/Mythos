"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SplineScene } from "@/components/ui/splite";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: "+15", label: "Projetos entregues" },
  { value: "98%", label: "Satisfação" },
  { value: "10x", label: "ROI médio" },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center px-8 lg:px-32">
      {/* Left column */}
      <div className="relative z-10 flex flex-col justify-center h-full w-full md:w-1/2">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex items-center gap-2 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
          <span className="text-[11px] text-white/60 tracking-[0.18em] uppercase font-medium">
            AI-Powered Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-white max-w-lg"
        >
          Transforme seu negócio com{" "}
          <span className="text-white/30 italic font-semibold">
            Inteligência Artificial
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-5 text-sm text-white/55 max-w-sm leading-relaxed"
        >
          Automação, sites, agentes e soluções personalizadas.
          <br />
          Uma plataforma. Zero complexidade.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8"
        >
          <a
            href={`https://wa.me/5527996158264?text=${encodeURIComponent("Olá! Gostaria de pedir um orçamento para soluções da Kairos.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="md" className="rounded-full px-7">
              Pedir um orçamento
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-14 flex items-center gap-10"
        >
          {stats.map((s, i) => (
            <div key={s.value}>
              {i > 0 && (
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-px h-5 bg-white/10" />
              )}
              <div className="relative">
                <p className="text-4xl font-bold text-white tracking-tight">{s.value}</p>
                <p className="text-[11px] text-white/40 mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right column — 3D Robot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute right-0 top-0 hidden md:block w-[55%] h-full"
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
}

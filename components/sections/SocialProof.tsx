"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "x", label: "ROI médio por cliente", prefix: "" },
  { value: 300, suffix: "%", label: "Crescimento em produtividade", prefix: "" },
  { value: 48, suffix: "h", label: "Tempo médio de implementação", prefix: "<" },
  { value: 98, suffix: "%", label: "Taxa de satisfação", prefix: "" },
];

function CountUp({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.5, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="py-28 px-8 lg:px-32 border-t border-white/5" id="results">
      <div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-white/45 mb-3">
            Resultados
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Números que falam
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black p-8 flex flex-col gap-2"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

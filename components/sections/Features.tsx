"use client";

import { motion } from "framer-motion";

const checkpoints = [
  "Sites e Landing Pages no Estado da Arte do Desenvolvimento Web",
  "Agentes de IA Personalizados Para Automatizar Operações",
  "Sistemas Completos Para Unificar Toda a Empresa",
];

export default function Features() {
  return (
    <section className="py-28 px-8 lg:px-32 border-t border-white/5" id="about">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — heading + checkmarks */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-4">
              A empresa
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
              Engenharia de Ponta
              <br />
              <span className="text-white/35 italic font-semibold">
                + Inteligência Artificial
              </span>
            </h2>

            <div className="flex flex-col gap-4">
              {checkpoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — description */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <p className="text-white/50 text-sm leading-[1.85]">
              A <span className="text-white font-medium">Mythos AI Solutions</span> constrói
              experiências digitais de nível mundial. Utilizamos as tecnologias mais avançadas
              do mercado para criar sites ultrarrápidos, esteticamente impecáveis e otimizados
              para conversão.
            </p>
            <p className="text-white/50 text-sm leading-[1.85]">
              Combinamos esse nível de execução com agentes de IA sob medida e sistemas
              integrados que eliminam processos manuais e escalam operações.
            </p>
            <p className="text-white/70 text-sm leading-[1.85] border-l-2 border-white/15 pl-4 italic">
              Transformamos o poder da inteligência artificial em resultados reais para o seu negócio.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

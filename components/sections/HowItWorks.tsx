"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Conversa de 30 min para entender seu negócio, processos atuais e onde a IA/automação pode gerar mais impacto. Sem compromisso, sem enrolação.",
  },
  {
    number: "02",
    title: "Proposta técnica",
    description:
      "Entregamos escopo detalhado com solução proposta, stack tecnológica, cronograma e investimento. Você sabe exatamente o que vai receber.",
  },
  {
    number: "03",
    title: "Desenvolvimento e entrega",
    description:
      "Kickoff, desenvolvimento ágil com entregas incrementais, testes e treinamento da equipe. Você acompanha tudo em tempo real.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-8 lg:px-32 border-t border-white/5" id="how-it-works">
      <div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-4">
            Como funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
            Desenvolvemos a infraestrutura inteligente{" "}
            <span className="text-white/35 italic font-semibold">
              que seu negócio precisa para escalar.
            </span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-lg">
            Combinamos desenvolvimento de ponta, design estratégico e IA generativa para criar
            sistemas que eliminam processos manuais, unificam operações e entregam crescimento
            mensurável.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-white/[0.06]" />
              )}

              <span className="text-white/25 font-mono text-5xl font-bold leading-none mb-6 block">{step.number}</span>
              <h3 className="text-base font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

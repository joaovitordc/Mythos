"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Sites e Landing Pages de Alta Performance",
    description:
      "Desenvolvimento web de nível mundial. Next.js 14, animações 3D, performance brutal (100/100 PageSpeed). Design que converte, código limpo, SEO avançado.",
    includes: [
      "Landing pages otimizadas",
      "Sites institucionais",
      "E-commerce",
      "Analytics completo",
      "Hospedagem edge",
    ],
  },
  {
    number: "02",
    title: "Agentes de IA Personalizados",
    description:
      "Assistentes inteligentes que automatizam vendas, atendimento e processos. Trabalham 24/7 no WhatsApp, site ou internamente.",
    includes: [
      "Qualificação de leads",
      "Atendimento automático",
      "Análise de dados",
      "Treinamento com sua base de conhecimento",
    ],
  },
  {
    number: "03",
    title: "Automação Completa de Workflows",
    description:
      "Conecte todas as ferramentas do seu negócio e elimine trabalho manual. Do lead ao pós-venda, tudo roda sozinho.",
    includes: [
      "Integrações entre sistemas",
      "Webhooks customizados",
      "APIs",
      "Automações com IA",
      "Notificações inteligentes",
    ],
  },
  {
    number: "04",
    title: "Sistemas Completos de Gestão",
    description:
      "Plataforma única que centraliza vendas, estoque, financeiro e produção. Seu negócio inteiro em um lugar.",
    includes: [
      "Dashboard executivo",
      "CRM/Pipeline",
      "Controle de estoque",
      "Financeiro",
      "Emissão de NF-e",
      "Integrações com marketplaces",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-28 px-8 lg:px-32 border-t border-white/5" id="services">
      <div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-3">
            Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl leading-tight">
            O que a Mythos
            <br />
            <span className="text-white/35 italic font-semibold">pode entregar</span>
          </h2>
        </motion.div>

        {/* List */}
        <div className="divide-y divide-white/[0.06]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group py-10 grid grid-cols-1 md:grid-cols-[6rem_1fr_auto] gap-y-4 gap-x-10 items-start"
            >
              {/* Number */}
              <span className="text-white/25 font-mono text-5xl font-bold leading-none">
                {service.number}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-lg mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.includes.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] border border-white/10 text-white/45 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity pt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/40">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

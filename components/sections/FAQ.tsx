"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Como a Mythos AI pode ajudar o meu negócio?",
    answer:
      "Podemos economizar centenas de horas de trabalho manual para sua equipe, automatizando tarefas repetitivas e tediosas, como prospecção outbound, atendimento ao cliente e criação de conteúdo. Ao implementar essas soluções, não apenas aumentamos a eficiência, mas também liberamos sua equipe para se concentrar em atividades mais estratégicas e criativas, gerando resultados ainda mais impactantes.",
  },
  {
    question: "Quanto tempo leva para criar meu projeto?",
    answer:
      "Normalmente, nossas soluções são totalmente implementadas em até 7 dias, englobando todo o processo de desenvolvimento e integração. Com uma abordagem ágil e eficiente, garantimos que sua equipe possa começar a se beneficiar das melhorias rapidamente, sem comprometer a qualidade ou a precisão das entregas.",
  },
  {
    question: "Qual a minha garantia?",
    answer:
      "Oferecemos 30 dias de garantia após a implementação da sua solução de IA, com reembolso total caso você não esteja completamente satisfeito com os resultados obtidos. Queremos garantir que sua experiência seja positiva e que os benefícios da nossa solução atendam plenamente às suas expectativas.",
  },
  {
    question: "Como vocês criam suas soluções?",
    answer:
      "Passamos pelo processo de planejamento e escopo do projeto com nosso time de desenvolvedores profissionais e levamos o projeto para plataformas de integração de sistemas e IA, garantindo qualidade técnica em cada etapa.",
  },
  {
    question: "Como nos comunicamos?",
    answer:
      "Para a maioria das empresas, nossa comunicação será feita diretamente pelo WhatsApp. Além disso, oferecemos suporte contínuo para acompanhar atualizações, resolver possíveis gargalos e garantir que o progresso esteja sempre em linha com os objetivos estabelecidos.",
  },
  {
    question: "E se algo der errado com a automação?",
    answer:
      "Seremos notificados imediatamente sempre que ocorrer algum problema no sistema e resolveremos rapidamente, garantindo que a operação continue funcionando sem interrupções.",
  },
  {
    question: "Preciso de conhecimentos técnicos para usar os sistemas?",
    answer:
      "Não. Temos um processo de entrega transparente que instrui o seu time a utilizar os sistemas que entregamos, sem precisar saber programar ou investir dezenas de horas para aprender novas ferramentas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 px-8 lg:px-32 border-t border-white/5" id="faq">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Perguntas frequentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-white/[0.06]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-6 group"
              >
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-relaxed">
                  {faq.question}
                </span>
                <span className="shrink-0 w-5 h-5 rounded-full border border-white/15 flex items-center justify-center text-white/30 group-hover:border-white/30 transition-colors">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                  >
                    <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-white/55 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

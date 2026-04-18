"use client";

import { motion } from "framer-motion";

const nav = [
  { label: "Home", href: "#" },
  { label: "A empresa", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const termos = [
  { label: "Política de privacidade", href: "/security#privacidade" },
  { label: "Política de segurança", href: "/security" },
  { label: "Termos de uso", href: "#" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5527996158264",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-8 lg:px-32">
      {/* Main grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 md:gap-16"
      >
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <span className="text-white font-semibold text-base tracking-tight">
            Kairos
          </span>
          <p className="text-sm text-white/50 leading-relaxed">
            Engenharia de software e inteligência artificial. Criadora do EllO ERP.
          </p>
          <a
            href="mailto:contato@kairos.com.br"
            className="text-sm text-white/55 hover:text-white/80 transition-colors"
          >
            contato@kairos.com.br
          </a>
        </div>

        {/* Navegação */}
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-white/40 mb-5">
            Navegação
          </p>
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/60 hover:text-white/90 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Termos */}
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-white/40 mb-5">
            Termos
          </p>
          <ul className="flex flex-col gap-3">
            {termos.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-white/60 hover:text-white/90 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-white/40 mb-5">
            Redes
          </p>
          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/55 hover:border-white/40 hover:text-white/80 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
        <span>© 2026 Kairos. Todos os direitos reservados.</span>
        <span className="hidden md:block">CNPJ: 00.000.000/0001-00</span>
      </div>
    </footer>
  );
}

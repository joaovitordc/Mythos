"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const links = [
  { label: "A empresa", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-32 py-5 flex items-center justify-between"
    >
      {/* Logo */}
      <a href="#" className="text-white font-semibold text-base tracking-tight">
        Mythos
      </a>

      {/* Links */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-white/50 hover:text-white/90 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href={`https://wa.me/5527996158264?text=${encodeURIComponent("Olá! Gostaria de pedir um orçamento para soluções da Mythos AI.")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="sm" className="rounded-full">
          Pedir orçamento
        </Button>
      </a>
    </motion.header>
  );
}

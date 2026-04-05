"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com backend / Resend / etc.
    setSubmitted(true);
  };

  return (
    <section className="py-28 px-8 lg:px-32 border-t border-white/5" id="contact">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-white/45 mb-3">
            Contato
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Vamos conversar
          </h2>
          <p className="text-white/55 max-w-sm mx-auto">
            Conte sobre seu projeto. Respondemos em menos de 24 horas.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl mx-auto mb-4">
              ✓
            </div>
            <p className="text-white font-medium">Mensagem enviada!</p>
            <p className="text-white/55 text-sm mt-1">Retornamos em breve.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/55">Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/55">Email</label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/55">Projeto</label>
              <textarea
                required
                rows={4}
                placeholder="Descreva brevemente o que você precisa..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>
            <Button size="lg" className="mt-2 w-full">
              Enviar mensagem
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

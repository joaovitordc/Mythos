"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, borderColor: "rgba(255,255,255,0.2)" } : undefined}
      transition={{ duration: 0.2 }}
      className={`bg-[#0f0f0f] border border-white/8 rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

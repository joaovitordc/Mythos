"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 cursor-pointer select-none";

    const variants = {
      primary:
        "bg-white text-black hover:bg-gray-200 active:scale-[0.98]",
      secondary:
        "bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5 active:scale-[0.98]",
      ghost:
        "bg-transparent text-white/70 hover:text-white active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
      md: "px-6 py-3 text-sm rounded-xl gap-2",
      lg: "px-8 py-4 text-base rounded-xl gap-2",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;

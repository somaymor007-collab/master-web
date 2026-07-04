"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { HTMLMotionProps } from "framer-motion";

interface PremiumCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function PremiumCard({
  className,
  children,
  hoverEffect = true,
  ...props
}: PremiumCardProps) {

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass-card rounded-[24px] p-8 overflow-hidden relative group",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

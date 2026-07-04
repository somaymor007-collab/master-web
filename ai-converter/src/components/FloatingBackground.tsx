"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingBackground() {
  const [mounted, setMounted] = useState(false);

  const [particles, setParticles] = useState<Array<{
    opacity: number, x: number, y: number, scale: number,
    targetY: number, duration: number
  }>>([]);

  useEffect(() => {
    setMounted(true);
    // Move random generation to client-side effect to fix react-hooks/purity errors
    const generatedParticles = [...Array(20)].map(() => ({
      opacity: Math.random() * 0.5 + 0.1,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      scale: Math.random() * 0.5 + 0.5,
      targetY: Math.random() * -500,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-1000" />

      {/* Animated Gradient Meshes */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />

      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-20%", "20%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-violet-500/10 dark:bg-violet-600/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: p.opacity,
            x: p.x,
            y: p.y,
            scale: p.scale,
          }}
          animate={{
            y: [null, p.targetY],
            opacity: [null, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-2 h-2 rounded-full bg-neutral-500/20 dark:bg-neutral-400/20"
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-20 opacity-40" />
    </div>
  );
}

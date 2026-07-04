"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, MonitorPlay } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedButton } from "../AnimatedButton";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-4 border-b border-white/20 dark:border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/25 transition-all">
             <MonitorPlay size={20} className="group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">AI Converter</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-neutral-600 dark:text-neutral-400">
          <Link href="#features" className="hover:text-black dark:hover:text-white transition-colors">Features</Link>
          <Link href="#formats" className="hover:text-black dark:hover:text-white transition-colors">Formats</Link>
          <Link href="/dashboard" className="hover:text-black dark:hover:text-white transition-colors">Dashboard</Link>
          <Link href="/editor" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
             AI Editor <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full">NEW</span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <Link href="/dashboard">
            <AnimatedButton size="sm">Get Started</AnimatedButton>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

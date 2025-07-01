"use client";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Evita hidratação incorreta
  if (!mounted) {
    return (
      <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 border border-gray-700 dark:border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
      aria-label={`Mudar para modo ${theme === "light" ? "escuro" : "claro"}`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <MoonIcon className="w-5 h-5 text-blue-400" />
        ) : (
          <SunIcon className="w-5 h-5 text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  );
} 
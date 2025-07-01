"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import MenuItem from "./menu-items";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Projetos", href: "#work" },
  { name: "Skills", href: "#skills" },
  // { name: "Experiência", href: "#experience" },
  { name: "Contato", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/DGTJS",
  linkedin: "https://www.linkedin.com/in/diego-martins7",
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 ${
        isScrolled
          ? "backdrop-blur-2xl bg-gray-900/90 shadow-2xl shadow-cyan-500/10"
          : "backdrop-blur-lg bg-transparent"
      } transition-all duration-300 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="font-bold absolute inset-[2px] text-white bg-gray-900 rounded-full flex items-center justify-center">
                DM
              </div>
            </div>
            <motion.h1
              className={`text-xl font-bold ${
                isScrolled ? "text-white" : "text-white/90"
              } transition-all duration-300 ease-out`}
            >
              Diego Martins
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700 shadow-lg">
              {navItems.map((item, i) => (
                <MenuItem key={item.name} index={i} href={item.href}>
                  <span className="text-gray-300 font-medium hover:text-cyan-400 transition-colors">
                    {item.name}
                  </span>
                </MenuItem>
              ))}
            </div>

            <div className="h-6 w-px bg-gray-600 mx-2" />

            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <FaGithub className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <FaLinkedin className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/70 transition-all duration-300"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-300" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 pb-6 space-y-4 flex flex-col items-center"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-700 flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <FaGithub className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <FaLinkedin className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

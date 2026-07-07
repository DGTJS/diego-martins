import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  index: number;
  href: string;
}

export default function MenuItem({ children, index, href }: MenuItemProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        delay: index * 0.08,
        duration: 0.28,
        ease: "easeOut",
      }}
      className="relative overflow-hidden px-2 py-1 text-sm font-medium text-slate-300 transition-colors hover:text-zinc-100"
    >
      {children}
    </motion.a>
  );
}

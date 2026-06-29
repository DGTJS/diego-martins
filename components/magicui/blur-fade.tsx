"use client";

import { motion } from "framer-motion";

type BlurFadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 8,
}: BlurFadeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(6px)",
        y: yOffset,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

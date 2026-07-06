"use client";
import {
  AnimatePresence,
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { type ReactNode, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type FloatingDockItem = {
  title: string;
  icon: ReactNode;
  href: string;
  external?: boolean;
};

type FloatingDockProps = {
  items: readonly FloatingDockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
};

/**
 * Use position fixed according to your needs.
 * Desktop navbar is better positioned at the bottom.
 * Mobile navbar is better positioned at bottom right.
 */
export function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) {
  return (
    <FloatingDockDesktop
      items={items}
      className={cn(desktopClassName, mobileClassName)}
    />
  );
}

function FloatingDockDesktop({
  items,
  className,
}: {
  items: readonly FloatingDockItem[];
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed left-1/2 bottom-0 z-50 block -translate-x-1/2 px-2 pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        className,
      )}
    >
      <div className="theme-surface-strong flex h-16 w-fit max-w-[calc(100vw-1rem)] origin-bottom scale-[0.88] items-end gap-2 overflow-visible rounded-[30px] border border-white/10 px-3 pb-3 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-3xl sm:scale-100 sm:gap-4 sm:px-4">
        {items.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </div>
    </motion.div>
  );
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  external,
}: {
  mouseX: MotionValue;
  title: string;
  icon: ReactNode;
  href: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return value - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="relative"
    >
      <motion.div
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full border border-cyan-400/10 bg-[#0f172a] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        <AnimatePresence>
          {hovered ? (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-cyan-400/20 bg-[#020617] px-2 py-0.5 text-xs text-slate-100 shadow-lg"
            >
              {title}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          <span className="text-cyan-200">{icon}</span>
        </motion.div>
      </motion.div>
    </a>
  );
}

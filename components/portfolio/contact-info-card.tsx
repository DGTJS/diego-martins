"use client";

import { motion } from "framer-motion";

import type { ContactDetail } from "@/app/data/types";
import { cn } from "@/lib/utils";
import { SurfacePanel } from "./surface-panel";

interface ContactInfoCardProps {
  item: ContactDetail;
  index: number;
}

export function ContactInfoCard({ item, index }: ContactInfoCardProps) {
  const Icon = item.icon;
  const iconClassName = cn("h-5 w-5 shrink-0", item.iconClassName ?? "text-zinc-100");
  const content = (
    <SurfacePanel className="p-6">
      <div className="flex items-center gap-4">
        <SurfacePanel
          variant="subtle"
          interactive={false}
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
        >
          <Icon className={iconClassName} />
        </SurfacePanel>
        <div>
          <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
          <p className="text-sm text-slate-300">{item.value}</p>
        </div>
      </div>
    </SurfacePanel>
  );

  if (!item.href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        whileHover={{ scale: 1.015 }}
        className="block w-full max-w-sm"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ scale: 1.015 }}
      className="block w-full max-w-sm"
    >
      {content}
    </motion.a>
  );
}

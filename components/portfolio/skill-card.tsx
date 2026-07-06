"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { Skill } from "@/app/data/types";
import { SurfacePanel } from "./surface-panel";

interface SkillCardProps {
  skill: Skill;
  categoryIndex: number;
  skillIndex: number;
}

function isRemoteSkillIcon(icon: Skill["icon"]): icon is string {
  return typeof icon === "string";
}

export function SkillCard({
  skill,
  categoryIndex,
  skillIndex,
}: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: categoryIndex * 0.08 + skillIndex * 0.06,
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="mx-auto w-full max-w-xs cursor-pointer"
    >
      <SurfacePanel className="h-full p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <SurfacePanel
            variant="subtle"
            interactive={false}
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl"
          >
            {isRemoteSkillIcon(skill.icon) ? (
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain"
              />
            ) : (
              <Icon size={42} />
            )}
          </SurfacePanel>

          <div className="w-full space-y-3">
            <div>
              <h4 className="text-lg font-semibold" style={{ color: skill.color }}>
                {skill.name}
              </h4>
              <p className="text-sm text-slate-400">
                {skill.experience} de experiência
              </p>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.9,
                  delay: categoryIndex * 0.08 + skillIndex * 0.06 + 0.2,
                  ease: "easeOut",
                }}
              />
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {skill.level}% de proficiência
            </p>
          </div>
        </div>
      </SurfacePanel>
    </motion.article>
  );
}

"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/app/data/skills";
import { SurfacePanel } from "./portfolio/surface-panel";

import { SectionHeading } from "./portfolio/section-heading";
import { SectionShell } from "./portfolio/section-shell";
import { SkillCard } from "./portfolio/skill-card";

export default function Skills() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Competências"
        title="Minhas Habilidades"
        description="Tecnologias e ferramentas que uso para transformar ideias em interfaces consistentes, produtos funcionais e experiências bem construídas."
      />

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: categoryIndex * 0.12 }}
            className="space-y-8"
          >
            <h3 className="text-center text-2xl font-semibold text-white">
              {category.name}
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  categoryIndex={categoryIndex}
                  skillIndex={skillIndex}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.45 }}
        className="mt-20"
      >
        <SurfacePanel
          variant="strong"
          interactive={false}
          className="bg-gradient-to-r from-cyan-500/10 via-white/5 to-sky-500/10 p-8 text-center"
        >
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Sempre aprendendo
            </h3>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Estou constantemente explorando novas tecnologias e metodologias
              para manter o trabalho atualizado, consistente e preparado para
              escalar com segurança.
            </p>
        </SurfacePanel>
      </motion.div>
    </SectionShell>
  );
}

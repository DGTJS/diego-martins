"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import projects from "@/app/data/project";
import { ActionButton } from "./portfolio/action-button";

import { ProjectCard } from "./portfolio/project-card";
import { SectionHeading } from "./portfolio/section-heading";
import { SectionShell } from "./portfolio/section-shell";

export default function Main() {
  return (
    <SectionShell id="work">
      <SectionHeading
        eyebrow="Projetos"
        title="Meus Projetos"
        description="Uma seleção dos trabalhos mais recentes, com foco em interface, estrutura de código e soluções que conectam experiência visual com entrega técnica."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-10 flex justify-center sm:mt-16 md:mt-20"
      >
        <ActionButton asChild className="px-8">
          <a href="https://github.com/DGTJS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Ver todos os projetos
            <FaGithub className="h-5 w-5" />
          </a>
        </ActionButton>
      </motion.div>
    </SectionShell>
  );
}

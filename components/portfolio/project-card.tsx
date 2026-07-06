"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import type { Project } from "@/app/data/types";
import { cn } from "@/lib/utils";
import { Chip } from "./chip";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const shouldPrioritize = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className={cn(
        "theme-surface-strong theme-surface-interactive group relative overflow-hidden rounded-3xl shadow-2xl shadow-black/10",
        className,
      )}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={shouldPrioritize}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="theme-button-icon"
            aria-label={`Abrir ${project.title} ao vivo`}
          >
            <FaExternalLinkAlt className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="theme-button-icon"
            aria-label={`Abrir código de ${project.title}`}
          >
            <FaGithub className="h-4 w-4" />
          </motion.a>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-100">
              {project.title}
            </h3>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Projeto em destaque
            </p>
          </div>
          <ArrowUpRightIcon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-300" />
        </div>

        <p className="text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="space-y-3">
          <h4 className="theme-section-eyebrow">Principais features</h4>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <Chip key={feature} className="text-xs">
                {feature}
              </Chip>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="theme-section-eyebrow">Tecnologias</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => {
              const TechIcon = tech.icon;

              return (
                <Chip
                  key={tech.name}
                  icon={TechIcon}
                  iconColor={tech.color}
                >
                  {tech.name}
                </Chip>
              );
            })}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

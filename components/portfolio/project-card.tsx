"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import type { Project } from "@/app/data/types";
import { ActionButton } from "./action-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Chip } from "./chip";
import { cn } from "@/lib/utils";

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
      className={cn("group relative", className)}
    >
      <Card className="theme-surface-strong theme-surface-interactive overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/10 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={shouldPrioritize}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

          <div className="absolute left-4 top-4 max-w-[70%] truncate rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
            {project.title}
          </div>
        </div>

        <CardHeader className="flex flex-col gap-4 p-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">
              Projeto em destaque
            </p>
            <CardTitle className="text-2xl font-semibold text-white sm:text-3xl">
              {project.title}
            </CardTitle>
          </div>
          <CardDescription className="text-sm leading-7 text-slate-300">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 px-6 pb-6">
          <div className="flex flex-col gap-3">
            <h4 className="theme-section-eyebrow">Tecnologias</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => {
                const TechIcon = tech.icon;

                return (
                  <Chip key={tech.name} icon={TechIcon}>
                    {tech.name}
                  </Chip>
                );
              })}
            </div>
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0">
          <ActionButton asChild variant="secondary" className="w-full justify-center">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2"
              aria-label={`Abrir projeto ${project.title} no GitHub`}
            >
              <FaGithub className="h-4 w-4" />
              Ver Projeto
            </motion.a>
          </ActionButton>
        </CardFooter>
      </Card>
    </motion.article>
  );
}

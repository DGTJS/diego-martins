"use client";

import { BriefcaseBusiness, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import { FloatingDock } from "@/components/ui/floating-dock";

const dockItems = [
  {
    title: "Skills",
    href: "#skills",
    icon: <Sparkles className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  },
  {
    title: "Projetos",
    href: "#work",
    icon: (
      <BriefcaseBusiness className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Contato",
    href: "#contact",
    icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  },
  {
    title: "Github",
    href: "https://github.com/DGTJS",
    icon: <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    external: true,
  },
  {
    title: "Linkedin",
    href: "https://linkedin.com/in/diego-martins7",
    icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    external: true,
  },
] as const;

export default function Navbar() {
  return <FloatingDock items={dockItems} />;
}

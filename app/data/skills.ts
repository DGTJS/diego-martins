import { TbApi } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";

import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
        level: 85,
        experience: "2 anos",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        color: "#38BDF8",
        level: 75,
        experience: "1,6 anos",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#CCCCCC",
        level: 85,
        experience: "1,6 anos",
      },
      {
        name: "Shadcn-ui",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@15.6.0/icons/shadcnui.svg",
        color: "#3178C6",
        level: 70,
        experience: "1 anos",
      },
      {
        name: "Figma",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
        color: "#FFFFFF",
        level: 45,
        experience: "1 ano",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6",
        level: 60,
        experience: "1,6 anos",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
        level: 80,
        experience: "3 anos",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933",
        level: 75,
        experience: "2 anos",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        color: "#FFFFFF",
        level: 15,
        experience: "4 meses",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "#FFFFFF",
        level: 15,
        experience: "4 meses",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#F7DF1E",
        level: 15,
        experience: "4 meses",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
        level: 75,
        experience: "1 ano",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#336791",
        level: 70,
        experience: "1,5 ano",
      },
      {
        name: "JSON",
        icon: VscJson,
        color: "#F7DF1E",
        level: 90,
        experience: "2 anos",
      },
      {
        name: "REST API",
        icon: TbApi,
        color: "#FFFFFF",
        level: 90,
        experience: "2 anos",
      },
    ],
  },
  {
    name: "Ferramentas",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#F05032",
        level: 80,
        experience: "2,5 anos",
      },
      {
        name: "Codex",
        icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/codex-color.png",
        color: "#3178C6",
        level: 55,
        experience: "8 meses",
      },
      {
        name: "Claude Code",
        icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/claude-color.png",
        color: "#F05212",
        level: 45,
        experience: "8 meses",
      },
      {
        name: "GitHub",
        icon: "https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/Github_white.png",
        color: "#CCCCCC",
        level: 85,
        experience: "2,5 anos",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "#2496ED",
        level: 60,
        experience: "6 meses",
      },
      {
        name: "n8n",
        icon: "https://n8n.io/brandguidelines/logo-white.svg",
        color: "#E63946",
        level: 60,
        experience: "4 meses",
      },
    ],
  },
];

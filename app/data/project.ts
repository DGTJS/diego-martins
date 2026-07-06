import { FaNode, FaReact, FaJs, FaCss3, FaHtml5, FaRobot } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiShadcnui,
  SiPrisma,
  SiBetterauth,
} from "react-icons/si";

import type { Project } from "./types";

const projects: Project[] = [
  {
    id: "navatus",
    title: "Navatus",
    description:
      "SaaS de agendamento de horários para barbearias multi-tenant, desenvolvido com apoio do Codex usando Next.js, TypeScript e PostgreSQL.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#0070F3" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#0070F3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#1572B6" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
      { name: "Prisma", icon: SiPrisma, color: "#000000" },
      { name: "Better Auth", icon: SiBetterauth, color: "#000000" },
    ],
    image: "/projects/navatus.jpeg",
    liveUrl: "https://app.navatus.com.br",
    githubUrl: "https://github.com/DGTJS/BarberPortfolio",
    features: [
      "Agendamento de horários",
      "Interface intuitiva",
      "Responsivo",
      "Consumo de API externa",
      "Autenticação de usuários",
      "Cadastro de usuários",
      "Sistema multi-tenant",
      "Sistema de assinaturas",
    ],
  },
  {
    id: "barbearia-sistema",
    title: "Sistema de Barbearia",
    description:
      "Projeto para agendamento de horários em barbearias com chat por IA, utilizando Next.js, TypeScript e PostgreSQL.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#0070F3" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#0070F3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#1572B6" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
      { name: "Prisma", icon: SiPrisma, color: "#000000" },
      { name: "Better Auth", icon: SiBetterauth, color: "#000000" },
      { name: "AI", icon: FaRobot, color: "#000000" },
    ],
    image: "/projects/barbeariaSistema.jpeg",
    liveUrl: "https://barber-portfolio-ruby.vercel.app/",
    githubUrl: "https://github.com/DGTJS/BarberPortfolio",
    features: [
      "Agendamento de horários",
      "Chat com IA",
      "Interface intuitiva",
      "Responsivo",
      "Consumo de API externa",
      "Autenticação de usuários",
      "Cadastro de usuários",
    ],
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "Um projeto simples de gerenciamento de tarefas desenvolvido para portfólio, com foco em boas práticas de desenvolvimento full stack.",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "MongoDB", icon: SiMongodb, color: "#339933" },
      { name: "Node.js", icon: FaNode, color: "#339933" },
    ],
    image: "/projects/taskManager.jpeg",
    liveUrl: "https://task-manager-frontend-teal-beta.vercel.app/",
    githubUrl: "https://github.com/DGTJS/Task-manager-frontend",
    features: [
      "Adicionar tarefas",
      "Excluir tarefas",
      "Marcar tarefas como concluídas",
      "Atualização em tempo real",
      "API RESTful",
    ],
  },
  {
    id: "weather-app",
    title: "Sistema de previsão do tempo",
    description:
      "Um sistema de previsão do tempo desenvolvido para portfólio, que estou aprimorando aos poucos com fundamentos sólidos de JavaScript.",
    tech: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
    image: "/projects/OpenWeatherPortfolio.jpeg",
    liveUrl: "https://weather-app-example.com/",
    githubUrl: "https://github.com/DGTJS/PraticandoPort",
    features: [
      "Consulta de previsão do tempo por cidade",
      "Exibição de temperatura atual e previsão estendida",
      "Interface responsiva e intuitiva",
      "Consumo de API externa",
    ],
  },
];

export default projects;
export { projects };

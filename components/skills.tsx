"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const skillCategories = [
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
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#cccccc",
        level: 85,
        experience: "1.5 anos",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6",
        level: 80,
        experience: "1.5 anos",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
        level: 90,
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
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
        level: 75,
        experience: "1 anos",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#336791",
        level: 70,
        experience: "1.5 ano",
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
        experience: "2.5 anos",
      },
      {
        name: "GitHub",
        icon: "https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/Github_white.png",
        color: "#cccccc",
        level: 85,
        experience: "2.5 anos",
      },
      // {
      //   name: "Docker",
      //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      //   color: "#2496ED",
      //   level: 60,
      //   experience: "6 meses"
      // }
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-20 md:py-32 px-2 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Minhas Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          <p className="text-gray-300 text-center mt-6 max-w-2xl">
            Tecnologias e ferramentas que utilizo para criar soluções inovadoras
            e eficientes.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.1,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="cursor-pointer max-w-xs w-full mx-auto"
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-cyan-500/30 transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center gap-4">
                          {/* Skill Icon */}
                          <div className="relative">
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={60}
                              height={60}
                              className="object-contain"
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                              }}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </div>

                          {/* Skill Info */}
                          <div className="w-full">
                            <h4
                              className="text-lg font-semibold mb-2"
                              style={{ color: skill.color }}
                            >
                              {skill.name}
                            </h4>

                            <p className="text-gray-400 text-sm mb-3">
                              {skill.experience} de experiência
                            </p>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                              <motion.div
                                className="h-2 rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay:
                                    categoryIndex * 0.1 +
                                    skillIndex * 0.1 +
                                    0.3,
                                  ease: "easeOut",
                                }}
                              />
                            </div>

                            <p className="text-xs text-gray-500">
                              {skill.level}% de proficiência
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Sempre Aprendendo
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Estou constantemente explorando novas tecnologias e metodologias
                para manter-me atualizado com as melhores práticas do mercado.
                Atualmente focado em cloud computing, DevOps e arquiteturas
                escaláveis.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

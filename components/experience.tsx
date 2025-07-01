"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { CalendarIcon, MapPinIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    title: "Desenvolvedor Full Stack Jr",
    company: "Tech Solutions",
    location: "São Paulo, SP",
    period: "2023 - Presente",
    description: "Desenvolvimento de aplicações web modernas usando React, Node.js e TypeScript. Trabalho em equipe com metodologias ágeis.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Git"],
    type: "Tempo Integral"
  },
  {
    title: "Estagiário de Desenvolvimento",
    company: "Startup Inovadora",
    location: "Remoto",
    period: "2022 - 2023",
    description: "Participação no desenvolvimento de features para aplicação mobile usando React Native. Integração com APIs REST.",
    technologies: ["React Native", "JavaScript", "Firebase", "Git"],
    type: "Estágio"
  },
  {
    title: "Projetos Freelance",
    company: "Autônomo",
    location: "Remoto",
    period: "2021 - Presente",
    description: "Desenvolvimento de sites e aplicações web para clientes diversos. Foco em UX/UI e performance.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Figma"],
    type: "Freelance"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Experiência Profissional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          <p className="text-gray-300 text-center mt-6 max-w-2xl">
            Minha jornada profissional em desenvolvimento de software, 
            sempre buscando aprender novas tecnologias e metodologias.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-600" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900 z-10" />
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-cyan-400 mb-2">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                          {experience.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600 hover:bg-gray-700 hover:border-cyan-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
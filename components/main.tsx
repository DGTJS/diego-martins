'use client';
import { motion } from "framer-motion";
import { FaNode, FaReact, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiD3Dotjs, SiFirebase, SiGraphql, SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const projects = [
    {
        title: "E-commerce Platform",
        description: "Plataforma de e-commerce moderna com carrinho de compras, sistema de pagamentos e painel administrativo completo. Desenvolvida com foco em performance e experiência do usuário.",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
        image: '/projects/ecommerce.png',
        liveUrl: "https://ecommerce-demo.com",
        githubUrl: "https://github.com/DGTJS/ecommerce",
        features: ["Carrinho de compras", "Sistema de pagamentos", "Painel admin", "Responsivo"]
    },
    {
        title: "Analytics Dashboard",
        description: "Dashboard de analytics em tempo real com visualizações interativas de dados. Inclui gráficos dinâmicos, filtros avançados e exportação de relatórios.",
        tech: [
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "D3.js", icon: SiD3Dotjs, color: "#F9A03C" },
            { name: "Node.js", icon: FaNode, color: "#339933" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
        ],
        image: '/projects/analytics.jpg',
        liveUrl: "https://analytics-demo.com",
        githubUrl: "https://github.com/DGTJS/analytics",
        features: ["Gráficos interativos", "Tempo real", "Exportação PDF", "Filtros avançados"]
    },
    {
        title: "Mobile Application",
        description: "Aplicativo mobile cross-platform para rastreamento de saúde e fitness. Inclui monitoramento de atividades, metas personalizadas e sincronização em nuvem.",
        tech: [
            { name: "React Native", icon: FaReact, color: "#61DAFB" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
        ],
        image: '/projects/mobile.jpg',
        liveUrl: "https://mobile-app-demo.com",
        githubUrl: "https://github.com/DGTJS",
        features: ["Cross-platform", "Sincronização", "Offline mode", "Push notifications"]
    },
];

export default function Main() {
    return (
        <section className="py-12 sm:py-20 md:py-32 relative" id="work">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-10 sm:mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        Meus Projetos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                    <p className="text-gray-300 text-center mt-6 max-w-2xl">
                        Uma seleção dos meus projetos mais recentes, demonstrando 
                        habilidades em desenvolvimento full-stack e design de interfaces.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 max-w-xs w-full mx-auto"
                        >
                            {/* Image Section */}
                            <motion.div
                                className="h-48 relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                
                                {/* Project Links */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4 text-white" />
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                                    >
                                        <FaGithub className="w-4 h-4 text-white" />
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRightIcon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Principais Features:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {project.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Tecnologias:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, j) => {
                                            const IconComponent = tech.icon;
                                            return (
                                                <span
                                                    key={j}
                                                    className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm border border-gray-600 hover:bg-gray-700 hover:border-cyan-500/50 transition-colors flex items-center gap-1.5 group/tech"
                                                >
                                                    <IconComponent
                                                        style={{ color: tech.color }}
                                                        className="w-4 h-4" />
                                                    <span className="group-hover/tech:text-white transition-colors">
                                                        {tech.name}
                                                    </span>
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-10 sm:mt-16 md:mt-20 relative z-[5]"
                >
                    <motion.a
                        href="https://github.com/DGTJS"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 flex items-center gap-2"
                    >
                        Ver todos os projetos
                        <FaGithub className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
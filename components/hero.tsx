"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/DGTJS",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/diego-martins7",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:joaodiegom21@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("skills-section");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Se não encontrar a seção de skills, rola para baixo da página
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToNextSection();
    }
  };

  return (
    <section className="h-screen w-full  relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-10 ">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-16 sm:pt-24 md:pt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                👋 Olá, eu sou o Diego
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-start text-6xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-white "
            >
              <span className="text-gradient">Full Stack</span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-gradient"
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
            >
              Desenvolvedor apaixonado por criar experiências digitais
              inovadoras. Especializado em React, Node.js e TypeScript, sempre
              buscando aprender novas tecnologias e metodologias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Link href="#work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Ver Projetos</span>
                  <FaGithub className="w-4 h-4" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="flex gap-3 sm:gap-4"
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 sm:p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 hover:border-cyan-500/30 transition-all duration-300 ${social.color}`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative hidden sm:block"
            style={{ y }}
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-square group">
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-50 animate-glow"
              />

              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex w-[80%] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-2xl"
              >
                <Image
                  src="/image/perfil.png"
                  alt="Diego Martins - Full Stack Developer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Profile Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white dark:text-white mb-2">
                    Diego Martins
                    <motion.span
                      className="block text-gradient text-base sm:text-lg font-medium"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        backgroundSize: "200% 100%",
                      }}
                    >
                      Full Stack Developer
                    </motion.span>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                    <div>
                      <span className="font-semibold text-cyan-400">3+</span>{" "}
                      Anos Exp
                    </div>
                    <div>
                      <span className="font-semibold text-cyan-400">20+</span>{" "}
                      Projetos
                    </div>
                    <div>
                      <span className="font-semibold text-cyan-400">5+</span>{" "}
                      Tecnologias
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNextSection}
          onKeyDown={handleKeyDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Rolar para próxima seção"
          tabIndex={0}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center group-hover:border-cyan-400 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-500 rounded-full mt-2 group-hover:bg-cyan-400 transition-colors"
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}

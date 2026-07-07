"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

import { heroStats, socialLinks } from "@/app/data/site";
import { scrollToId } from "@/lib/scroll";

import { ActionButton } from "./portfolio/action-button";
import { GradientText } from "./portfolio/gradient-text";
import { SurfacePanel } from "./portfolio/surface-panel";
import { CoolMode } from "./ui/cool-mode";
import { SocialLinks } from "./portfolio/social-links";
import { TextAnimate } from "./ui/text-animate";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 88]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_34%),linear-gradient(180deg,#050505_0%,#0d0d0f_50%,#050505_100%)] px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white/4 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-2 sm:px-4 sm:pt-24 md:pt-32">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <CoolMode>
              <SurfacePanel
                interactive={false}
                className="mb-5 rounded-full w-[fit-content] px-4 py-2 text-sm font-medium text-slate-100"
              >
                <TextAnimate animation="blurInUp" by="word">
                  👋 Olá, eu sou o Diego
                </TextAnimate>
              </SurfacePanel>
            </CoolMode>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              <GradientText>Front End</GradientText>
              <br />
              <GradientText>Developer</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Desenvolvedor apaixonado por criar experiências digitais
              inovadoras. Especializado em React, Node.js e TypeScript, sempre
              buscando aprender novas tecnologias e metodologias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <ActionButton asChild>
                <a href="#work" className="flex items-center gap-2">
                  <ArrowUpRightIcon className="h-4 w-4" />
                  Ver projetos
                </a>
              </ActionButton>

              <ActionButton asChild variant="secondary">
                <a
                  href="/curriculo_Diego_Martins.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <FaDownload className="h-4 w-4" />
                  Download CV
                </a>
              </ActionButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
              className="mt-8"
            >
              <SocialLinks links={socialLinks} size="sm" className="gap-3" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block lg:w-1/2"
            style={{ y }}
          >
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none">
              <motion.div
                animate={{ scale: [0.96, 1, 0.96] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-2xl"
              />

              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="theme-surface-strong theme-surface-interactive group relative flex h-[65vh] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30"
              >
                <Image
                  src="/image/Perfil.png"
                  alt="Diego Martins - Front-end Developer"
                  fill
                  priority
                  sizes="30vw"
                  className="object-cover bg-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="text-xl font-semibold text-white sm:text-2xl">
                    Diego Martins
                    <GradientText
                      as="span"
                      className="block text-base font-medium sm:text-lg"
                    >
                      Front-end Developer
                    </GradientText>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-300 sm:text-sm">
                    {heroStats.map((stat) => (
                      <SurfacePanel
                        key={stat.label}
                        variant="subtle"
                        interactive={false}
                        className="rounded-2xl px-3 py-2"
                      >
                        <span className="block text-sm font-semibold text-white">
                          {stat.value}
                        </span>
                        <span>{stat.label}</span>
                      </SurfacePanel>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToId("skills")}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-neutral-950"
        aria-label="Rolar para a próxima seção"
      >
        <div className="flex h-11 w-7 justify-center rounded-full border border-white/30 transition-colors group-hover:border-white/60">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2 h-3 w-1 rounded-full bg-white/70 transition-colors group-hover:bg-white"
          />
        </div>
      </motion.button>
    </section>
  );
}

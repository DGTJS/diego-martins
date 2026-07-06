import { EnvelopeIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import type {
  ContactDetail,
  HeroStat,
  NavigationItem,
  SocialLink,
} from "./types";

export const navigationItems: NavigationItem[] = [
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#work" },
  { name: "Contato", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/DGTJS",
    icon: FaGithub,
    iconClassName: "group-hover:text-slate-100",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/diego-martins7",
    icon: FaLinkedin,
    iconClassName: "group-hover:text-sky-300",
  },
  {
    name: "Email",
    href: "mailto:joaodiegom21@gmail.com",
    icon: FaEnvelope,
    iconClassName: "group-hover:text-rose-300",
  },
];

export const heroStats: HeroStat[] = [
  { value: "3+", label: "anos de experiência" },
  { value: "20+", label: "projetos entregues" },
  { value: "5+", label: "tecnologias principais" },
];

export const contactDetails: ContactDetail[] = [
  {
    icon: EnvelopeIcon,
    title: "Email",
    value: "joaodiegom21@gmail.com",
    href: "mailto:joaodiegom21@gmail.com",
    iconClassName: "text-sky-300",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+55 (11) 99005-9775",
    href: "https://wa.me/5511990059775",
    iconClassName: "text-emerald-300",
  },
  {
    icon: MapPinIcon,
    title: "Localização",
    value: "São Paulo, Brasil",
    href: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo%2C+Brasil",
    iconClassName: "text-rose-300",
  },
  {
    icon: ClockIcon,
    title: "Disponibilidade",
    value: "Seg a Sáb, 9h-18h",
    iconClassName: "text-violet-300",
  },
];

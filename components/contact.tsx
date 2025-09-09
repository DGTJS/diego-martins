"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: "Email",
    value: "joaodiegom21@gmail.com",
    link: "mailto:joaodiegom21@gmail.com",
    color: "text-blue-400",
  },
  {
    icon: PhoneIcon,
    title: "Telefone",
    value: "+55 (11) 99005-9775",
    link: "tel:+5511990059775",
    color: "text-green-400",
  },
  {
    icon: MapPinIcon,
    title: "Localização",
    value: "São Paulo, Brasil",
    link: "#",
    color: "text-red-400",
  },
  {
    icon: ClockIcon,
    title: "Disponibilidade",
    value: "Segunda a Sexta, 9h-18h",
    link: "#",
    color: "text-purple-400",
  },
];

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
    url: "https://www.linkedin.com/in/diego-martins7",
    color: "hover:text-blue-400",
  },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Função de envio usando EmailJS (documentação oficial)
  // https://www.emailjs.com/docs/examples/reactjs/
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSent(false);

    if (form.current) {
      emailjs
        .sendForm(
          "service_16hw8th", // Substitua pelo seu Service ID
          "template_g9mggog", // Substitua pelo seu Template ID
          form.current,
          "uUiAVRwEcfOOOWrrp" // Substitua pelo seu Public Key
        )
        .then(
          () => setSent(true),
          () => setError("Erro ao enviar. Tente novamente.")
        );
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          <p className="text-gray-300 text-center mt-6 max-w-2xl">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em
            contato e vamos criar algo incrível juntos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="block max-w-xs w-full"
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-cyan-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-lg bg-gray-700/50 ${info.color}`}
                          >
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">
                              {info.title}
                            </h4>
                            <p className="text-gray-300">{info.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 ${social.color}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Envie uma Mensagem
            </h3>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white font-medium mb-2"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-white font-medium mb-2"
                    >
                      Assunto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Qual é o assunto?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                      placeholder="Conte-me sobre seu projeto..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25"
                  >
                    Enviar Mensagem
                  </motion.button>
                  {sent && (
                    <p className="text-green-400 mt-2">
                      Mensagem enviada com sucesso!
                    </p>
                  )}
                  {error && <p className="text-red-400 mt-2">{error}</p>}
                </form>
                {/* Documentação EmailJS:
                  1. Instale: npm install @emailjs/browser
                  2. Crie conta em https://dashboard.emailjs.com/
                  3. Configure Service, Template e pegue seu Public Key
                  4. Use sendForm como acima
                  Docs: https://www.emailjs.com/docs/examples/reactjs/
                */}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { contactDetails, socialLinks } from "@/app/data/site";
import { env } from "@/lib/env";

import { ActionButton } from "./portfolio/action-button";
import { ContactField } from "./portfolio/contact-field";
import { ContactInfoCard } from "./portfolio/contact-info-card";
import { SectionHeading } from "./portfolio/section-heading";
import { SectionShell } from "./portfolio/section-shell";
import { SocialLinks } from "./portfolio/social-links";
import { SurfacePanel } from "./portfolio/surface-panel";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSent(false);
    setIsSending(true);

    try {
      if (!form.current) {
        throw new Error("Formulário indisponível.");
      }

      await emailjs.sendForm(
        env.emailJs.serviceId,
        env.emailJs.templateId,
        form.current,
        env.emailJs.publicKey,
      );

      setSent(true);
      form.current.reset();
    } catch {
      setError("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contato"
        title="Vamos Conversar?"
        description="Estou sempre aberto a novas oportunidades e colaborações. Se quiser criar algo junto, esse é o melhor ponto de partida."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="mb-8 text-2xl font-semibold text-white">
            Informações de contato
          </h3>

          <div className="space-y-4">
            {contactDetails.map((item, index) => (
              <ContactInfoCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div className="mt-8">
            <h4 className="mb-4 text-xl font-semibold text-white">
              Redes sociais
            </h4>
            <SocialLinks links={socialLinks} size="md" className="gap-4" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="mb-8 text-2xl font-semibold text-white">
            Envie uma mensagem
          </h3>

          <SurfacePanel className="p-6 sm:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <ContactField
                  label="Nome"
                  name="name"
                  id="name"
                  placeholder="Seu nome completo"
                />
                <ContactField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>

              <ContactField
                label="Assunto"
                name="subject"
                id="subject"
                placeholder="Qual é o assunto?"
              />

              <ContactField
                label="Mensagem"
                name="message"
                id="message"
                as="textarea"
                rows={6}
                placeholder="Conte-me sobre o seu projeto..."
              />

              <ActionButton type="submit" disabled={isSending} className="w-full">
                {isSending ? "Enviando..." : "Enviar mensagem"}
              </ActionButton>

              {sent ? (
                <p className="text-sm text-zinc-300">
                  Mensagem enviada com sucesso!
                </p>
              ) : null}

              {error ? <p className="text-sm text-zinc-400">{error}</p> : null}
            </form>
          </SurfacePanel>
        </motion.div>
      </div>
    </SectionShell>
  );
}

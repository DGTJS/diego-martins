"use client";

import { navigationItems, socialLinks } from "@/app/data/site";
import { scrollToId } from "@/lib/scroll";

import { GradientText } from "./portfolio/gradient-text";
import { SocialLinks } from "./portfolio/social-links";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-neutral-950/80 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 sm:py-12 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              <GradientText as="span">Diego Martins</GradientText>
            </h3>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Desenvolvedor front-end apaixonado por criar experiências digitais
              inovadoras, funcionais e visualmente memoráveis.
            </p>
            <div className="mt-5">
              <SocialLinks links={socialLinks} size="sm" className="gap-4" />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Links rápidos
            </h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToId(item.href.replace("#", ""));
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-2 text-sm leading-7 text-slate-400">
              <p>📍 São Paulo, Brasil</p>
              <p>📧 joaodiegom21@gmail.com</p>
              <p>📱 +55 (11) 99005-9775</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Diego Martins. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

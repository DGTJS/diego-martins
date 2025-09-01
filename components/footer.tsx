"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

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
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:joaodiegom21@gmail.com",
    color: "hover:text-red-400",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Voltar ao topo"
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Diego Martins
            </h3>
            <p className="text-gray-400 mb-4">
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais inovadoras.
            </p>
            <div className="flex gap-4">
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
                    className={`p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#skills-section"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("skills-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Habilidades
                </a>
              </li>
              {/* <li>
                <a 
                  href="#experience-section" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Experiência
                </a>
              </li> */}
              <li>
                <a
                  href="#projects-section"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 São Paulo, Brasil</p>
              <p>📧 joaodiegom21@gmail.com</p>
              <p>📱 +55 (11) 99005-9775</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Diego Martins. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

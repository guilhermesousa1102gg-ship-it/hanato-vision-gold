import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative overflow-hidden">
      {/* Top Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Main Footer */}
      <div className="bg-navy-medium py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <img
                src={logo}
                alt="Dr. Marcelo Hanato"
                className="h-10 mb-8"
              />
              <p className="text-foreground/40 text-sm leading-relaxed mb-8">
                Cirurgião plástico dedicado à transformação e bem-estar. 
                Excelência técnica aliada ao cuidado humanizado.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/drmarcelohanato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border/30 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="text-foreground/60" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511963799408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border/30 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  aria-label="WhatsApp"
                >
                  <Phone size={18} className="text-foreground/60" />
                </a>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xs tracking-[0.3em] text-foreground/60 uppercase mb-6">
                Navegação
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Início", href: "#inicio" },
                  { label: "Sobre", href: "#sobre" },
                  { label: "Especialidades", href: "#especialidades" },
                  { label: "Diferenciais", href: "#diferenciais" },
                  { label: "Locais", href: "#locais" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-foreground/40 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xs tracking-[0.3em] text-foreground/60 uppercase mb-6">
                Especialidades
              </h4>
              <ul className="space-y-3">
                <li className="text-foreground/40 text-sm">Blefaroplastia</li>
                <li className="text-foreground/40 text-sm">Lipo HD</li>
                <li className="text-foreground/40 text-sm">Mamoplastia</li>
                <li className="text-foreground/40 text-sm">Cirurgia das Pálpebras</li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xs tracking-[0.3em] text-foreground/60 uppercase mb-6">
                Contato
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="text-foreground/40 text-sm">
                  São Paulo · São José dos Campos · Bertioga
                </li>
                <li>
                  <a
                    href="mailto:clinicahanato@gmail.com"
                    className="text-foreground/40 hover:text-primary transition-colors text-sm"
                  >
                    clinicahanato@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/drmarcelohanato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-foreground transition-colors text-sm"
                  >
                    @drmarcelohanato
                  </a>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=5511963799408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-primary/50 text-primary font-medium text-[10px] tracking-[0.15em] uppercase hover:bg-primary/10 transition-all duration-300"
              >
                Agendar Consulta
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background py-4 md:py-6 border-t border-border/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/30 text-xs tracking-wide">
              © {currentYear} Dr. Marcelo Hanato. Todos os direitos reservados.
            </p>
            <p className="text-foreground/30 text-xs">
              CRM/SP 144721 · RQE 91564
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
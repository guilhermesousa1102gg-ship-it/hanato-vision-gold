import { motion } from "framer-motion";
import { Instagram, Phone, MapPin, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative overflow-hidden">
      {/* Top Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-navy-medium to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <img
                src={logo}
                alt="Dr. Marcelo Hanato"
                className="h-12 mb-6"
              />
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                Cirurgião plástico dedicado a transformar vidas através da arte 
                e ciência da cirurgia plástica. Excelência técnica e cuidado humanizado.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/drmarcelohanato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-primary" />
                </a>
                <a
                  href="https://wa.link/vjbxr3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover:bg-primary/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} className="text-primary" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6 font-playfair">
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
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
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
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6 font-playfair">
                Especialidades
              </h4>
              <ul className="space-y-3">
                <li className="text-foreground/60 text-sm">Blefaroplastia</li>
                <li className="text-foreground/60 text-sm">Lipo HD</li>
                <li className="text-foreground/60 text-sm">Mamoplastia com Sutiã Interno</li>
                <li className="text-foreground/60 text-sm">Cirurgia das Pálpebras</li>
                <li className="text-foreground/60 text-sm">Contorno Corporal</li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6 font-playfair">
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/60 text-sm">
                    São Paulo, São José dos Campos e Bertioga
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a
                    href="https://wa.link/vjbxr3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram size={18} className="text-primary flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/drmarcelohanato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    @drmarcelohanato
                  </a>
                </li>
              </ul>

              {/* CTA */}
              <a
                href="https://wa.link/vjbxr3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero rounded-full text-xs mt-6 inline-block"
              >
                Agendar Consulta
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background/50 py-6 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/40 text-sm text-center md:text-left">
              © {currentYear} Dr. Marcelo Hanato. Todos os direitos reservados.
            </p>
            <p className="text-foreground/40 text-sm flex items-center gap-1">
              Feito com <Heart size={14} className="text-primary" /> para transformar vidas
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;

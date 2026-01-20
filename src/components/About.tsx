import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import drMarcelo from "@/assets/dr-marcelo.jpg";

const credentials = [
  "Membro Especialista da Sociedade Brasileira de Cirurgia Plástica",
  "Cirurgião Plástico pelo Hospital das Clínicas da UNESP",
  "Cirurgião Geral pelo Hospital das Clínicas da UNESP",
  "Fellowship em Cosmiatria pelo Instituto Boggio",
  "Oftalmologista pelo Hospital das Clínicas da UNICAMP",
  "Graduado na Faculdade de Medicina de Taubaté",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium to-background" />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden">
                <img
                  src={drMarcelo}
                  alt="Dr. Marcelo Hanato"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-primary/30" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-primary/30" />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -right-4 lg:-right-8 bg-background border border-primary/20 p-6"
              >
                <span className="text-5xl font-cormorant text-gradient-gold block">+10</span>
                <span className="text-xs tracking-[0.2em] text-foreground/50 uppercase">Anos de Experiência</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="section-subtitle">Sobre o Especialista</span>
            <h2 className="section-title text-foreground mb-8">
              Compromisso com <span className="text-gradient-gold italic">a Excelência</span>
            </h2>

            <div className="w-16 h-px bg-primary/50 mb-8" />

            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              O Dr. Marcelo Hanato é cirurgião plástico com formação completa em 
              algumas das mais respeitadas instituições médicas do Brasil. Sua 
              abordagem combina técnica refinada com sensibilidade artística, 
              buscando sempre resultados naturais e harmoniosos.
            </p>

            <p className="text-foreground/40 mb-12 leading-relaxed">
              Com uma visão única que integra sua formação em Oftalmologia e 
              Cirurgia Plástica, tornou-se referência em procedimentos de 
              rejuvenescimento do olhar. O acompanhamento diferenciado no 
              pós-operatório é um dos pilares do seu trabalho.
            </p>

            {/* Credentials List */}
            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground/60">{credential}</span>
                </motion.div>
              ))}
            </div>

            {/* CRM Info */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-xs tracking-[0.2em] text-foreground/30 uppercase">
                CRM/SP 144721 · RQE 91564
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
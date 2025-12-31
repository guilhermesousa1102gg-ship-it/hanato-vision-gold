import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Star, Users } from "lucide-react";
import drMarcelo from "@/assets/credentials.png";
import heroEye from "@/assets/hero-eye.jpg";

const credentials = [
  {
    icon: Award,
    title: "Formação de Excelência",
    description: "Especialização completa em Cirurgia Plástica com as melhores instituições",
  },
  {
    icon: BookOpen,
    title: "Autor de Capítulo de Livro",
    description: "Contribuição científica reconhecida na área de Cirurgia Plástica",
  },
  {
    icon: Star,
    title: "Bem Avaliado no Google",
    description: "Pacientes satisfeitas recomendam o trabalho do Dr. Marcelo",
  },
  {
    icon: Users,
    title: "Atendimento Diferenciado",
    description: "Acompanhamento personalizado no pré e pós-operatório",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-gold-glow">
                <img
                  src={drMarcelo}
                  alt="Dr. Marcelo Hanato"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 z-20"
              >
                <div className="text-center">
                  <span className="text-4xl font-bold text-gradient-gold block">+10</span>
                  <span className="text-sm text-foreground/70">Anos de Experiência</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-subtitle">Sobre o Especialista</span>
            <h2 className="section-title text-foreground mb-6">
              Compromisso com a <span className="text-gradient-gold">Excelência</span>
            </h2>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              O Dr. Marcelo Hanato é um cirurgião plástico dedicado à transformação e 
              bem-estar de suas pacientes. Com uma formação técnica excepcional e 
              anos de experiência, ele se especializou em procedimentos que 
              realçam a beleza natural de cada pessoa.
            </p>

            <p className="text-foreground/60 mb-8 leading-relaxed">
              Sua abordagem combina técnica refinada com um olhar artístico, 
              garantindo resultados harmoniosos e naturais. O acompanhamento 
              diferenciado no pós-operatório é um dos pilares do seu trabalho, 
              proporcionando segurança e confiança durante toda a jornada de 
              transformação.
            </p>

            <div className="divider-gold mb-8 mx-0" />

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground/60">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

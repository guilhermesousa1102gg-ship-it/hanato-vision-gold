import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Heart,
  Clock,
  Award,
  Stethoscope,
  UserCheck,
} from "lucide-react";

const differentials = [
  {
    icon: Shield,
    title: "Segurança Total",
    description:
      "Procedimentos realizados em hospitais e clínicas certificadas, com equipamentos de última geração e equipe médica qualificada.",
  },
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description:
      "Cada paciente é única. Atendimento personalizado que considera suas expectativas, anatomia e estilo de vida.",
  },
  {
    icon: Clock,
    title: "Acompanhamento Contínuo",
    description:
      "Seguimento diferenciado no pós-operatório com consultas regulares para garantir sua recuperação ideal.",
  },
  {
    icon: Award,
    title: "Resultados Naturais",
    description:
      "Técnicas modernas que preservam a naturalidade e harmonia do corpo, sem exageros ou artificialidade.",
  },
  {
    icon: Stethoscope,
    title: "Técnica Refinada",
    description:
      "Formação sólida e atualização constante em técnicas avançadas de cirurgia plástica nacional e internacional.",
  },
  {
    icon: UserCheck,
    title: "Transparência",
    description:
      "Esclarecimento completo sobre o procedimento, recuperação, riscos e expectativas realistas de resultado.",
  },
];

const Differentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium to-background" />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Por Que Escolher</span>
          <h2 className="section-title text-foreground mb-4">
            Nossos <span className="text-gradient-gold">Diferenciais</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            O que torna a experiência com o Dr. Marcelo Hanato única e especial
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                    <item.icon
                      size={32}
                      className="text-primary group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 font-playfair">
                  {item.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-px w-12 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/60 mb-6">
            Pronta para dar o primeiro passo rumo à sua transformação?
          </p>
          <a
            href="https://wa.link/vjbxr3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero rounded-full inline-block"
          >
            Agende sua Consulta
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;

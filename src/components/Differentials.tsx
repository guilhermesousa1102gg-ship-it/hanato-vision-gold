import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentials = [
  {
    number: "01",
    title: "Dupla Especialização",
    description: "Formação em Cirurgia Plástica pela UNESP e Oftalmologia pela UNICAMP, garantindo expertise única na região dos olhos.",
  },
  {
    number: "02",
    title: "Precisão Oftalmológica",
    description: "Conhecimento profundo da anatomia ocular permite cirurgias mais seguras e resultados mais naturais na blefaroplastia.",
  },
  {
    number: "03",
    title: "Técnica Refinada",
    description: "Procedimentos realizados com as técnicas mais avançadas, priorizando cicatrizes imperceptíveis e recuperação rápida.",
  },
  {
    number: "04",
    title: "Pós-Operatório Diferenciado",
    description: "Acompanhamento personalizado durante toda a recuperação, com suporte por WhatsApp e consultas frequentes.",
  },
  {
    number: "05",
    title: "Segurança Total",
    description: "Procedimentos realizados em centros cirúrgicos certificados, com equipamentos de última geração.",
  },
  {
    number: "06",
    title: "Resultados Naturais",
    description: "Abordagem artística que preserva a expressão natural do olhar, sem exageros ou aparência artificial.",
  },
];

const Differentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="py-20 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/30 to-background" />

      {/* Decorative Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden md:block" />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="section-subtitle">Diferenciais</span>
          <h2 className="section-title text-foreground">
            Por Que <span className="text-gradient-gold italic">Escolher</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-8" />
        </motion.div>

        {/* Differentials Grid - Timeline Style */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-12 lg:gap-y-16">
            {differentials.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${index % 2 === 1 ? "md:mt-12" : ""}`}
              >
                {/* Card */}
                <div className="group relative p-8 border border-border/30 bg-card/30 hover:border-primary/30 transition-all duration-500 hover:bg-card/50">
                  {/* Number */}
                  <span className="text-5xl font-cormorant text-primary/20 absolute -top-2 -left-2 group-hover:text-primary/30 transition-colors duration-500">
                    {item.number}
                  </span>

                  {/* Content */}
                  <div className="pt-8">
                    <h3 className="text-xl font-baskerville text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-20"
        >
          <p className="text-foreground/40 mb-8 max-w-lg mx-auto">
            Pronta para renovar seu olhar com segurança e naturalidade?
          </p>
          <a
            href="https://wa.link/vjbxr3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-block"
          >
            Agende sua Consulta
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;

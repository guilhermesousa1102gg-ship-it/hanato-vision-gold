import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import blefaroplastia from "@/assets/blefaroplastia.jpg";
import heroEye from "@/assets/hero-eye.jpg";

const blepharoplastyTypes = [
  {
    id: 1,
    title: "Blefaroplastia Superior",
    subtitle: "Pálpebras Superiores",
    description:
      "Remove o excesso de pele e gordura das pálpebras superiores, corrigindo a aparência de olhos cansados e pesados. Ideal para pacientes que sentem desconforto ao usar maquiagem ou que percebem a pálpebra 'caindo' sobre os olhos.",
    benefits: [
      "Olhar mais aberto e expressivo",
      "Melhora do campo visual periférico",
      "Facilidade para aplicar maquiagem",
      "Aparência mais jovem e descansada",
    ],
    image: blefaroplastia,
  },
  {
    id: 2,
    title: "Blefaroplastia Inferior",
    subtitle: "Pálpebras Inferiores",
    description:
      "Trata as bolsas de gordura e o excesso de pele sob os olhos, eliminando a aparência de cansaço permanente. Técnicas modernas permitem resultados naturais sem cicatrizes aparentes.",
    benefits: [
      "Eliminação das bolsas sob os olhos",
      "Suavização das olheiras",
      "Aspecto rejuvenescido e saudável",
      "Cicatrizes imperceptíveis",
    ],
    image: heroEye,
  },
];

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blefaroplastia"
      ref={ref}
      className="py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="section-subtitle">Procedimento</span>
          <h2 className="section-title text-foreground">
            <span className="text-gradient-gold italic">Blefaroplastia</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            A cirurgia das pálpebras é um dos procedimentos mais realizados no mundo, 
            oferecendo rejuvenescimento natural da região dos olhos com recuperação rápida.
          </p>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-8" />
        </motion.div>

        {/* Introduction Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-24 lg:mb-32"
        >
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-6 border border-border/30 bg-card/20">
              <span className="text-4xl font-cormorant text-primary mb-4 block">30-60</span>
              <span className="text-xs tracking-[0.2em] text-foreground/40 uppercase">Minutos de Cirurgia</span>
            </div>
            <div className="text-center p-6 border border-border/30 bg-card/20">
              <span className="text-4xl font-cormorant text-primary mb-4 block">7-10</span>
              <span className="text-xs tracking-[0.2em] text-foreground/40 uppercase">Dias de Recuperação</span>
            </div>
            <div className="text-center p-6 border border-border/30 bg-card/20">
              <span className="text-4xl font-cormorant text-primary mb-4 block">Local</span>
              <span className="text-xs tracking-[0.2em] text-foreground/40 uppercase">Tipo de Anestesia</span>
            </div>
          </div>
        </motion.div>

        {/* Blepharoplasty Types - Rolex Style */}
        <div className="space-y-32 lg:space-y-48">
          {blepharoplastyTypes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden group">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="text-6xl lg:text-8xl font-cormorant text-primary/20">
                      0{item.id}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 ${index % 2 === 0 ? '-left-4' : '-right-4'} w-16 h-16 border-l border-t border-primary/20`} />
                <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-16 h-16 border-r border-b border-primary/20`} />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs tracking-[0.3em] text-primary/60 uppercase mb-4 block">
                  {item.subtitle}
                </span>
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-cormorant text-foreground mb-6">
                  {item.title}
                </h3>

                <div className="w-12 h-px bg-primary/30 mb-8" />

                <p className="text-foreground/60 leading-relaxed mb-10">
                  {item.description}
                </p>

                <div className="space-y-4 mb-10">
                  {item.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-4">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-sm text-foreground/50">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.link/vjbxr3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold inline-block"
                >
                  Agendar Avaliação
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-32 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-cormorant text-foreground mb-6">
            Diferencial Único
          </h3>
          <p className="text-foreground/60 leading-relaxed mb-8">
            O Dr. Marcelo Hanato possui formação dupla em <strong className="text-foreground/80">Cirurgia Plástica</strong> e{" "}
            <strong className="text-foreground/80">Oftalmologia</strong>, oferecendo uma abordagem única e especializada 
            para a cirurgia das pálpebras. Essa combinação garante não apenas resultados estéticos excepcionais, 
            mas também total segurança para a saúde ocular.
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

export default Specialties;

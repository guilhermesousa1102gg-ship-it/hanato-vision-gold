import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import blefaroplastia from "@/assets/blefaroplastia.jpg";
import lipoHD from "@/assets/proc-lipo1.png";
import mamoplastia from "@/assets/proc-mama.png";

const specialties = [
  {
    id: 1,
    title: "Blefaroplastia",
    subtitle: "Cirurgia das Pálpebras",
    description:
      "Rejuvenesça seu olhar com a correção de pálpebras caídas e bolsas. Um procedimento delicado que remove o excesso de pele e gordura, proporcionando um olhar mais jovem e expressivo.",
    benefits: [
      "Olhar mais jovem e descansado",
      "Melhora do campo visual",
      "Facilidade para aplicar maquiagem",
      "Recuperação rápida e discreta",
    ],
    image: blefaroplastia,
  },
  {
    id: 2,
    title: "Lipo HD",
    subtitle: "Lipoaspiração de Alta Definição",
    description:
      "Escultura corporal avançada que remove gordura localizada e realça os contornos naturais do corpo. Técnica moderna para um resultado atlético e harmonioso.",
    benefits: [
      "Definição muscular visível",
      "Contornos corporais harmoniosos",
      "Resultados naturais e duradouros",
      "Técnica minimamente invasiva",
    ],
    image: lipoHD,
  },
  {
    id: 3,
    title: "Mamoplastia",
    subtitle: "Técnica do Sutiã Interno",
    description:
      "Técnica inovadora que oferece sustentação interna permanente às mamas. Ideal para aumento, redução ou lifting mamário com resultados mais duradouros.",
    benefits: [
      "Sustentação superior e duradoura",
      "Formato mais natural",
      "Liberdade para vestir qualquer roupa",
      "Resultados que acompanham seu corpo",
    ],
    image: mamoplastia,
  },
];

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="especialidades"
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
          className="text-center mb-20 lg:mb-32"
        >
          <span className="section-subtitle">Especialidades</span>
          <h2 className="section-title text-foreground">
            A Arte da <span className="text-gradient-gold italic">Transformação</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-8" />
        </motion.div>

        {/* Specialties Grid - Rolex Style */}
        <div className="space-y-32 lg:space-y-48">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden group">
                  <motion.img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="text-6xl lg:text-8xl font-cormorant text-primary/20">
                      0{specialty.id}
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
                  {specialty.subtitle}
                </span>
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-cormorant text-foreground mb-6">
                  {specialty.title}
                </h3>

                <div className="w-12 h-px bg-primary/30 mb-8" />

                <p className="text-foreground/60 leading-relaxed mb-10">
                  {specialty.description}
                </p>

                <div className="space-y-4 mb-10">
                  {specialty.benefits.map((benefit, i) => (
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
      </div>
    </section>
  );
};

export default Specialties;
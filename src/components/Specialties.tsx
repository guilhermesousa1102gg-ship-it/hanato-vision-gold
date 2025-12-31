import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, Sparkles, Heart } from "lucide-react";
import blefaroplastia from "@/assets/blefaroplastia.jpg";
import lipoHD from "@/assets/proc-lipo1.png";
import mamoplastia from "@/assets/proc-mama.png";

const specialties = [
  {
    id: 1,
    title: "Blefaroplastia",
    subtitle: "Cirurgia das Pálpebras",
    description:
      "Rejuvenesça seu olhar com a correção de pálpebras caídas e bolsas. Um procedimento delicado que remove o excesso de pele e gordura, proporcionando um olhar mais jovem, descansado e expressivo.",
    benefits: [
      "Olhar mais jovem e descansado",
      "Melhora do campo visual",
      "Facilidade para aplicar maquiagem",
      "Recuperação rápida",
    ],
    image: blefaroplastia,
    icon: Eye,
    color: "from-blue-500/20 to-primary/20",
  },
  {
    id: 2,
    title: "Lipo HD",
    subtitle: "Lipoaspiração de Alta Definição",
    description:
      "Escultura corporal avançada que remove gordura localizada e define os contornos musculares. Técnica moderna que proporciona um corpo mais definido e atlético, respeitando as proporções naturais.",
    benefits: [
      "Definição muscular visível",
      "Contornos corporais harmoniosos",
      "Resultados duradouros",
      "Técnica minimamente invasiva",
    ],
    image: lipoHD,
    icon: Sparkles,
    color: "from-amber-500/20 to-primary/20",
  },
  {
    id: 3,
    title: "Mamoplastia com Sutiã Interno",
    subtitle: "Técnica Exclusiva",
    description:
      "Técnica inovadora que oferece sustentação interna permanente às mamas, proporcionando resultados mais duradouros e naturais. Ideal para aumento, redução ou lifting mamário com suporte adicional.",
    benefits: [
      "Sustentação duradoura",
      "Resultados mais naturais",
      "Liberdade para vestir qualquer roupa",
      "Maior autoestima",
    ],
    image: mamoplastia,
    icon: Heart,
    color: "from-rose-500/20 to-primary/20",
  },
];

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % specialties.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + specialties.length) % specialties.length);
  };

  return (
    <section
      id="especialidades"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/30 to-background" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Áreas de Atuação</span>
          <h2 className="section-title text-foreground mb-4">
            Nossas <span className="text-gradient-gold">Especialidades</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Procedimentos realizados com técnica avançada e atenção aos detalhes 
            para resultados naturais e harmoniosos
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              key={`image-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border-gold-glow">
                <img
                  src={specialties[activeIndex].image}
                  alt={specialties[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${specialties[activeIndex].color} opacity-40`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const Icon = specialties[activeIndex].icon;
                        return <Icon size={24} className="text-primary" />;
                      })()}
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {specialties[activeIndex].title}
                        </h4>
                        <p className="text-sm text-foreground/60">
                          {specialties[activeIndex].subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full border border-primary/20 rounded-2xl" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  {(() => {
                    const Icon = specialties[activeIndex].icon;
                    return <Icon size={32} className="text-primary" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground font-playfair">
                    {specialties[activeIndex].title}
                  </h3>
                  <p className="text-primary">{specialties[activeIndex].subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                {specialties[activeIndex].description}
              </p>

              <div className="space-y-3 mb-8">
                {specialties[activeIndex].benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="https://wa.link/vjbxr3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero rounded-full inline-block"
              >
                Agendar Avaliação
              </a>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>

            <div className="flex gap-2">
              {specialties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;

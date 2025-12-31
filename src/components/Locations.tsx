import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const locations = [
  {
    city: "São Paulo",
    region: "Capital",
    neighborhoods: [
      "Vila Mariana",
      "Vila Clementino",
      "Saúde",
      "Ipiranga",
      "Mirandópolis",
      "Chácara Inglesa",
      "Chácara Klabin",
    ],
    whatsapp: "https://wa.link/vjbxr3",
    featured: true,
  },
  {
    city: "São José dos Campos",
    region: "Interior SP",
    neighborhoods: ["Aquarius", "Vila Ema", "Vila Adyana", "Urbanova"],
    whatsapp: "https://wa.link/on0qid",
    featured: false,
  },
  {
    city: "Bertioga",
    region: "Litoral SP",
    neighborhoods: ["Atendimento em toda a cidade"],
    whatsapp: "https://wa.link/gii6i8",
    featured: false,
  },
];

const Locations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="locais"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Onde Atendemos</span>
          <h2 className="section-title text-foreground mb-4">
            Locais de <span className="text-gradient-gold">Atendimento</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Presente nas principais regiões de São Paulo para estar mais perto de você
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative ${
                location.featured ? "md:row-span-1" : ""
              }`}
            >
              <div
                className={`h-full glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  location.featured
                    ? "border-primary/40 hover:shadow-gold"
                    : "hover:border-primary/30 hover:shadow-soft"
                }`}
              >
                {/* Featured Badge */}
                {location.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded-full">
                      Principal
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-playfair">
                      {location.city}
                    </h3>
                    <p className="text-primary text-sm">{location.region}</p>
                  </div>
                </div>

                {/* Neighborhoods */}
                <div className="mb-8">
                  <p className="text-sm text-foreground/50 mb-3 uppercase tracking-wider">
                    Regiões atendidas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {location.neighborhoods.map((neighborhood) => (
                      <span
                        key={neighborhood}
                        className="px-3 py-1 text-sm bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-foreground/60">
                    <Clock size={18} className="text-primary" />
                    <span className="text-sm">Horários flexíveis</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/60">
                    <Phone size={18} className="text-primary" />
                    <span className="text-sm">Agendamento via WhatsApp</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={location.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    location.featured
                      ? "btn-hero"
                      : "btn-outline-gold"
                  }`}
                >
                  <span>Agendar em {location.city}</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder / Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-card rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-playfair">
                Agende sua <span className="text-gradient-gold">Consulta</span>
              </h3>
              <p className="text-foreground/60 mb-6">
                Entre em contato pelo WhatsApp e nossa equipe irá direcionar você 
                para o local de atendimento mais próximo. Atendimento personalizado 
                desde o primeiro contato.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.link/vjbxr3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero rounded-full text-sm"
                >
                  WhatsApp São Paulo
                </a>
                <a
                  href="https://www.instagram.com/drmarcelohanato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold rounded-full text-sm"
                >
                  @drmarcelohanato
                </a>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block glass-card rounded-2xl p-8">
                <p className="text-sm text-foreground/50 uppercase tracking-wider mb-2">
                  Instagram
                </p>
                <p className="text-2xl font-bold text-gradient-gold mb-4">
                  @drmarcelohanato
                </p>
                <p className="text-foreground/60 text-sm">
                  Acompanhe resultados, dicas e novidades
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;

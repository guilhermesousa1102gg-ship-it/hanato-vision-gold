import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const locations = [
  {
    city: "São Paulo",
    region: "Capital",
    address: "Rua Domingos de Morais, 2.781, Vila Mariana",
    neighborhoods: ["Vila Mariana", "Vila Clementino", "Saúde", "Ipiranga", "Mirandópolis"],
    whatsapp: "https://wa.link/vjbxr3",
    featured: true,
  },
  {
    city: "São José dos Campos",
    region: "Interior SP",
    address: "Região do Aquarius",
    neighborhoods: ["Aquarius", "Vila Ema", "Vila Adyana", "Urbanova"],
    whatsapp: "https://wa.link/on0qid",
    featured: false,
  },
  {
    city: "Bertioga",
    region: "Litoral SP",
    address: "Rua Luís Pereira de Campos, 989, Centro",
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
      className="py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-subtitle">Locais de Atendimento</span>
          <h2 className="section-title text-foreground">
            Onde <span className="text-gradient-gold italic">Atendemos</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-8" />
        </motion.div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div
                className={`h-full p-8 lg:p-10 border transition-all duration-500 hover:border-primary/40 ${
                  location.featured
                    ? "border-primary/30 bg-card/40"
                    : "border-border/30 bg-card/20"
                }`}
              >
                {/* Featured Badge */}
                {location.featured && (
                  <span className="text-[10px] tracking-[0.3em] text-primary uppercase mb-6 block">
                    Principal
                  </span>
                )}

                {/* City */}
                <h3 className="text-3xl lg:text-4xl font-cormorant text-foreground mb-2">
                  {location.city}
                </h3>
                <p className="text-sm text-foreground/40 mb-6">{location.region}</p>

                <div className="w-8 h-px bg-primary/30 mb-6" />

                {/* Address */}
                <p className="text-sm text-foreground/50 mb-6 leading-relaxed">
                  {location.address}
                </p>

                {/* Neighborhoods */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {location.neighborhoods.slice(0, 3).map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="text-xs px-3 py-1 border border-border/30 text-foreground/40"
                    >
                      {neighborhood}
                    </span>
                  ))}
                  {location.neighborhoods.length > 3 && (
                    <span className="text-xs px-3 py-1 text-foreground/30">
                      +{location.neighborhoods.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={location.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-primary hover:text-foreground transition-colors group/link"
                >
                  <span className="tracking-[0.15em] uppercase">Agendar</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-foreground/40 mb-2">
            Contato: <span className="text-foreground/60">clinicahanato@gmail.com</span>
          </p>
          <p className="text-foreground/40">
            Instagram: <a href="https://www.instagram.com/drmarcelohanato" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors">@drmarcelohanato</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
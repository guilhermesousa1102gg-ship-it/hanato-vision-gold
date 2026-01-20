import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

interface Location {
  city: string;
  region: string;
  address: string;
  addressLine2?: string;
  clinicName?: string;
  neighborhoods: string[];
  whatsapp: string;
  mapEmbed?: string;
  featured: boolean;
}

const locations: Location[] = [
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
    address: "Rua Carlos Maria Auricchio, 70, sala 1011",
    addressLine2: "CEP 12.246-876 - Condomínio Royal Park",
    clinicName: "Belief Human Co",
    neighborhoods: ["Aquarius", "Vila Ema", "Vila Adyana", "Urbanova"],
    whatsapp: "https://wa.link/on0qid",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0!2d-45.9088!3d-23.2195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a4e2e8e1f7d%3A0x1234567890abcdef!2sRua%20Carlos%20Maria%20Auricchio%2C%2070%20-%20Jardim%20Aquarius%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
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

                {/* Clinic Name */}
                {location.clinicName && (
                  <span className="text-xs tracking-[0.2em] text-primary/80 uppercase mb-2 block">
                    {location.clinicName}
                  </span>
                )}

                {/* City */}
                <h3 className="text-3xl lg:text-4xl font-cormorant text-foreground mb-2">
                  {location.city}
                </h3>
                <p className="text-sm text-foreground/40 mb-6">{location.region}</p>

                <div className="w-8 h-px bg-primary/30 mb-6" />

                {/* Address */}
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={14} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      {location.address}
                    </p>
                    {location.addressLine2 && (
                      <p className="text-sm text-foreground/40 leading-relaxed">
                        {location.addressLine2}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mini Map */}
                {location.mapEmbed && (
                  <div className="my-4 rounded-sm overflow-hidden border border-border/20">
                    <iframe
                      src={location.mapEmbed}
                      width="100%"
                      height="120"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa ${location.city}`}
                      className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                )}

                {/* Neighborhoods */}
                <div className="flex flex-wrap gap-2 mb-8 mt-4">
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
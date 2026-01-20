import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Hospital {
  name: string;
  displayName: string;
  subtitle?: string;
}

const hospitals: Hospital[] = [
  {
    name: "Hospital Sírio-Libanês",
    displayName: "SÍRIO-LIBANÊS",
    subtitle: "HOSPITAL",
  },
  {
    name: "Hospital Alemão Oswaldo Cruz",
    displayName: "OSWALDO CRUZ",
    subtitle: "HOSPITAL ALEMÃO",
  },
  {
    name: "Hospital Santa Catarina",
    displayName: "SANTA CATARINA",
    subtitle: "HOSPITAL",
  },
  {
    name: "Hospital Blanc",
    displayName: "BLANC",
    subtitle: "HOSPITAL",
  },
  {
    name: "São Luiz",
    displayName: "SÃO LUIZ",
    subtitle: "REDE D'OR",
  },
];

const Hospitals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden bg-cream"
    >
      {/* Radial gradient background like reference */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 100%)",
        }}
      />
      
      {/* Circular lines decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/40 rounded-full"
            style={{
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
              left: `${-50 - i * 40}px`,
              top: `50%`,
              transform: 'translateY(-50%)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant text-foreground leading-tight">
              Hospitais que<br />
              <span className="italic text-gradient-gold">operamos</span>:
            </h2>
          </motion.div>

          {/* Right Side - Hospital Names */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 items-center">
              {hospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center justify-center p-4 text-center group"
                >
                  {/* Hospital Icon */}
                  <div className="mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-6 h-6 text-primary"
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    >
                      <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
                      <path d="M12 7v4M10 9h4" />
                    </svg>
                  </div>
                  
                  {/* Hospital Name */}
                  <span className="text-foreground font-semibold text-xs md:text-sm tracking-wider">
                    {hospital.displayName}
                  </span>
                  {hospital.subtitle && (
                    <span className="text-foreground/60 text-[10px] md:text-xs tracking-wide mt-0.5">
                      {hospital.subtitle}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hospitals;
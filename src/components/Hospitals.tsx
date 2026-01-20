import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import hospitalSirio from "@/assets/hospital-sirio.png";
import hospitalOswaldo from "@/assets/hospital-oswaldo.png";
import hospitalSantaCatarina from "@/assets/hospital-santa-catarina.png";
import hospitalBlanc from "@/assets/hospital-blanc.png";
import hospitalSaoLuiz from "@/assets/hospital-sao-luiz.png";

interface Hospital {
  name: string;
  logo: string;
}

const hospitals: Hospital[] = [
  {
    name: "Hospital Sírio-Libanês",
    logo: hospitalSirio,
  },
  {
    name: "Hospital Alemão Oswaldo Cruz",
    logo: hospitalOswaldo,
  },
  {
    name: "Hospital Santa Catarina",
    logo: hospitalSantaCatarina,
  },
  {
    name: "Hospital Blanc",
    logo: hospitalBlanc,
  },
  {
    name: "São Luiz - Rede D'Or",
    logo: hospitalSaoLuiz,
  },
];

const Hospitals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-28 relative overflow-hidden bg-navy"
    >
      {/* Gold radial gradient background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 20% 50%, hsl(var(--gold)) 0%, transparent 100%)",
        }}
      />
      
      {/* Decorative gold circular lines - Hidden on mobile */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none hidden md:block">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-gold/40 rounded-full"
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

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Mobile: Stack layout / Desktop: Side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant text-white leading-tight">
              Hospitais que{" "}
              <span className="italic text-gradient-gold">operamos</span>:
            </h2>
          </motion.div>

          {/* Hospital Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            {/* Mobile: 2 columns grid / Desktop: Custom rows */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
              {hospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-center justify-center p-3 bg-white rounded-lg shadow-md aspect-[3/2]"
                >
                  <img 
                    src={hospital.logo} 
                    alt={hospital.name}
                    className="max-h-10 w-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* Tablet/Desktop: Custom layout with 2 rows */}
            <div className="hidden md:block space-y-4 lg:space-y-6">
              {/* First row - 2 logos centered */}
              <div className="flex justify-center gap-4 lg:gap-8">
                {hospitals.slice(0, 2).map((hospital, index) => (
                  <motion.div
                    key={hospital.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-center p-4 lg:p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-[160px] lg:w-[180px]"
                  >
                    <img 
                      src={hospital.logo} 
                      alt={hospital.name}
                      className="max-h-12 lg:max-h-14 w-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Second row - 3 logos */}
              <div className="flex justify-center gap-4 lg:gap-8">
                {hospitals.slice(2).map((hospital, index) => (
                  <motion.div
                    key={hospital.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-center p-4 lg:p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-[160px] lg:w-[180px]"
                  >
                    <img 
                      src={hospital.logo}
                      alt={hospital.name}
                      className="max-h-12 lg:max-h-14 w-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hospitals;

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden bg-navy"
    >
      {/* Gold radial gradient background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 20% 50%, hsl(var(--gold)) 0%, transparent 100%)",
        }}
      />
      
      {/* Decorative gold circular lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none">
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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant text-white leading-tight">
              Hospitais que<br />
              <span className="italic text-gradient-gold">operamos</span>:
            </h2>
          </motion.div>

          {/* Right Side - Hospital Logos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* First row - 2 logos centered */}
            <div className="flex justify-center gap-6 md:gap-10">
              {hospitals.slice(0, 2).map((hospital, index) => (
                <motion.div
                  key={hospital.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-center p-4 bg-white/95 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-[140px] md:w-[180px]"
                >
                  <img 
                    src={hospital.logo} 
                    alt={hospital.name}
                    className="max-h-14 md:max-h-16 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Second row - 3 logos */}
            <div className="flex justify-center gap-6 md:gap-10">
              {hospitals.slice(2).map((hospital, index) => (
                <motion.div
                  key={hospital.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-center p-4 bg-white/95 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-[140px] md:w-[180px]"
                >
                  <img 
                    src={hospital.logo}
                    alt={hospital.name}
                    className="max-h-14 md:max-h-16 w-auto object-contain"
                  />
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

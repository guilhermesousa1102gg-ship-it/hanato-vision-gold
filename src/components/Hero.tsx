import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import drMarcelo from "@/assets/dr-marcelo.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;
  const textOpacity = Math.max(1 - scrollY / 600, 0);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full Background with Doctor Image - Asymmetric Layout */}
      <div className="absolute inset-0">
        {/* Base Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        
        {/* Doctor Image - Right Side */}
        <motion.div
          className="absolute right-0 top-0 w-full lg:w-[60%] h-full"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${drMarcelo})`,
              backgroundPosition: "center top",
            }}
          />
          {/* Gradient Overlay on Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 lg:px-12" style={{ opacity: textOpacity }}>
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="section-subtitle">Cirurgia Plástica</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant mb-8 leading-[0.95]"
          >
            <span className="block text-foreground">Dr. Marcelo</span>
            <span className="text-gradient-gold italic">Hanato</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-16 h-px bg-primary mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/60 mb-4 font-light leading-relaxed max-w-lg"
          >
            Membro da Sociedade Brasileira de Cirurgia Plástica
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base text-foreground/40 mb-12 font-light"
          >
            CRM/SP 144721 · RQE 91564
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.link/vjbxr3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Agende sua Consulta
            </a>
            <a
              href="#especialidades"
              className="btn-outline-gold"
            >
              Conheça os Procedimentos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] text-foreground/30 uppercase">Deslize</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default Hero;
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import surgeryScene from "@/assets/surgery-scene.png";

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

  const parallaxOffset = scrollY * 0.4;
  const rotateX = Math.min(scrollY * 0.02, 10);
  const opacity = Math.max(1 - scrollY / 800, 0);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${surgeryScene})`,
              filter: "brightness(0.3) contrast(1.1)",
            }}
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

        {/* Animated Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-primary/30 to-transparent blur-3xl animate-float-slow"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-500/20 to-transparent blur-3xl animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Content */}
      <div
        className="container relative z-10 px-4 lg:px-8 text-center"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg)`,
          opacity,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="section-subtitle inline-block border border-primary/30 px-6 py-2 rounded-full">
            Cirurgia Plástica de Excelência
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight font-playfair"
        >
          <span className="block text-foreground">Dr. Marcelo</span>
          <span className="text-gradient-gold">Hanato</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 font-light"
        >
          Especialista em <span className="text-primary font-medium">Blefaroplastia</span>,{" "}
          <span className="text-primary font-medium">Lipo HD</span> e{" "}
          <span className="text-primary font-medium">Mamoplastia com Sutiã Interno</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto mb-12"
        >
          Transformando vidas através da arte da cirurgia plástica. 
          Resultados naturais que elevam sua autoestima e confiança.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.link/vjbxr3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero rounded-full px-10 py-5"
          >
            Agende sua Consulta
          </a>
          <a
            href="#especialidades"
            className="btn-outline-gold rounded-full px-10 py-5 flex items-center gap-2"
          >
            <Play size={18} />
            Conheça os Procedimentos
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Descubra mais</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

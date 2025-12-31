import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rotation = scrolled * 0.02;
      setRotation(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main Rotating Orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px]"
        style={{ rotate: rotation }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="relative w-full h-full">
          {/* Outer Ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent, hsl(43 74% 49% / 0.08), transparent, hsl(220 60% 40% / 0.05), transparent)`,
            }}
          />
          {/* Inner Ring */}
          <div
            className="absolute inset-12 rounded-full"
            style={{
              background: `conic-gradient(from 180deg, transparent, hsl(43 74% 49% / 0.05), transparent)`,
            }}
          />
        </div>
      </motion.div>

      {/* Secondary Rotating Orb */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px]"
        style={{ rotate: -rotation * 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(from 90deg, transparent, hsl(220 60% 50% / 0.06), transparent)`,
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};

export default AnimatedBackground;

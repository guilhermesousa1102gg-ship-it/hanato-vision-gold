import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroEye from "@/assets/hero-eye.jpg";
import surgeryScene2 from "@/assets/surgery-scene-2.png";

interface VisualBreakProps {
  image: string;
  quote: string;
  author?: string;
  reversed?: boolean;
}

const VisualBreak = ({ image, quote, author, reversed = false }: VisualBreakProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${
          reversed 
            ? 'from-transparent via-background/70 to-background' 
            : 'from-background via-background/70 to-transparent'
        }`} />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className={`max-w-xl ${reversed ? 'ml-auto text-right' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={`w-16 h-px bg-primary mb-8 ${reversed ? 'ml-auto' : ''}`} />
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-cormorant text-foreground leading-relaxed mb-8 italic">
              "{quote}"
            </blockquote>

            {author && (
              <p className="text-sm tracking-[0.2em] text-primary/80 uppercase">
                — {author}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

// Pre-configured visual breaks
export const VisualBreakEye = () => (
  <VisualBreak
    image={heroEye}
    quote="A beleza está nos detalhes. Cada procedimento é uma obra de arte única."
  />
);

export const VisualBreakDoctor = () => (
  <VisualBreak
    image={surgeryScene2}
    quote="Cada procedimento é conduzido com precisão cirúrgica e atenção aos mínimos detalhes."
    author="Dr. Marcelo Hanato"
    reversed
  />
);

export default VisualBreak;
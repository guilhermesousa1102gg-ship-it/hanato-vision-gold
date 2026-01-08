import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import videoDoutor from "@/assets/video-doutor.mp4";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      {/* Video Container - Full Width */}
      <div className="relative w-full aspect-video lg:aspect-[21/9]">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoDoutor} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center px-6 max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs tracking-[0.4em] text-primary/80 uppercase mb-6 block"
            >
              Precisão & Delicadeza
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant text-foreground mb-6 leading-tight"
            >
              A Arte de <span className="text-gradient-gold italic">Rejuvenescer</span> o Olhar
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-24 h-px bg-primary mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-foreground/60 text-lg md:text-xl font-light max-w-2xl mx-auto"
            >
              Cada procedimento é conduzido com técnica cirúrgica impecável, 
              unindo a expertise da cirurgia plástica com a precisão da oftalmologia.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </section>
  );
};

export default VideoSection;

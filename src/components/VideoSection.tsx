import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import videoDoutor from "@/assets/video-doutor.mp4";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      {/* Video Container - Full Width Cinematic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative w-full"
      >
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10" />

        {/* Video Wrapper with Aspect Ratio */}
        <div className="relative w-full aspect-[21/9]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoDoutor} type="video/mp4" />
          </video>

          {/* Subtle Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10 pointer-events-none" />
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10" />
      </motion.div>
    </section>
  );
};

export default VideoSection;

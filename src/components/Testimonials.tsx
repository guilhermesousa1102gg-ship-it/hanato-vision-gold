import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    procedure: "Blefaroplastia",
    text: "Meu olhar rejuvenesceu completamente! Agora consigo passar maquiagem com facilidade e me sinto muito mais confiante. O Dr. Marcelo é extremamente atencioso e profissional.",
    rating: 5,
  },
  {
    name: "Ana P.",
    procedure: "Lipo HD",
    text: "Resultado incrível! A definição corporal ficou muito natural. O acompanhamento pós-operatório foi excepcional, me senti segura durante todo o processo.",
    rating: 5,
  },
  {
    name: "Juliana M.",
    procedure: "Mamoplastia",
    text: "A técnica do sutiã interno fez toda a diferença. Meus seios estão naturais e com excelente sustentação. Posso usar qualquer roupa sem preocupação!",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light/30 via-background to-background" />
      
      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote size={200} className="text-primary" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Depoimentos</span>
          <h2 className="section-title text-foreground mb-4">
            O Que Dizem Nossas <span className="text-gradient-gold">Pacientes</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A satisfação de nossas pacientes é o nosso maior orgulho. 
            Resultados visíveis entre 3 a 6 meses após o procedimento.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote size={32} className="text-primary/50" />
                </div>

                {/* Text */}
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="border-t border-border/30 pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary">{testimonial.procedure}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-card rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-primary">
                    {["M", "A", "J", "C"][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/60">
                Avaliação 5 estrelas no Google
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

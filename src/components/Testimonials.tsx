import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Luana Arilla dos Reis",
    text: "Quero deixar registrada minha imensa gratidão e satisfação com todo o atendimento que recebi desde a primeira consulta até o pós-operatório da minha cirurgia. O doutor demonstrou um cuidado e uma atenção que me deixaram muito segura. Essa escuta atenta e o profissionalismo fizeram toda a diferença.",
    rating: 5,
    time: "2 meses atrás",
  },
  {
    name: "Giovana",
    text: "Sem palavras para o atendimento do Dr Marcelo. Sou nova, mas meu caso era extremamente difícil e delicado por ser pós bariátrica. Desde o primeiro momento senti confiança no dr. Hoje consigo me amar 100% e ficar feliz me olhando no espelho. Com certeza o investimento valeu cada centavo.",
    rating: 5,
    time: "2 meses atrás",
  },
  {
    name: "Margarete Luiz",
    text: "Tive a sorte de ser atendida pelo Dr Marcelo Hanato e não poderia estar mais satisfeita com todo o processo. Desde a primeira consulta, ele demonstrou profissionalismo, empatia e um cuidado genuíno. A atenção aos detalhes e o compromisso com a excelência fazem dele um profissional verdadeiramente diferenciado.",
    rating: 5,
    time: "4 meses atrás",
  },
  {
    name: "Cintia Gomes",
    text: "Hoje fazem 20 dias de pós operatório. Gostaria de expressar minha profunda gratidão ao Dr. Marcelo Hanato pelo excelente trabalho realizado na minha cirurgia de abdominoplastia com lipoaspiração. O resultado superou todas as minhas expectativas, minha cintura está verdadeiramente com forma de violão!",
    rating: 5,
    time: "5 meses atrás",
  },
  {
    name: "Eliane Martins De Oliveira",
    text: "Só gratidão... operei a 72 dias, me amando cada dia mais, fiz abdominoplastia + lipoescultura com enxerto glúteo, dr. incrível, perfeito, super recomendo, dr. de milhões, nota 1000. Excelente profissional, passa muita segurança, atenção total. Resultado excelente.",
    rating: 5,
    time: "2 meses atrás",
  },
  {
    name: "Denise Cristiane Miille",
    text: "Sem palavras Dr. Marcelo excelente profissional sem dúvida. Quando conheci o Dr Marcelo não tive dúvida que seria com ele que iria realizar meu sonho... Muito detalhista, atencioso. Superou minhas expectativas meu Deus estou muito feliz a recuperação está sendo muito tranquila, cicatriz fininha bem feita.",
    rating: 5,
    time: "5 meses atrás",
  },
  {
    name: "Emily Valderrama",
    text: "O Dr. Marcelo foi sem dúvidas uma ótima escolha que eu fiz para a minha primeira cirurgia estética. Ele me deixou segura e confortável a todo momento, prestando extremo apoio sempre que precisei, tanto no pré operatório quanto no pós operatório. O resultado ficou exatamente como eu esperava, mudou totalmente minha autoestima.",
    rating: 5,
    time: "9 meses atrás",
  },
  {
    name: "Jessica Pontes",
    text: "Excelente médico, atencioso, explica tudo muito bem! Detalhista em tudo que faz… confesso que tinha muito medo de me submeter a uma cirurgia, mais confiei no Dr Marcelo, e ele me surpreendeu, um médico muito humano, abençoado e perfeito no que faz!! Podem confiar nele que seu trabalho é excelente!",
    rating: 5,
    time: "8 meses atrás",
  },
  {
    name: "Nathalia Siqueira",
    text: "Realizei minha cirurgia com o Dr Marcelo Hanato vai fazer 30 dias, não tenho como expressar minha enorme gratidão a esse profissional com tamanha excelência! Ele quem foi responsável pela minha mamoplastia de aumento + lipoescultura + abdominoplastia. Me sinto realizada e satisfeita com o trabalho do Dr Marcelo.",
    rating: 5,
    time: "9 meses atrás",
  },
  {
    name: "ItsMacla",
    text: "Dr Marcelo foi o primeiro médico que conheci quando decidi que iria operar, e após a primeira consulta eu já sabia que não precisava procurar mais. Desde o primeiro minuto passou extrema confiança, segurança e aptidão para me ajudar. Percebe-se que realmente se importa com seus pacientes e que ama o que faz.",
    rating: 5,
    time: "10 meses atrás",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={ref} className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="section-subtitle">Depoimentos</span>
          <h2 className="section-title text-foreground">
            Histórias de <span className="text-gradient-gold italic">Transformação</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-foreground/50 max-w-2xl mx-auto mb-4"
        >
          Mais de 100 avaliações 5 estrelas no Google. Confira o que nossas pacientes dizem sobre sua experiência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-1 mb-4"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="text-primary fill-primary" />
          ))}
        </motion.div>
      </div>

      {/* Infinite Scrolling Testimonials */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First Row - Left to Right */}
        <div className="overflow-hidden mb-6">
          <div className="marquee gap-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`row1-${index}`}
                className="testimonial-card flex-shrink-0 w-[380px] md:w-[450px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                  <span className="text-foreground/30 text-xs ml-2">{testimonial.time}</span>
                </div>

                {/* Text */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-foreground/40">Paciente verificada</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="overflow-hidden">
          <div className="marquee marquee-reverse gap-6">
            {[...duplicatedTestimonials].reverse().map((testimonial, index) => (
              <div
                key={`row2-${index}`}
                className="testimonial-card flex-shrink-0 w-[380px] md:w-[450px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                  <span className="text-foreground/30 text-xs ml-2">{testimonial.time}</span>
                </div>

                {/* Text */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-foreground/40">Paciente verificada</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container mx-auto px-6 lg:px-12 mt-16 text-center"
      >
        <a
          href="https://www.google.com/search?q=dr+marcelo+hanato#lrd=0x89ad6d5c90bf4833:0xc1d30014f05c9298,1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold inline-flex items-center gap-3"
        >
          Ver Todas as Avaliações
          <ExternalLink size={16} />
        </a>
      </motion.div>
    </section>
  );
};

export default Testimonials;
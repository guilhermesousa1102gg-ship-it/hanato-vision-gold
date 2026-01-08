import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é a blefaroplastia?",
    answer: "A blefaroplastia é uma cirurgia plástica que corrige o excesso de pele, gordura e flacidez das pálpebras superiores e/ou inferiores. É um dos procedimentos de rejuvenescimento facial mais realizados no mundo, proporcionando um olhar mais jovem e descansado."
  },
  {
    question: "Qual tipo de anestesia é utilizado?",
    answer: "A blefaroplastia geralmente é realizada com anestesia local e sedação, garantindo conforto total durante o procedimento. Em alguns casos, pode-se optar pela anestesia geral. Tudo é avaliado de forma individualizada na consulta."
  },
  {
    question: "Quanto tempo dura a recuperação?",
    answer: "A recuperação da blefaroplastia é relativamente rápida. Os pontos são removidos entre 5 a 7 dias, e a maioria dos pacientes retorna às atividades normais em 7 a 10 dias. Inchaços e hematomas podem durar até 2 semanas, mas são facilmente disfarçados com óculos escuros."
  },
  {
    question: "A cicatriz fica visível?",
    answer: "As cicatrizes da blefaroplastia são praticamente imperceptíveis. Na pálpebra superior, a incisão é feita no sulco natural, ficando escondida quando os olhos estão abertos. Na inferior, pode ser feita por dentro da pálpebra (transconjuntival) ou logo abaixo dos cílios."
  },
  {
    question: "Qual é o diferencial do Dr. Marcelo Hanato?",
    answer: "O Dr. Marcelo Hanato possui formação dupla em Cirurgia Plástica e Oftalmologia, oferecendo uma combinação única de expertise estética e conhecimento profundo da anatomia ocular. Isso resulta em cirurgias mais seguras e resultados mais naturais."
  },
  {
    question: "Como posso agendar uma consulta?",
    answer: "Você pode agendar sua consulta através do WhatsApp clicando nos botões disponíveis neste site, ou entrando em contato diretamente pelo telefone (13) 98182-2406. Atendemos em São Paulo (Vila Mariana), São José dos Campos e Bertioga."
  }
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium to-background" />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Tire suas Dúvidas</span>
            <h2 className="section-title">
              Perguntas <span className="text-gradient-gold italic">Frequentes</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-px bg-primary mx-auto mt-8"
          />
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="border-b border-border/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
              >
                <span className="text-base md:text-lg font-cormorant text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-foreground/60 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/40 mb-6">
            Ainda tem dúvidas sobre blefaroplastia? Entre em contato
          </p>
          <a
            href="https://wa.link/vjbxr3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default FAQ;

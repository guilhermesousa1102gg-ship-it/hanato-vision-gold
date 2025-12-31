import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como é o pós-operatório das cirurgias plásticas?",
    answer: "O pós-operatório varia de acordo com o procedimento realizado. Em geral, recomendamos repouso relativo nos primeiros dias, uso de malhas ou faixas compressivas quando indicado, e acompanhamento próximo com retornos frequentes. O Dr. Marcelo oferece um seguimento diferenciado no pós-operatório, garantindo suporte completo durante toda a recuperação."
  },
  {
    question: "Qual tipo de anestesia é utilizado nos procedimentos?",
    answer: "O tipo de anestesia depende do procedimento e das condições clínicas do paciente. Cirurgias menores podem ser realizadas com anestesia local e sedação, enquanto procedimentos maiores geralmente requerem anestesia geral. Tudo é avaliado de forma individualizada na consulta."
  },
  {
    question: "Quanto tempo dura a recuperação?",
    answer: "Geralmente entre 3 a 6 meses os pacientes já percebem satisfação plena com os resultados. O retorno às atividades cotidianas varia: atividades leves podem ser retomadas em 1-2 semanas, enquanto exercícios físicos intensos geralmente são liberados após 4-6 semanas."
  },
  {
    question: "Como é feita a avaliação inicial?",
    answer: "A consulta inicial é um momento dedicado a ouvir suas expectativas, realizar exame físico detalhado e discutir as opções de tratamento mais adequadas ao seu caso. O Dr. Marcelo acredita que a confiança entre médico e paciente é fundamental para um resultado satisfatório."
  },
  {
    question: "O Dr. Marcelo atende em quais regiões?",
    answer: "O Dr. Marcelo atende em São Paulo (Vila Mariana), São José dos Campos (diversas regiões) e Bertioga. Cada unidade oferece estrutura completa para consultas e acompanhamento pós-operatório."
  },
  {
    question: "Como posso agendar uma consulta?",
    answer: "Você pode agendar sua consulta através do WhatsApp clicando nos botões disponíveis neste site, ou entrando em contato diretamente pelo telefone (13) 98182-2406. Nossa equipe terá prazer em encontrar o melhor horário para você."
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
    <section id="faq" ref={ref} className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium to-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
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
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-cormorant text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
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
            Ainda tem dúvidas? Entre em contato conosco
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

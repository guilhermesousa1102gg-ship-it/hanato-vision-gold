import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import bookCover from "@/assets/book-atlas-oculoplastica.png";

const BookSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
                <img
                  src={bookCover}
                  alt="Atlas de Oculoplástica da UNICAMP"
                  className="relative w-48 sm:w-56 md:w-64 h-auto rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  Autor de Capítulo
                </span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-4">
                Atlas de Oculoplástica da UNICAMP
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Dr. Marcelo Hanato é coautor de capítulo desta obra de referência 
                em oculoplástica, editada pela <span className="text-foreground font-medium">Cultura Médica</span>. 
                O livro reúne os principais especialistas da área e é reconhecido 
                como material de referência para profissionais e residentes.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm text-muted-foreground">
                <span className="px-3 py-1 bg-background rounded-full border border-border">
                  Gustavo Büchele Rodrigues
                </span>
                <span className="px-3 py-1 bg-background rounded-full border border-border">
                  Marcelo Torigoe
                </span>
                <span className="px-3 py-1 bg-background rounded-full border border-border">
                  Roberto Caldato
                </span>
                <span className="px-3 py-1 bg-background rounded-full border border-border">
                  Newton Kara-José
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSection;

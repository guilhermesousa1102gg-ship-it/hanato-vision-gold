import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import procLaserCo2 from "@/assets/proc-laser-co2.png";
import procLipoenxertia from "@/assets/proc-lipoenxertia.png";
import procCantopexia from "@/assets/proc-cantopexia.png";
import procTemporalLift from "@/assets/proc-temporal-lift.png";

interface Procedure {
  id: string;
  title: string;
  description: string[];
  image: string;
  featured?: boolean;
}
const mainProcedure: Procedure = {
  id: "blefaroplastia-co2",
  title: "Blefaroplastia com Laser CO2",
  description: [
    "Saiba mais sobre o procedimento que eu mais realizo.",
    "A blefaroplastia com laser de CO2 é uma técnica avançada que combina a precisão cirúrgica com os benefícios do laser para rejuvenescimento das pálpebras.",
    "O laser de CO2 permite uma incisão mais precisa, com menor sangramento e uma recuperação mais rápida, além de estimular a produção de colágeno para resultados mais naturais e duradouros."
  ],
  image: procLaserCo2,
  featured: true,
};

const associatedProcedures: Procedure[] = [
  {
    id: "resurfacing",
    title: "Resurfacing com Laser de CO2 Fracionado",
    description: [
      "O laser de CO2 fracionado é um procedimento estético recomendado para melhorar as rugas em volta dos olhos (periorbitais), rugas finas em geral, para melhorar o envelhecimento ligado à exposição aos raios solares (fotoenvelhecimento), para melhorar a aspereza da pele, cicatrizes da acne e das manchas.",
      "O laser de CO2 atinge a epiderme, a camada superficial da pele, e derme (camada profunda).",
      "Na epiderme, o laser tem um efeito de peeling, já que ela irá descamar, em um processo de renovação celular. Já na derme, haverá estimulação da produção de colágeno e retração das fibras do colágeno já existentes.",
      "Como resultado, a pele irá ficar mais lisa, esticada, mais luminosa, com a melhora das manchas, rugas e cicatrizes.",
      "Realizamos essa técnica em todos os pacientes que não tem contra-indicação para estímulo de colágeno e melhora da qualidade da pele."
    ],
    image: procLaserCo2,
  },
  {
    id: "lipoenxertia",
    title: "Lipoenxertia",
    description: [
      "O preenchimento facial com gordura (lipoenxertia) é indicado para volumização de áreas específicas da face, comprometidas ao longo do processo de envelhecimento.",
      "Visa contribuir para o rejuvenescimento facial, restaurando a harmonia do contorno e o equilíbrio dos elementos faciais.",
      "Basicamente, é um procedimento que pode ser feito tanto no rosto quanto no corpo. Um dos diferenciais da técnica está em sua durabilidade, sendo considerado definitivo.",
      "O enxerto de gordura, ou preenchimento, é feito com a própria gordura do paciente, depois da mesma ser preparada pelo cirurgião plástico para este fim."
    ],
    image: procLipoenxertia,
  },
  {
    id: "cantopexia",
    title: "Cantopexia",
    description: [
      "A cantopexia é um procedimento em que a pálpebra inferior é suspensa ao rebordo lateral da órbita por meio de uma sutura, sem modificação do canto lateral.",
      "É realizada quando a frouxidão palpebral não é tão importante.",
      "Em resumo, é uma técnica que reposiciona os cantos laterais, corrigindo e prevenindo o mal posicionamento das pálpebras.",
      "Outra indicação para o procedimento acontece quando o paciente deseja elevar o posicionamento da pálpebra inferior, deixando o olhar mais atraente. Muitas vezes é realizado em conjunto com o fox eyes.",
      "Esse procedimento confere o famoso efeito do 'olhar amendoado'."
    ],
    image: procCantopexia,
  },
  {
    id: "temporal-lift",
    title: "Temporal Lift",
    description: [
      "O lift é um excelente procedimento para o levantamento das sobrancelhas.",
      "Se o aspecto das suas sobrancelhas te incomodam ou se tem a sensação de olhar 'caído', entenda sobre o Temporal Lift e como ele pode ajudar na melhora da aparência!",
      "O Temporal Lift é um procedimento que visa elevar ou reposicionar os supercílios.",
      "Frequentemente, o Temporal Lift pode ser associado a outros procedimentos, como ritidoplastia (cirurgia plástica de rejuvenescimento da face) ou blefaroplastia (cirurgia das pálpebras), para que o resultado seja ainda mais completo."
    ],
    image: procTemporalLift,
  },
];

const Procedures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="procedimentos"
      ref={ref}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/30 to-background" />
      
      {/* Subtle star pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-1/3 w-0.5 h-0.5 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Procedimentos</span>
          <h2 className="section-title text-foreground">
            Nossos <span className="text-gradient-gold italic">Procedimentos</span>
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-8" />
        </motion.div>

        {/* Two Column Layout - Main and Associated */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Procedure - Blefaroplastia CO2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 text-primary/20 text-lg font-cormorant">/</div>
            <h3 className="text-2xl md:text-3xl font-cormorant text-foreground mb-4 pl-4">
              {mainProcedure.title}
            </h3>
            <p className="text-sm text-foreground/50 mb-6 pl-4 italic">
              {mainProcedure.description[0]}
            </p>
            
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden mb-6">
              <img
                src={mainProcedure.image}
                alt={mainProcedure.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.link/vjbxr3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm tracking-wider uppercase"
            >
              Saiba Mais Por Aqui
              <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>

        {/* Individual Procedure Cards */}
        <div className="mt-20 space-y-20">
          {associatedProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative aspect-[4/5] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={procedure.image}
                  alt={procedure.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  <div className="absolute -left-4 top-0 text-primary/20 text-lg font-cormorant">/</div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-cormorant text-foreground mb-6 pl-4">
                    {procedure.title}
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {procedure.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground/60 text-sm md:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <a
                  href="https://wa.link/vjbxr3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm tracking-wider uppercase"
                >
                  Agende uma Consulta
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
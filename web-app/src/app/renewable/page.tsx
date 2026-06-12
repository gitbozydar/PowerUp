"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const solutions = [
  {
    title: "Fotowoltaika",
    description:
      "Projektujemy i wspieramy wdrożenia instalacji fotowoltaicznych dla firm. Analizujemy profil zużycia energii, dobieramy odpowiednią moc instalacji oraz pomagamy maksymalnie wykorzystać potencjał produkcji energii ze słońca.",
  },
  {
    title: "Magazyny energii",
    description:
      "Magazyny energii pozwalają zwiększyć autokonsumpcję energii z fotowoltaiki, ograniczyć koszty związane ze szczytowym poborem mocy oraz zwiększyć bezpieczeństwo energetyczne przedsiębiorstwa.",
  },
  {
    title: "Doradztwo inwestycyjne",
    description:
      "Wspieramy firmy na każdym etapie inwestycji — od analizy opłacalności i doboru technologii po możliwości finansowania oraz koordynację procesu wdrożenia.",
  },
];

const benefits = [
  {
    title: "Niższe koszty",
    description:
      "Zmniejszenie wydatków na energię elektryczną dzięki własnej produkcji energii.",
  },
  {
    title: "Niezależność",
    description:
      "Mniejsze uzależnienie od wahań cen energii oraz zmian na rynku.",
  },
  {
    title: "ESG",
    description:
      "Realizacja celów środowiskowych i budowanie nowoczesnego wizerunku firmy.",
  },
];

const Renewable = () => {
  return (
    <section className="w-full py-28 overflow-hidden">
      <div className="w-full flex flex-col gap-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[3px] text-white/70 text-sm font-medium mb-4"
          >
            Odnawialne źródła energii
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
          >
            Energia przyszłości dla Twojej firmy.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            Pomagamy przedsiębiorstwom ograniczać koszty energii i budować
            niezależność energetyczną poprzez wdrażanie nowoczesnych rozwiązań
            OZE. Doradzamy, analizujemy opłacalność inwestycji oraz wspieramy
            realizację projektów od pomysłu aż po uruchomienie.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={fadeUp}
              className="group rounded-4xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 text-white transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
            >
              <h2 className="text-3xl font-bold mb-6">{solution.title}</h2>

              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Dlaczego warto inwestować w OZE?
            </h2>

            <p className="text-white/70 text-lg leading-relaxed">
              Rosnące ceny energii sprawiają, że coraz więcej firm decyduje się
              na inwestycje w odnawialne źródła energii. Fotowoltaika i magazyny
              energii pozwalają zwiększyć kontrolę nad kosztami działalności,
              poprawić bezpieczeństwo energetyczne oraz zwiększyć
              konkurencyjność przedsiębiorstwa.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>

                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-4xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Kompleksowe wsparcie OZE
          </h2>

          <p className="text-white/70 max-w-4xl mx-auto text-lg leading-relaxed">
            Niezależnie od tego, czy planujesz instalację fotowoltaiczną,
            wdrożenie magazynu energii czy analizę możliwości inwestycyjnych,
            pomagamy znaleźć rozwiązania dopasowane do potrzeb Twojej firmy.
            Skupiamy się na efektywności ekonomicznej, bezpieczeństwie oraz
            długoterminowych korzyściach wynikających z transformacji
            energetycznej.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Renewable;

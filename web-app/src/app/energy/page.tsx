"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Energy = () => {
  return (
    <section className="w-full py-28 px-6 flex justify-center overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col gap-24 text-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[4px] text-white/60 text-sm"
          >
            Energia i gaz
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Kontroluj koszty energii w firmie
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Optymalizujemy umowy, analizujemy rynek i negocjujemy warunki, aby
            Twoje koszty energii były przewidywalne i niższe.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">
            Analiza i optymalizacja
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/70 leading-relaxed">
            Sprawdzamy Twoje umowy i zużycie energii, aby znaleźć miejsca, gdzie
            realnie tracisz pieniądze.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { value: "15–30%", label: "średnie oszczędności" },
            { value: "24h", label: "czas analizy" },
            { value: "0 zł", label: "weryfikacja" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center"
            >
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-white/60 text-sm mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-3xl" />

          <div className="relative grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Stały monitoring rynku",
                desc: "Reagujemy na zmiany cen energii i gazu w czasie rzeczywistym.",
              },
              {
                title: "Negocjacje z dostawcami",
                desc: "Uzyskujemy lepsze warunki bez zmiany jakości dostaw.",
              },
              {
                title: "Strategia zakupowa",
                desc: "Dobieramy model zakupu energii do profilu Twojej firmy.",
              },
              {
                title: "Stabilność kosztów",
                desc: "Minimalizujemy ryzyko nagłych wzrostów cen.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-white/10
                  hover:border-white/20
                "
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Energy;

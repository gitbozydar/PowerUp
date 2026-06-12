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

const Concierge = () => {
  return (
    <section className="w-full py-28 px-6 flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col gap-24 text-white">
        {/* HERO */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center flex flex-col gap-6"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[4px] text-white/60 text-sm"
          >
            Concierge energetyczny
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Zewnętrzny dział energii Twojej firmy
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Przejmujemy pełną kontrolę nad energią w Twojej firmie — od
            strategii zakupowej, przez negocjacje, aż po stały monitoring rynku.
          </motion.p>
        </motion.div>

        {/* CORE VALUE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">
            Jedna usługa. Pełna kontrola.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/70 leading-relaxed">
            Concierge to stała opieka energetyczna dla firm, które chcą
            przewidywalnych kosztów i spokoju operacyjnego.
          </motion.p>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { value: "24/7", label: "monitoring rynku" },
            { value: "1", label: "dedykowany opiekun" },
            { value: "0 stresu", label: "po naszej stronie" },
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

        {/* PREMIUM FEATURES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-3xl" />

          <div className="relative grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Strategia zakupowa energii",
                desc: "Dobieramy model zakupu do Twojego profilu zużycia i ryzyka.",
              },
              {
                title: "Negocjacje umów",
                desc: "Prowadzimy rozmowy z dostawcami, aby obniżyć koszty.",
              },
              {
                title: "Monitoring rynku 24/7",
                desc: "Reagujemy na zmiany cen i warunków w czasie rzeczywistym.",
              },
              {
                title: "Koordynacja wszystkich działań",
                desc: "Jeden punkt kontaktu dla całej energetyki w firmie.",
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

export default Concierge;

"use client";

import ContactForm from "@/components/ContactForm";
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

const Audit = () => {
  return (
    <section className="w-full min-h-screen py-28 flex items-center justify-center overflow-hidden">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-8 text-white"
        >
          <div className="flex flex-col gap-4">
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[3px] text-white/70 text-sm font-medium"
            >
              Audyt energetyczny
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-bold leading-tight max-w-xl"
            >
              Obniż koszty energii w swojej firmie.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-white/70 text-lg max-w-lg leading-relaxed"
            >
              Sprawdzimy gdzie Twoja firma traci energię i pokażemy realne
              możliwości oszczędności. Przygotujemy analizę zużycia,
              zoptymalizujemy koszty i pomożemy wdrożyć najlepsze rozwiązania.
            </motion.p>
          </div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
            >
              <p className="text-3xl font-bold">20%</p>
              <p className="text-white/60 text-sm mt-2">
                średnia redukcja kosztów
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
            >
              <p className="text-3xl font-bold">48h</p>
              <p className="text-white/60 text-sm mt-2">
                czas pierwszej analizy
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
            >
              <p className="text-3xl font-bold">100+</p>
              <p className="text-white/60 text-sm mt-2">
                przeprowadzonych audytów
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full rounded-4xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl"
        >
          <div className="mb-8 flex flex-col gap-2 text-white">
            <h2 className="text-3xl font-bold">Darmowa konsultacja</h2>

            <p className="text-white/60">
              Wypełnij formularz i skontaktujemy się z Tobą.
            </p>
          </div>

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Audit;

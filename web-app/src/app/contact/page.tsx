"use client";

import { motion } from "framer-motion";
import { Building2, FileText, MapPin, Phone, Mail } from "lucide-react";

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

const Contact = () => {
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
              Kontakt
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-bold leading-tight max-w-xl"
            >
              Porozmawiajmy o niższych kosztach energii.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-white/70 text-lg max-w-lg leading-relaxed"
            >
              Skontaktuj się z nami i sprawdź, jak możemy pomóc Twojej firmie
              zoptymalizować wydatki związane z energią elektryczną i gazem.
              Odpowiemy na Twoje pytania i przygotujemy najlepsze rozwiązanie.
            </motion.p>
          </div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                p-5
              "
            >
              <Phone className="mb-4 h-6 w-6 text-white" />

              <p className="text-sm text-white/60">Telefon</p>

              <p className="mt-1 font-semibold text-lg">+48 794 777 585</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                p-5
              "
            >
              <Mail className="mb-4 h-6 w-6 text-white" />

              <p className="text-sm text-white/60">Email</p>

              <p className="mt-1 font-semibold text-lg">kontakt@gopowerup.pl</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            w-full
            rounded-4xl
            border border-white/10
            bg-white/10
            backdrop-blur-xl
            p-8
            shadow-2xl
          "
        >
          <div className="mb-8 flex flex-col gap-2 text-white">
            <h2 className="text-3xl font-bold">Dane firmy</h2>

            <p className="text-white/60">
              Informacje rejestrowe oraz kontaktowe.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-white">
            <div className="flex gap-4 items-start">
              <Building2 className="h-6 w-6 text-white/70 mt-1" />

              <div>
                <p className="text-sm text-white/60">Nazwa firmy</p>

                <p className="font-semibold">
                  Powerup Energy Consulting Sp. z o.o.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MapPin className="h-6 w-6 text-white/70 mt-1" />

              <div>
                <p className="text-sm text-white/60">Adres</p>

                <p className="font-semibold">
                  Aleja Niepodległości 245 / 17, 02-009 Warszawa, Polska
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FileText className="h-6 w-6 text-white/70 mt-1" />

              <div>
                <p className="text-sm text-white/60">Dane rejestrowe</p>

                <p className="font-semibold">NIP: 5243060039</p>
                <p className="font-semibold">REGON: 543655597</p>

                <p className="font-semibold">KRS: 0001211902</p>
              </div>
            </div>

            <a
              href="tel:+48794777585"
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-accent
                px-6
                py-4
                font-semibold
                transition-all
                duration-300
                hover:bg-accent-hover
                hover:-translate-y-1
              "
            >
              <Phone className="h-5 w-5" />
              Zadzwoń do nas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

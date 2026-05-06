"use client";

import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { FaArrowDownLong } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="flex flex-col gap-12">
      <section className="relative h-screen w-full text-white font-primary">
        <div className="relative z-10 h-full grid grid-rows-3 place-items-center px-6 py-10">
          <div className="row-start-2 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">PowerUp</h1>

            <p className="text-lg md:text-xl text-white/80">
              Nowoczesne zarządzanie energią
            </p>
          </div>
          <div className="row-start-3 self-end flex flex-col gap-8">
            <Button
              onClick={() => {
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white rounded-full border hover:bg-border text-accent border-gray-600/20 px-2 py-6 animate-bounce"
            >
              <FaArrowDownLong />
            </Button>
          </div>
        </div>
      </section>
      <section id="hero" className="container bg-gray-50 py-20 px-6 mt-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Jak to działa?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">1. Analiza</h3>
              <p className="text-secondary">
                Zbieramy dane dotyczące zużycia energii i identyfikujemy obszary
                strat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">2. Optymalizacja</h3>
              <p className="text-secondary">
                System dobiera najlepsze rozwiązania i dostawców.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">3. Oszczędności</h3>
              <p className="text-secondary">
                Realne zmniejszenie kosztów i większa kontrola nad energią.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-">
            <div className="p-6 border rounded-2xl">
              <p className="text-4xl font-bold text-accent">+1200</p>
              <p className="text-secondary mt-2">obsługiwanych klientów</p>
            </div>

            <div className="p-6 border rounded-2xl">
              <p className="text-4xl font-bold text-accent">-32%</p>
              <p className="text-secondary mt-2">średnie oszczędności</p>
            </div>

            <div className="p-6 border rounded-2xl">
              <p className="text-4xl font-bold text-accent">24/7</p>
              <p className="text-secondary mt-2">monitoring systemu</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Zaawansowana analiza danych</h2>

            <p className="text-secondary">
              Nasza platforma analizuje dane w czasie rzeczywistym, wykrywając
              nieefektywności i sugerując konkretne działania optymalizacyjne.
            </p>

            <ul className="flex flex-col gap-3 text-secondary">
              <li>✔ monitoring w czasie rzeczywistym</li>
              <li>✔ automatyczne raporty</li>
              <li>✔ integracja z systemami</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl border shadow-sm text-center">
            <p className="text-5xl font-bold text-accent mb-2">AI</p>
            <p className="text-secondary">
              Inteligentne algorytmy optymalizujące zużycie energii
            </p>
          </div>
        </div>
      </section>
      <section className="text-white container flex-col">
        <h2 className="text-3xl font-bold mb-4">
          Zacznij kontrolować swoją energię
        </h2>
        <p className="text-white/70 mb-6">Szybko. Prosto. Efektywnie.</p>
        <ContactForm />
      </section>
    </div>
  );
};

export default Page;

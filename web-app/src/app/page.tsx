"use client";

import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiCheck } from "react-icons/hi";

const Page = () => {
  const services = [
    {
      id: "01",
      label: "Energia i gaz",
      title: "Negocjuj lepsze warunki zakupu energii.",
      description:
        "Analizujemy obecne umowy i porównujemy oferty sprzedawców, aby zapewnić Twojej firmie najkorzystniejsze stawki oraz stabilność kosztów.",
      features: [
        "analiza taryf i stawek",
        "porównanie ofert rynkowych",
        "wsparcie w negocjacjach",
      ],
      href: "/energy",
    },
    {
      id: "02",
      label: "Audyt energetyczny",
      title: "Zobacz, gdzie Twoja firma traci energię.",
      description:
        "Identyfikujemy obszary nieefektywności i wskazujemy konkretne działania, które przekładają się na realne oszczędności.",
      features: [
        "analiza profilu zużycia",
        "rekomendacje optymalizacji",
        "raport oszczędności",
      ],
      href: "/audit",
    },
    {
      id: "03",
      label: "OZE",
      title: "Inwestuj w niezależność energetyczną.",
      description:
        "Doradzamy przy wdrażaniu fotowoltaiki, magazynów energii i innych rozwiązań OZE dopasowanych do potrzeb Twojej firmy.",
      features: [
        "analiza opłacalności",
        "dobór technologii",
        "wsparcie inwestycyjne",
      ],
      href: "/renewable",
    },
    {
      id: "04",
      label: "Consierge",
      title: "Zyskaj zewnętrzny dział energii dla swojej firmy.",
      description:
        "Zapewniamy stałą opiekę energetyczną — monitorujemy rynek, negocjujemy warunki, koordynujemy działania i dbamy o optymalizację kosztów energii w Twojej firmie.",
      features: [
        "dedykowany opiekun energetyczny",
        "monitoring umów i rynku",
        "strategia zakupowa energii",
        "koordynacja wszystkich usług energetycznych",
      ],
      href: "/consierge",
    },
  ];

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
              className="bg-white rounded-full text-accent px-2 py-6 animate-bounce transition hover:bg-white/80"
            >
              <FaArrowDownLong />
            </Button>
          </div>
        </div>
      </section>
      <section id="hero" className="container py-20 px-6 mt-4">
        <div className="flex flex-col gap-16">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[4px] text-white/85 text-md font-medium mb-4">
              Nasze usługi
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Cztery ścieżki do niższych kosztów energii.
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Pomagamy firmom skutecznie zarządzać energią — od optymalizacji
              zakupu energii i gazu, przez audyty energetyczne, aż po wdrożenia
              odnawialnych źródeł energii.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group rounded-4xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 text-white shadow-2xl flex flex-col transition-all duration-500 ease-out hover:-translate-y-3 hover:bg-white/20 hover:border-white/20 hover:shadow-[0_30px_90px_rgba(255,255,255,0.12)]"
              >
                <div className="mb-8">
                  <p className="text-5xl font-bold text-white mb-4 transition-opacity duration-300 group-hover:opacity-100">
                    {service.id}
                  </p>

                  <p className="uppercase tracking-[3px] text-white/70 text-lg font-medium transition-colors duration-300 group-hover:text-white/80">
                    {service.label}
                  </p>
                </div>

                <h3 className="text-3xl font-bold mb-4 leading-tight transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-relaxed mb-8 flex-1 transition-colors duration-300 group-hover:text-white/90">
                  {service.description}
                </p>

                <div className="flex flex-col gap-3 text-sm text-white/70 mb-8 transition-colors duration-300 group-hover:text-white/90">
                  {service.features.map((feature) => (
                    <span className="flex items-center gap-2" key={feature}>
                      <HiCheck />
                      {feature}
                    </span>
                  ))}
                </div>
                <Link href={service.href} className="w-max">
                  <Button variant="ghost" className="w-fit gap-0.5 border-none">
                    <p>Dowiedz się więcej</p>
                    <MdKeyboardArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            ))}
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

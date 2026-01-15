import { ClipboardList, Search, FileSignature, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Wyślij fakturę",
    description: "Prześlij nam swoją aktualną fakturę za energię.",
  },
  {
    icon: Search,
    step: "02",
    title: "Analizujemy",
    description: "Porównujemy oferty wszystkich dostawców na rynku.",
  },
  {
    icon: FileSignature,
    step: "03",
    title: "Podpisujesz",
    description: "Wybierasz najlepszą ofertę i podpisujesz umowę.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Oszczędzasz",
    description: "Cieszysz się niższymi rachunkami za prąd i gaz.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jak to <span className="text-gradient">działa</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cztery proste kroki do niższych rachunków za energię.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}
                
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-cta rounded-2xl mb-6 shadow-button">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { Wallet, Clock, Users, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Do 30% oszczędności",
    description: "Negocjujemy najlepsze stawki dzięki dużej skali działania i relacjom z dostawcami.",
  },
  {
    icon: Clock,
    title: "Oszczędność czasu",
    description: "Zajmujemy się wszystkimi formalnościami. Ty tylko podpisujesz umowę.",
  },
  {
    icon: Users,
    title: "Indywidualne podejście",
    description: "Analizujemy Twoje zużycie i dobieramy ofertę dopasowaną do Twoich potrzeb.",
  },
  {
    icon: FileCheck,
    title: "Przejrzyste warunki",
    description: "Żadnych ukrytych kosztów. Wszystko jest jasne i zrozumiałe od pierwszego dnia.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dlaczego <span className="text-gradient">PowerUp</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Od lat pomagamy firmom i gospodarstwom domowym obniżać koszty energii.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 bg-gradient-cta rounded-xl flex items-center justify-center mb-5 group-hover:animate-pulse-glow transition-all">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

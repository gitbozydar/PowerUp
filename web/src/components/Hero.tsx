import { Zap, TrendingDown, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float animate-delay-200" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-8 opacity-0 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">
              Lider rynku energii w Polsce
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 opacity-0 animate-fade-up animate-delay-100">
            Oszczędź nawet do <span className="text-gradient">30%</span>
            <br />
            na rachunkach za energię
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animate-delay-200">
            PowerUp to Twój zaufany pośrednik energii. Negocjujemy najlepsze
            stawki u dostawców, abyś Ty mógł płacić mniej.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-up animate-delay-300">
            <button className="bg-gradient-cta text-primary-foreground shadow-button hover:opacity-90 transition-opacity text-lg px-8 py-5 rounded-2xl">
              Oblicz swoją oszczędność
            </button>
            <button
              className="border border-opacity-0 hover:border hover:border-primary text-primary 
             transition-colors ease-in-out duration-300 text-lg px-8 py-5 rounded-2xl"
            >
              Dowiedz się więcej
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 opacity-0 animate-fade-up animate-delay-400">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingDown className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Niższe rachunki</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Bezpieczne umowy</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                Szybka zmiana dostawcy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

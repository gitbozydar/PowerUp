import { ArrowRight, Phone, Mail } from "lucide-react";
import Button from "@mui/material/Button";

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards" }}
          >
            Gotowy zaoszczędzić na energii?
          </h3>
          <p
            className="text-xl text-primary-foreground/90 mb-10 opacity-0 animate-fade-up animate-delay-100"
            style={{ animationFillMode: "forwards" }}
          >
            Skontaktuj się z nami już dziś i sprawdź, ile możesz zaoszczędzić.
            Bezpłatna analiza Twojej faktury!
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-up animate-delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <button className="bg-white flex items-center rounded-lg text-primary hover:bg-white/90 text-lg px-8 py-3 group">
              Bezpłatna wycena
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center text-primary-foreground/90 opacity-0 animate-fade-up animate-delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            <a
              href="tel:+48123456789"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+48 123 456 789</span>
            </a>
            <a
              href="mailto:kontakt@powerup.pl"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>kontakt@powerup.pl</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

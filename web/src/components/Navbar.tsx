import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl text-gradient font-bold">
              Go<span className="text-primary">PowerUp</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#korzyści"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Korzyści
            </a>
            <a
              href="#jak-to-działa"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Jak to działa
            </a>
            <a
              href="#kontakt"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </a>
            <button className="bg-gradient-cta px-6 py-2 rounded-lg text-primary-foreground shadow-button hover:opacity-90">
              Bezpłatna wycena
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#korzyści"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Korzyści
              </a>
              <a
                href="#jak-to-działa"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Jak to działa
              </a>
              <a
                href="#kontakt"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Kontakt
              </a>
              <button className="flex justify-center rounded-full bg-gradient-cta text-primary-foreground shadow-button hover:opacity-90 transition-opacity text-lg px-8 py-4">
                Bezpłatna wycena
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="korzyści">
          <Benefits />
        </section>
        <section id="jak-to-działa">
          <HowItWorks />
        </section>
        <section id="kontakt">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

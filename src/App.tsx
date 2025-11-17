import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ServicesSection } from "./components/ServicesSection";
import { FounderSection } from "./components/FounderSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

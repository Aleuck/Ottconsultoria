import { Button } from "./ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="px-6 py-20 md:py-32" style={{ backgroundColor: '#F5F1E9' }}>
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Headline */}
        <h1
          className="font-serif leading-tight"
          style={{
            color: '#0A2342',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)'
          }}
        >
          Sua marca está com dor?
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto leading-relaxed"
          style={{
            color: '#333333',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)'
          }}
        >
          A única consultoria que integra Design, Direito e Comunicação para diagnosticar e curar sua reputação.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            onClick={() => scrollToSection('servicos')}
            className="px-8 py-6 tracking-wide transition-all hover:opacity-90"
            style={{
              backgroundColor: '#000080',
              color: '#F5F1E9',
              border: 'none'
            }}
          >
            PRONTO-SOCORRO (Agir na Crise)
          </Button>

          <Button
            onClick={() => scrollToSection('servicos')}
            variant="outline"
            className="px-8 py-6 tracking-wide transition-all hover:bg-opacity-5"
            style={{
              backgroundColor: 'transparent',
              color: '#AE9461',
              borderColor: '#AE9461',
              borderWidth: '2px'
            }}
          >
            CHECK-UP (Prevenir Riscos)
          </Button>
        </div>
      </div>
    </section>
  );
}

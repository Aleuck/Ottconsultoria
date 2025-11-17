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
            className="px-8 py-6 tracking-wide transition-all"
            style={{
              backgroundColor: '#000080',
              color: '#F5F1E9',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0000a8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000080';
            }}
          >
            PRONTO-SOCORRO (Agir na Crise)
          </Button>

          <Button
            onClick={() => scrollToSection('servicos')}
            variant="outline"
            className="px-8 py-6 tracking-wide transition-all"
            style={{
              backgroundColor: 'transparent',
              color: '#7e6a43',
              borderColor: '#AE9461',
              borderWidth: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(174, 148, 97, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            CHECK-UP (Prevenir Riscos)
          </Button>
        </div>
      </div>
    </section>
  );
}
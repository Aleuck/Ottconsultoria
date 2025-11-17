import { Button } from "./ui/button";
import OttLogo from "../imports/OttLogo";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 px-6 py-3" style={{ backgroundColor: '#F5F1E9' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-[120px] h-auto">
          <OttLogo className="w-full h-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('solucao')}
            className="transition-opacity hover:opacity-70"
            style={{ color: '#333333' }}
          >
            A Tríade (Solução)
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="transition-opacity hover:opacity-70"
            style={{ color: '#333333' }}
          >
            Serviços (Tratamento)
          </button>
          <button
            onClick={() => scrollToSection('fundador')}
            className="transition-opacity hover:opacity-70"
            style={{ color: '#333333' }}
          >
            O Fundador
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="transition-opacity hover:opacity-70"
            style={{ color: '#333333' }}
          >
            Contato
          </button>
          <Button
            onClick={() => scrollToSection('contato')}
            className="px-6 py-2 transition-all hover:opacity-90"
            style={{
              backgroundColor: '#AE9461',
              color: '#0A2342'
            }}
          >
            Agendar Consulta
          </Button>
        </nav>
      </div>
    </header>
  );
}
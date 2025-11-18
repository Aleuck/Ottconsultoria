import { ImageWithFallback } from "./figma/ImageWithFallback";
import founderImage from "@/assets/founder.jpg";

export function FounderSection() {
  return (
    <section id="fundador" className="px-6 py-20 md:py-32" style={{ backgroundColor: '#F5F1E9' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="font-serif text-center mb-16"
          style={{
            color: '#0A2342',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          O Nosso Corpo Clínico.
        </h2>

        {/* Two Columns Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Photo */}
          <div className="flex justify-center md:justify-end">
            <div
              className="w-80 h-80 overflow-hidden"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #0A2342' }}
            >
              <img
                src={founderImage}
                alt="Carlos Ott"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2: Bio */}
          <div className="space-y-6">
            <h3 className="font-serif" style={{ color: '#0A2342', fontSize: '2rem' }}>
              Carlos Ott
            </h3>

            <p style={{ color: '#AE9461', fontSize: '1.125rem' }}>
              Sócio-Fundador | Designer & Advogado
            </p>

            <p className="leading-relaxed" style={{ color: '#333333', fontSize: '1.0625rem' }}>
              A Ott nasceu da minha experiência real nas duas frentes. Como Designer, entendo o poder da forma e da criatividade. Como Advogado, sei o rigor da lei e o peso da reputação. Criei a Ott para ser a consultoria que eu nunca consegui encontrar: um lugar que une precisão técnica com empatia clínica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ArrowRight, ArrowDown } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="px-6 py-20 md:py-32" style={{ backgroundColor: '#F5F1E9' }}>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2
          className="font-serif text-center mb-8"
          style={{
            color: '#0A2342',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          O Diagnóstico Fragmentado.
        </h2>

        {/* Description */}
        <p
          className="text-center max-w-3xl mx-auto mb-16 leading-relaxed"
          style={{
            color: '#333333',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)'
          }}
        >
          O mercado é fragmentado. Em uma crise, você é forçado a contratar um designer, um advogado e um gestor de crise que não se falam. Isso gera desalinhamento, custos altos e risco para sua reputação.
        </p>

        {/* Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Box 1: Design */}
          <div
            className="w-40 h-40 flex items-center justify-center border-2 relative"
            style={{ borderColor: '#0A2342', backgroundColor: '#FFFFFF' }}
          >
            <span style={{ color: '#0A2342' }}>Design</span>
            <ArrowRight
              className="hidden md:block absolute -right-10"
              style={{ color: '#333333' }}
            />
            <ArrowDown
              className="md:hidden absolute -bottom-6"
              style={{ color: '#333333' }}
            />
          </div>

          {/* Box 2: Direito */}
          <div
            className="w-40 h-40 flex items-center justify-center border-2 relative"
            style={{ borderColor: '#0A2342', backgroundColor: '#FFFFFF' }}
          >
            <span style={{ color: '#0A2342' }}>Direito</span>
            <ArrowRight
              className="hidden md:block absolute -right-10"
              style={{ color: '#333333' }}
            />
            <ArrowDown
              className="md:hidden absolute -bottom-6"
              style={{ color: '#333333' }}
            />
          </div>

          {/* Box 3: Comunicação */}
          <div
            className="w-40 h-40 flex items-center justify-center border-2 relative"
            style={{ borderColor: '#0A2342', backgroundColor: '#FFFFFF' }}
          >
            <span style={{ color: '#0A2342' }}>Comunicação</span>
            <ArrowRight
              className="hidden md:block absolute -right-10"
              style={{ color: '#333333' }}
            />
            <ArrowDown
              className="md:hidden absolute -bottom-6"
              style={{ color: '#333333' }}
            />
          </div>

          {/* Cliente Box */}
          <div
            className="w-40 h-40 flex items-center justify-center border-2"
            style={{ borderColor: '#AE9461', backgroundColor: '#AE9461' }}
          >
            <span style={{ color: '#FFFFFF' }}>Cliente</span>
          </div>
        </div>
      </div>
    </section>
  );
}
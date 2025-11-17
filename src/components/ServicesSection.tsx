import { AlertCircle, Shield } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="servicos" className="px-6 py-20 md:py-32" style={{ backgroundColor: '#F5F1E9' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="font-serif text-center mb-16"
          style={{
            color: '#0A2342',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          Tratamentos Sob Medida.
        </h2>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Column 1: PRONTO-SOCORRO */}
          <div
            className="p-8 md:p-10 border-2"
            style={{ borderColor: '#0A2342', backgroundColor: '#FFFFFF' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={32} style={{ color: '#000080' }} />
              <h3 className="font-serif" style={{ color: '#0A2342', fontSize: '1.75rem' }}>
                PRONTO-SOCORRO
              </h3>
            </div>

            <p className="mb-4" style={{ color: '#AE9461', fontSize: '1.125rem' }}>
              Para crises já instaladas.
            </p>

            <p className="mb-6 leading-relaxed" style={{ color: '#333333' }}>
              Montamos uma "sala de guerra" (war room) para diagnósticos rápidos e ações imediatas.
            </p>

            <div>
              <p className="mb-3" style={{ color: '#0A2342' }}>
                Serviços:
              </p>
              <ul className="space-y-2" style={{ color: '#333333' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#AE9461' }}>•</span>
                  <span>Gestão de Crise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#AE9461' }}>•</span>
                  <span>Rebranding de Emergência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#AE9461' }}>•</span>
                  <span>Ações Jurídicas de Imagem</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: SENTINELA */}
          <div
            className="p-8 md:p-10 border-2"
            style={{ borderColor: '#AE9461', backgroundColor: '#FFFFFF' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield size={32} style={{ color: '#AE9461' }} />
              <h3 className="font-serif" style={{ color: '#0A2342', fontSize: '1.75rem' }}>
                SENTINELA
              </h3>
            </div>

            <p className="mb-4" style={{ color: '#AE9461', fontSize: '1.125rem' }}>
              O "Seguro Imagem" da sua marca.
            </p>

            <p className="mb-6 leading-relaxed" style={{ color: '#333333' }}>
              Um retainer mensal que garante 4 horas cumulativas de consultoria (Design, Jurídica ou de Comunicação).
            </p>

            <div>
              <p className="mb-3" style={{ color: '#0A2342' }}>
                Serviços:
              </p>
              <ul className="space-y-2" style={{ color: '#333333' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#AE9461' }}>•</span>
                  <span>Auditoria de Marca</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#AE9461' }}>•</span>
                  <span>Compliance Jurídico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#AE9461' }}>•</span>
                  <span>Estratégia de Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

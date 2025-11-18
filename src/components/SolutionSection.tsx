export function SolutionSection() {
  return (
    <section id="solucao" className="px-6 py-20 md:py-32" style={{ backgroundColor: '#0A2342' }}>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2
          className="font-serif text-center mb-8"
          style={{
            color: '#F5F1E9',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          A Nossa Cura: A Tríade Integrada.
        </h2>

        {/* Description */}
        <p
          className="text-center max-w-3xl mx-auto mb-16 leading-relaxed"
          style={{
            color: '#F5F1E9',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)'
          }}
        >
          A Ott Consultoria é o único "hospital" que reúne os três especialistas (Design Estratégico, Direito de Imagem e Gestão de Crise) sob o mesmo teto. Nossos especialistas falam a mesma língua: a da sua marca.
        </p>

        {/* Venn Diagram */}
        <div className="flex justify-center items-center">
          <svg width="400" height="400" viewBox="0 0 400 400" className="max-w-full">
            {/* Design Circle */}
            <circle
              cx="150"
              cy="180"
              r="100"
              fill="none"
              stroke="#AE9461"
              strokeWidth="3"
              opacity="0.8"
            />
            <text x="90" y="130" fill="#AE9461" fontSize="16" fontWeight="500">
              Design
            </text>

            {/* Direito Circle */}
            <circle
              cx="250"
              cy="180"
              r="100"
              fill="none"
              stroke="#AE9461"
              strokeWidth="3"
              opacity="0.8"
            />
            <text x="270" y="130" fill="#AE9461" fontSize="16" fontWeight="500">
              Direito
            </text>

            {/* Comunicação Circle */}
            <circle
              cx="200"
              cy="260"
              r="100"
              fill="none"
              stroke="#AE9461"
              strokeWidth="3"
              opacity="0.8"
            />
            <text x="150" y="330" fill="#AE9461" fontSize="16" fontWeight="500">
              Comunicação
            </text>

            {/* Center Text */}
            <text
              x="200"
              y="215"
              fill="#AE9461"
              fontSize="18"
              fontWeight="600"
              textAnchor="middle"
            >
              OTT
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

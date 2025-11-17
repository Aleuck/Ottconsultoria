import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    dor: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contato" className="px-6 py-20 md:py-32" style={{ backgroundColor: '#0A2342' }}>
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2
          className="font-serif text-center mb-6"
          style={{
            color: '#F5F1E9',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          Agende sua Consulta.
        </h2>

        {/* Description */}
        <p
          className="text-center mb-12 leading-relaxed"
          style={{
            color: '#F5F1E9',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)'
          }}
        >
          Seja para uma crise emergencial ou um check-up preventivo, estamos prontos para ouvir sua dor.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
              className="w-full px-4 py-3 border-2"
              style={{
                backgroundColor: '#F5F1E9',
                borderColor: '#AE9461',
                color: '#0A2342'
              }}
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              required
              className="w-full px-4 py-3 border-2"
              style={{
                backgroundColor: '#F5F1E9',
                borderColor: '#AE9461',
                color: '#0A2342'
              }}
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 border-2"
              style={{
                backgroundColor: '#F5F1E9',
                borderColor: '#AE9461',
                color: '#0A2342'
              }}
            />
          </div>

          <div>
            <Textarea
              placeholder="Qual sua dor?"
              value={formData.dor}
              onChange={(e) => setFormData({ ...formData, dor: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 border-2 resize-none"
              style={{
                backgroundColor: '#F5F1E9',
                borderColor: '#AE9461',
                color: '#0A2342'
              }}
            />
          </div>

          <Button
            type="submit"
            className="w-full px-8 py-4 tracking-wide transition-all hover:opacity-90"
            style={{
              backgroundColor: '#AE9461',
              color: '#0A2342'
            }}
          >
            ENVIAR DIAGNÓSTICO
          </Button>
        </form>
      </div>
    </section>
  );
}

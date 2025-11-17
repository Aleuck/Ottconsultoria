import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-8" style={{ backgroundColor: '#333333' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p style={{ color: '#FFFFFF' }}>
          Ott Consultoria e Design | Todos os direitos reservados © 2025
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="transition-opacity hover:opacity-70"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} style={{ color: '#FFFFFF' }} />
          </a>
          <a
            href="#"
            className="transition-opacity hover:opacity-70"
            aria-label="Instagram"
          >
            <Instagram size={20} style={{ color: '#FFFFFF' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

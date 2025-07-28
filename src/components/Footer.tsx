const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">APTO</h3>
              <p className="text-primary-foreground/80 mb-4">
                Centro de Explicações de Benfica
              </p>
              <p className="text-primary-foreground/80">
                Apoio Pedagógico Total - A sua solução completa para o sucesso académico
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Preçário
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contactos
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contactos</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>📍 Estrada de Benfica, 729, 1º Dto.</p>
                <p>📞 217 649 008</p>
                <p>📱 931 660 992</p>
                <p>✉️ Apto@netcabo.pt</p>
                <p className="pt-2 border-t border-primary-foreground/20">
                  🆘 Assistência 24h: 962 609 261
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © 2024 APTO - Centro de Explicações de Benfica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-youtube", href: "#" },
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-whatsapp", href: "#" }
  ];

  const quickLinks = [
    { label: "Sobre Mim", section: "sobre" },
    { label: "Mentoria", section: "mentoria" },
    { label: "Produtos", section: "produtos" },
    { label: "Livros", section: "livros" },
    { label: "Contato", section: "contato" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl mb-4">Pastor João Silva</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando vidas através da Palavra de Deus há mais de 15 anos.
              Mentoria espiritual, produtos digitais e recursos para seu crescimento na fé.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-gray-800 hover:bg-[hsl(225,73%,57%)] text-white p-3 rounded-lg transition-colors"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>pastorjoao@exemplo.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Pastor João Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

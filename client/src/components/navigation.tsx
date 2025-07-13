import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="font-bold text-xl text-[hsl(225,73%,57%)]">Pastor João Silva</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors font-medium"
              >
                Sobre Mim
              </button>
              <button
                onClick={() => scrollToSection("mentoria")}
                className="text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors font-medium"
              >
                Mentoria
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors font-medium"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("livros")}
                className="text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors font-medium"
              >
                Livros
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors font-medium"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-[hsl(225,73%,57%)] focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection("mentoria")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors"
            >
              Mentoria
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("livros")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors"
            >
              Livros
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[hsl(225,73%,57%)] transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      className="pt-16 bg-gradient-to-br from-[hsl(225,73%,57%)] to-blue-800 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Transformando Vidas Através da{" "}
              <span className="text-[hsl(38,92%,50%)]">Palavra</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Mentoria espiritual, produtos digitais e recursos para seu crescimento na fé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("produtos")}
                className="bg-[hsl(38,92%,50%)] hover:bg-yellow-600 text-[hsl(225,73%,57%)] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Ver Produtos
              </button>
              <button
                onClick={() => scrollToSection("mentoria")}
                className="border-2 border-white hover:bg-white hover:text-[hsl(225,73%,57%)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-center"
              >
                Mentoria Espiritual
              </button>
            </div>
          </div>
          <div className="text-center">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(38,92%,50%)] to-[hsl(25,95%,62%)] rounded-full opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="Pastor João Silva"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

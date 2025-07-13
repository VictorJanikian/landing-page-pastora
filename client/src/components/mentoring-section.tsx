export default function MentoringSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="mentoria" className="py-20 bg-gradient-to-br from-[hsl(225,73%,57%)] to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6">Mentoria Espiritual</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Acompanhamento personalizado para seu crescimento espiritual e descoberta do propósito de Deus para sua vida
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Sessão de mentoria espiritual"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <i className="fas fa-heart text-[hsl(38,92%,50%)] text-2xl mr-4"></i>
                <h3 className="font-semibold text-2xl">Mentoria Individual</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                Sessões personalizadas de 1 hora onde conversamos sobre seus desafios espirituais,
                objetivos de vida e como aplicar os princípios bíblicos em seu dia a dia.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <i className="fas fa-check text-[hsl(38,92%,50%)] mr-2"></i>Sessões semanais ou quinzenais
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[hsl(38,92%,50%)] mr-2"></i>Plano de crescimento personalizado
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[hsl(38,92%,50%)] mr-2"></i>Suporte via WhatsApp
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <i className="fas fa-users text-[hsl(38,92%,50%)] text-2xl mr-4"></i>
                <h3 className="font-semibold text-2xl">Mentoria em Grupo</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                Encontros em pequenos grupos para estudos bíblicos direcionados,
                compartilhamento de experiências e crescimento mútuo na fé.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <i className="fas fa-check text-[hsl(38,92%,50%)] mr-2"></i>Grupos de até 8 pessoas
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[hsl(38,92%,50%)] mr-2"></i>Encontros semanais online
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[hsl(38,92%,50%)] mr-2"></i>Material exclusivo
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contato")}
                className="bg-[hsl(38,92%,50%)] hover:bg-yellow-600 text-[hsl(225,73%,57%)] font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-center"
              >
                Agendar Conversa
              </button>
              <a
                href="#"
                className="border-2 border-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,50%)] hover:text-[hsl(225,73%,57%)] text-[hsl(38,92%,50%)] font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-center"
              >
                Ver Investimento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

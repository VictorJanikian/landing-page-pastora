export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">Sobre Mim</h2>
          <p className="text-xl text-[hsl(215,16%,47%)] max-w-3xl mx-auto">
            Conheça minha jornada de fé e como Deus tem me usado para transformar vidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Pastor João Silva ministrando"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-2xl text-[hsl(225,73%,57%)] mb-4">Minha História</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Há mais de 15 anos dedicado ao ministério pastoral, tenho a honra de servir a Deus e à sua igreja.
                Minha jornada começou com um chamado claro para pregar a Palavra e cuidar do rebanho de Cristo.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ao longo dos anos, desenvolvi uma paixão especial pela mentoria espiritual e pelo discipulado,
                ajudando centenas de pessoas a crescerem em sua fé e propósito.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-2xl text-[hsl(225,73%,57%)] mb-4">Missão e Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Minha missão é capacitar pessoas para uma vida cristã abundante através do ensino bíblico,
                mentoria personalizada e recursos digitais que fortalecem a fé e transformam vidas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[hsl(225,73%,57%)] text-white rounded-lg">
                <div className="font-bold text-2xl mb-1">15+</div>
                <div className="text-sm">Anos de Ministério</div>
              </div>
              <div className="text-center p-4 bg-[hsl(38,92%,50%)] text-[hsl(225,73%,57%)] rounded-lg">
                <div className="font-bold text-2xl mb-1">500+</div>
                <div className="text-sm">Vidas Impactadas</div>
              </div>
              <div className="text-center p-4 bg-[hsl(158,64%,52%)] text-white rounded-lg">
                <div className="font-bold text-2xl mb-1">12</div>
                <div className="text-sm">Produtos Digitais</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsSection() {
  const products = [
    {
      title: "Fundamentos da Fé Cristã",
      type: "CURSO",
      price: "R$ 97",
      description: "Um curso completo sobre os pilares da fé cristã, ideal para novos convertidos e quem deseja fortalecer seus fundamentos bíblicos.",
      features: ["12 aulas em vídeo", "Material complementar em PDF", "Certificado de conclusão"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      buttonColor: "bg-[hsl(225,73%,57%)] hover:bg-blue-800",
      tagColor: "bg-[hsl(225,73%,57%)]"
    },
    {
      title: "Vida de Oração Poderosa",
      type: "CURSO",
      price: "R$ 127",
      description: "Descubra os segredos de uma vida de oração eficaz e transformadora. Aprenda diferentes tipos de oração e como se conectar profundamente com Deus.",
      features: ["15 aulas em vídeo", "Guia de oração de 30 dias", "Áudios para meditação"],
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      buttonColor: "bg-[hsl(158,64%,52%)] hover:bg-green-700",
      tagColor: "bg-[hsl(158,64%,52%)]"
    },
    {
      title: "Liderança Cristã Eficaz",
      type: "CURSO",
      price: "R$ 197",
      description: "Para líderes e aspirantes a liderança na igreja. Aprenda princípios bíblicos de liderança servant leadership e gestão ministerial.",
      features: ["20 aulas em vídeo", "Grupo exclusivo no WhatsApp", "3 lives mensais de Q&A"],
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      buttonColor: "bg-[hsl(38,92%,50%)] hover:bg-yellow-600 text-[hsl(225,73%,57%)]",
      tagColor: "bg-[hsl(38,92%,50%)] text-[hsl(225,73%,57%)]"
    }
  ];

  const icons = ["fas fa-play-circle", "fas fa-download", "fas fa-certificate"];

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">Produtos Online</h2>
          <p className="text-xl text-[hsl(215,16%,47%)] max-w-3xl mx-auto">
            Cursos e materiais digitais desenvolvidos para fortalecer sua jornada espiritual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${product.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.type}
                  </span>
                  <span className="text-[hsl(38,92%,50%)] font-bold text-lg">{product.price}</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <i className={`${icons[featureIndex]} mr-2`}></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className={`block w-full ${product.buttonColor} text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center`}
                >
                  Comprar na Hotmart
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center bg-[hsl(225,73%,57%)] hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Ver Todos os Produtos
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

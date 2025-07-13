export default function BooksSection() {
  const books = [
    {
      title: "Devocional de 365 Dias",
      description: "Um ano inteiro de reflexões bíblicas diárias para fortalecer sua caminhada com Deus.",
      pages: "365 páginas",
      price: "R$ 27",
      icon: "fas fa-book-open",
      gradient: "from-[hsl(225,73%,57%)] to-blue-800",
      buttonColor: "bg-[hsl(225,73%,57%)] hover:bg-blue-800"
    },
    {
      title: "Guia de Estudo Bíblico",
      description: "Métodos práticos para estudar a Bíblia de forma sistemática e proveitosa.",
      pages: "45 páginas",
      price: "R$ 19",
      icon: "fas fa-scroll",
      gradient: "from-[hsl(158,64%,52%)] to-green-800",
      buttonColor: "bg-[hsl(158,64%,52%)] hover:bg-green-700"
    },
    {
      title: "Manual do Casamento Cristão",
      description: "Princípios bíblicos para construir um casamento sólido e abençoado por Deus.",
      pages: "78 páginas",
      price: "R$ 35",
      icon: "fas fa-heart",
      gradient: "from-[hsl(38,92%,50%)] to-yellow-600",
      buttonColor: "bg-[hsl(38,92%,50%)] hover:bg-yellow-600 text-[hsl(225,73%,57%)]"
    },
    {
      title: "Crescimento Espiritual",
      description: "Passos práticos para desenvolver disciplinas espirituais e crescer na graça.",
      pages: "52 páginas",
      price: "R$ 23",
      icon: "fas fa-seedling",
      gradient: "from-[hsl(25,95%,62%)] to-orange-600",
      buttonColor: "bg-[hsl(25,95%,62%)] hover:bg-orange-600"
    }
  ];

  return (
    <section id="livros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">Livros e Materiais</h2>
          <p className="text-xl text-[hsl(215,16%,47%)] max-w-3xl mx-auto">
            E-books, guias práticos e materiais de estudo para enriquecer seu conhecimento bíblico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center"
            >
              <div className={`bg-gradient-to-br ${book.gradient} rounded-lg p-8 mb-6 transform group-hover:scale-105 transition-transform`}>
                <i className={`${book.icon} text-white text-4xl`}></i>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{book.description}</p>
              <div className="space-y-2 mb-6">
                <div className="text-xs text-gray-500">{book.pages} • PDF</div>
                <div className="text-[hsl(38,92%,50%)] font-bold">{book.price}</div>
              </div>
              <a
                href="#"
                className={`block w-full ${book.buttonColor} text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm`}
              >
                Download
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-[hsl(225,73%,57%)] text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-semibold text-2xl mb-4">Pacote Completo</h3>
            <p className="text-blue-100 mb-6">
              Adquira todos os e-books e materiais com 40% de desconto
            </p>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-blue-300 line-through text-lg">R$ 174</span>
              <span className="text-[hsl(38,92%,50%)] font-bold text-3xl">R$ 97</span>
            </div>
            <a
              href="#"
              className="bg-[hsl(38,92%,50%)] hover:bg-yellow-600 text-[hsl(225,73%,57%)] font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Comprar Pacote Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

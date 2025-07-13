export default function SocialMediaSection() {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      gradient: "from-pink-500 to-purple-600",
      description: "Reflexões diárias e momentos do ministério",
      followers: "15.2k seguidores",
      href: "#"
    },
    {
      name: "YouTube",
      icon: "fab fa-youtube",
      gradient: "from-red-500 to-red-600",
      description: "Pregações e estudos bíblicos semanais",
      followers: "8.7k inscritos",
      href: "#"
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      gradient: "from-blue-600 to-blue-700",
      description: "Comunidade e discussões sobre fé",
      followers: "12.1k seguidores",
      href: "#"
    },
    {
      name: "WhatsApp",
      icon: "fab fa-whatsapp",
      gradient: "from-green-500 to-green-600",
      description: "Contato direto para oração e aconselhamento",
      followers: "Contato Direto",
      href: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Redes Sociais</h2>
          <p className="text-lg text-[hsl(215,16%,47%)]">Conecte-se comigo nas redes sociais para conteúdo diário</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.href}
              className={`group bg-gradient-to-br ${platform.gradient} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center`}
            >
              <i className={`${platform.icon} text-4xl mb-4 group-hover:scale-110 transition-transform`}></i>
              <h3 className="font-semibold text-xl mb-2">{platform.name}</h3>
              <p className="text-sm opacity-90">{platform.description}</p>
              <div className="mt-4 text-sm font-medium">{platform.followers}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

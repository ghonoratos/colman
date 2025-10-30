export const About = () => {
  return (
    <section id="about" className="py-32 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-white mb-6">
              Conheça mais
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              A Colman Instalações Hidráulicas é uma empresa nova no mercado,
              que atua com a prestação de serviços hidráulicos em residências e
              empresas, buscando sempre a qualidade, melhoria dos serviços e
              equipamentos utilizados, e a completa satisfação de nossos
              clientes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/about-image.jpg"
              alt="Imagem ilustrativa sobre a Colman Instalações."
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { ServicesCarousel } from "./servicesCarousel";

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-zinc-800">
      <div className="container mx-auto px-6">
        <div className="flex space-between mb-20 items-end">
          <div className="flex flex-col gap-2">
            <span className="uppercase fade-in-scroll font-bold text-gray-600 tracking-widest">
              Conheça os nossos
            </span>
            <h2 className="text-4xl md:text-5xl fade-in-scroll font-bold text-gray-700 dark:text-white">
              Serviços
            </h2>
          </div>
          <p className="text-lg text-gray-600 fade-in-scroll dark:text-gray-300 max-w-2xl ml-auto leading-relaxed">
            Nossa equipe especializada em manutenção e instalações hidráulicas
            está a disposição, conheça nossos serviços e peça um orçamento!
          </p>
        </div>

        <ServicesCarousel />
      </div>
    </section>
  );
};

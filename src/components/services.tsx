import { ServicesCarousel } from "./servicesCarousel";

export const Services = () => {
  return (
    <section
      id="services"
      className="py-12 scroll-mt-32 snap-mandatory bg-gray-50"
    >
      <div className="container mx-auto px-6 overflow-x-clip">
        <div className="flex flex-col gap-4 xl:flex-row space-between mb-20 items-center text-center xl:text-left xl:items-end">
          <div className="flex flex-col gap-0 xl:gap-2">
            <span className="uppercase fade-in-scroll font-bold text-gray-600 tracking-widest">
              Conheça os nossos
            </span>
            <h2 className="text-3xl md:text-5xl mx-auto fade-in-scroll font-bold mb-0 text-gray-700">
              Serviços
            </h2>
          </div>
          <p className="lg:text-lg text-gray-600 fade-in-scroll max-w-2xl ml-auto leading-relaxed">
            Nossa equipe especializada em manutenção e instalações hidráulicas
            está a disposição, conheça nossos serviços e peça um orçamento!
          </p>
        </div>

        <ServicesCarousel />
      </div>
    </section>
  );
};

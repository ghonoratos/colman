import {
  TrophyIcon,
  TrendUpIcon,
  CheckSquareOffsetIcon,
} from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="pt-12 scroll-mt-32 snap-mandatory bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-12">
          <div className="xl:w-1/2">
            <h2 className="text-3xl md:text-5xl lg:max-w-[70%] mx-auto fade-in-scroll font-bold mb-6 text-gray-700">
              Conheça mais
            </h2>
            <p className="lg:text-lg slide-left text-gray-500 leading-snug">
              A Colman Instalações Hidráulicas é uma empresa nova no mercado,
              que atua com a prestação de serviços hidráulicos em residências e
              empresas, buscando sempre a qualidade, melhoria dos serviços e
              equipamentos utilizados, e a completa satisfação de nossos
              clientes.
            </p>

            <hr className="border-gray-100 slide-left my-5" />

            <div className="slide-left">
              <h3 className="text-lg flex items-center gap-2 font-bold text-gray-700 mb-2 tracking-tight">
                <CheckSquareOffsetIcon size={32} weight="light" />
                <span>Missão</span>
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Trazer satisfação aos nossos clientes em seus serviços
                hidráulicos executados
              </p>
            </div>

            <hr className="border-gray-100 slide-left my-5" />

            <div className="slide-left">
              <h3 className="text-lg flex items-center gap-2 font-bold text-gray-700 mb-2 tracking-tight">
                <TrendUpIcon size={32} weight="light" />
                <span>Visão</span>
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Ser uma das maiores prestadoras de serviços de instalações e
                manutenções hidráulicas, visando a qualidade no serviço e
                satisfação do cliente.
              </p>
            </div>

            <hr className="border-gray-100 slide-left my-5" />

            <div className="slide-left">
              <h3 className="text-lg flex items-center gap-2 font-bold text-gray-700 mb-2 tracking-tight">
                <TrophyIcon size={32} weight="light" />
                <span>Valores</span>
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Qualidade e confiança em cada serviço prestado, garantindo
                tranquilidade ao cliente.
              </p>
            </div>
          </div>

          <div className="xl:w-1/2 overflow-clip">
            <Image
              src="/about.png"
              alt="Imagem ilustrativa sobre a Colman Instalações."
              width={778}
              height={1080}
              className="rounded-lg slide-right max-h-[600px] object-cover object-top w-full hidden xl:block"
            />

            <Image
              src="/about.png"
              alt="Imagem ilustrativa sobre a Colman Instalações."
              width={778}
              height={1080}
              className="rounded-lg max-h-[600px] object-cover object-top w-full xl:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

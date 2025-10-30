"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

const services = [
  {
    title: "Instalação e limpeza de caixa d'água",
    description:
      "Garantimos a pureza da sua água com instalação e limpeza completa de caixas d’água, seguindo padrões de segurança e higiene para manter seu sistema sempre em dia.",
  },
  {
    title: "Instalação de aquecedores solares",
    description:
      "Economize energia e valorize seu imóvel com aquecimento solar eficiente. A Colman cuida de cada detalhe para você aproveitar o conforto do sol dentro de casa.",
  },
  {
    title: "Instalação de aquecedores a gás",
    description:
      "Tenha água quente com segurança e eficiência. Instalamos aquecedores a gás com precisão técnica e total conformidade às normas de segurança.",
  },
  {
    title: "Manutenção de registros, torneiras e válvulas de descarga",
    subtitle: "Hydra",
    description:
      "De vazamentos a travamentos, cuidamos de tudo. Nossos técnicos realizam manutenção completa de registros, torneiras e válvulas Hydra com rapidez e garantia.",
  },
  {
    title: "Tubulações de água fria",
    subtitle: "PVC",
    description:
      "Instalamos e substituímos redes de PVC com materiais de alta durabilidade, garantindo fluxo contínuo e seguro em todo o seu sistema hidráulico.",
  },
  {
    title: "Tubulações de água quente",
    subtitle: "CPVC / PPR / Cobre / PEX / Multicamadas",
    description:
      "Trabalhamos com todas as tecnologias em condução de água quente — da tradicional ao mais moderno sistema multicamada — com instalação precisa e duradoura.",
  },
  {
    title: "Tubulações de incêndio",
    subtitle: "Aço galvanizado / Aço preto / CPVC",
    description:
      "Projetamos e instalamos sistemas de combate a incêndio com os materiais adequados para cada ambiente, garantindo segurança, resistência e conformidade técnica.",
  },
  {
    title: "Reforma hidráulica",
    description:
      "Transforme seu sistema hidráulico com segurança e eficiência. Fazemos reformas completas, otimizando o consumo e modernizando instalações antigas.",
  },
  {
    title: "Conserto e instalação de encanamentos",
    description:
      "Seja para pequenos reparos ou novas instalações, a Colman resolve rápido. Trabalhamos com todo tipo de encanamento, sempre priorizando qualidade e acabamento.",
  },
  {
    title: "Caça vazamentos",
    description:
      "Detectamos e corrigimos vazamentos sem quebradeira desnecessária, utilizando equipamentos modernos e técnicas precisas para evitar desperdícios.",
  },
  {
    title: "Consultoria hidráulica",
    description:
      "Planeje certo, economize mais. Oferecemos consultoria completa para dimensionamento, escolha de materiais e execução de sistemas hidráulicos residenciais e comerciais.",
  },
];

export const ServicesCarousel = () => {
  return (
    <Swiper className="fade-in-scroll" spaceBetween={48} slidesPerView={1.4}>
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg h-full">
            <div className="flex items-center gap-8">
              <Image
                src={`https://placehold.co/400x300.png`}
                alt={service.title}
                width={400}
                height={300}
                className="object-cover rounded-lg flex-shrink-0"
              ></Image>
              <div>
                <h3 className="text-3xl leading-8 mb-2 font-bold text-gray-700">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <h4 className="text-md font-medium text-gray-400">
                    {service.subtitle}
                  </h4>
                )}
                <p className="text-gray-600 mt-6">{service.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

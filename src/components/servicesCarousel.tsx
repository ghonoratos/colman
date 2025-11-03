"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Instalação e limpeza de caixa d'água",
    description:
      "Garantimos a pureza da sua água com instalação e limpeza completa de caixas d’água, seguindo padrões de segurança e higiene para manter seu sistema sempre em dia.",
    photo: "/services/caixa-dagua.jpg",
  },
  {
    title: "Instalação de aquecedores solares",
    description:
      "Economize energia e valorize seu imóvel com aquecimento solar eficiente. A Colman cuida de cada detalhe para você aproveitar o conforto do sol dentro de casa.",
    photo: "/services/aquecedor-solar.jpg",
  },
  {
    title: "Instalação de aquecedores a gás",
    description:
      "Tenha água quente com segurança e eficiência. Instalamos aquecedores a gás com precisão técnica e total conformidade às normas de segurança.",
    photo: "/services/aquecedor-a-gas.jpg",
  },
  {
    title: "Manutenção de registros, torneiras e válvulas de descarga",
    subtitle: "Hydra",
    description:
      "De vazamentos a travamentos, cuidamos de tudo. Nossos técnicos realizam manutenção completa de registros, torneiras e válvulas Hydra com rapidez e garantia.",
    photo: "/services/manutencao-registros.jpg",
  },
  {
    title: "Tubulações de água fria",
    subtitle: "PVC",
    description:
      "Instalamos e substituímos redes de PVC com materiais de alta durabilidade, garantindo fluxo contínuo e seguro em todo o seu sistema hidráulico.",
    photo: "/services/canos-pvc.jpg",
  },
  {
    title: "Tubulações de água quente",
    subtitle: "CPVC / PPR / Cobre / PEX / Multicamadas",
    description:
      "Trabalhamos com todas as tecnologias em condução de água quente — da tradicional ao mais moderno sistema multicamada — com instalação precisa e duradoura.",
    photo: "/services/canos-cobre.jpg",
  },
  {
    title: "Tubulações de incêndio",
    subtitle: "Aço galvanizado / Aço preto / CPVC",
    description:
      "Projetamos e instalamos sistemas de combate a incêndio com os materiais adequados para cada ambiente, garantindo segurança, resistência e conformidade técnica.",
    photo: "/services/aco-galvanizado.jpg",
  },
  {
    title: "Reforma hidráulica",
    description:
      "Transforme seu sistema hidráulico com segurança e eficiência. Fazemos reformas completas, otimizando o consumo e modernizando instalações antigas.",
    photo: "/services/reforma-hidraulica.jpg",
  },
  {
    title: "Conserto e instalação de encanamentos",
    description:
      "Seja para pequenos reparos ou novas instalações, a Colman resolve rápido. Trabalhamos com todo tipo de encanamento, sempre priorizando qualidade e acabamento.",
    photo: "/services/encanamentos.jpg",
  },
  {
    title: "Caça vazamentos",
    description:
      "Detectamos e corrigimos vazamentos sem quebradeira desnecessária, utilizando equipamentos modernos e técnicas precisas para evitar desperdícios.",
    photo: "/services/caca-vazamentos.jpg",
  },
  {
    title: "Consultoria hidráulica",
    description:
      "Planeje certo, economize mais. Oferecemos consultoria completa para dimensionamento, escolha de materiais e execução de sistemas hidráulicos residenciais e comerciais.",
    photo: "/services/consultoria.jpg",
  },
];

export const ServicesCarousel = () => {
  return (
    <div className="relative slide-right">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={48}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 1.4,
          },
        }}
        autoplay={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
      >
        {services.map((service, index) => (
          <SwiperSlide className="h-auto!" key={index}>
            <div className="bg-white p-6 rounded-lg h-full flex flex-col">
              <div className="flex flex-col-reverse h-full xl:flex-row items-center gap-8">
                <Image
                  src={service.photo}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-cover mt-auto lg:mt-0 rounded-lg w-full xl:w-[300px] 2xl:w-[400px] shrink-0"
                ></Image>
                <div>
                  <h3 className="text-2xl xl:text-3xl leading-8 mb-2 font-bold text-gray-700">
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
      <div className="flex justify-between absolute top-[50%] translate-y-[-50%] z-10 w-full">
        <div className="custom-prev hidden lg:flex lg:left-2 relative cursor-pointer bg-primary hover:bg-primary/85 transition-[background-color] duration-200 text-white rounded-lg w-10 h-10 items-center justify-center">
          <CaretLeftIcon size={24} weight="bold" />
        </div>
        <div className="custom-next hidden lg:flex lg:right-2 relative cursor-pointer bg-primary hover:bg-primary/85 transition-[background-color] duration-200 text-white rounded-lg w-10 h-10 items-center justify-center">
          <CaretRightIcon size={24} weight="bold" />
        </div>
      </div>
    </div>
  );
};

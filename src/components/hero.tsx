import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="xl:min-h-svh flex flex-col bg-white pt-32">
      <div className="container flex flex-col justify-center flex-1 mx-auto px-6 text-center">
        <span className="text-primary animate-fade-in delay-200 uppercase text-[.875rem] font-bold mb-4 inline-block tracking-widest">
          Serviços de instalação
        </span>
        <h1 className="text-3xl xs:text-4xl md:text-5xl xl:max-w-[70%] mx-auto animate-slide-in-from-left delay-50ms  font-bold mb-6 text-gray-700">
          Instalações inteligentes e resultados duradouros.
        </h1>
        <p className="max-w-2xl mx-auto lg:text-lg md:text-xl text-gray-600 animate-slide-in-from-left delay-500ms mb-8 leading-relaxed">
          Na Colman Instalações, unimos tecnologia e experiência para oferecer
          serviços hidráulicos e de instalação com máxima eficiência e
          confiança.
        </p>

        <Image
          src="/hero-image.jpg"
          alt="Imagem ilustrativa de serviços de instalação hidráulica e elétrica."
          width={913}
          height={525}
          loading="eager"
          className="mx-auto justify-self-end mt-auto rounded-lg self-end block animate-scale-up origin-bottom delay-300"
        ></Image>
      </div>
    </section>
  );
};

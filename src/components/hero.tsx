import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-svh flex flex-col bg-white dark:bg-zinc-700 pt-32"
    >
      <div className="container flex flex-col flex-1 mx-auto px-6 text-center">
        <span className="text-primary animate-fade-in delay-200 uppercase text-[.875rem] font-bold mb-4 inline-block tracking-widest">
          Serviços de instalação
        </span>
        <h1 className="text-4xl animate-slide-in-from-left delay-50ms md:text-6xl font-bold mb-6 text-gray-700 dark:text-white">
          Instalações inteligentes <br />e resultados duradouros.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-slide-in-from-left delay-500ms dark:text-gray-300 mb-8 leading-relaxed">
          Na Colman Instalações, unimos tecnologia e experiência para oferecer
          serviços <br />
          hidráulicos e de instalação com máxima eficiência e confiança.
        </p>

        <Image
          src="/hero-image.jpg"
          alt="Imagem ilustrativa de serviços de instalação hidráulica e elétrica."
          width={913}
          height={525}
          loading="eager"
          className="mx-auto rounded-lg self-end block mt-auto animate-scale-up origin-bottom delay-300"
        ></Image>
      </div>
    </section>
  );
};

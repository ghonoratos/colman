import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 bg-white border-b-2 border-gray-50 dark:bg-zinc-800 z-10">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Image
          src="/colman.svg"
          alt="Colman Instalações - Serviços de instalação hidráulica, elétrica e reformas gerais."
          width={137}
          height={48}
          priority
        />

        <nav className="flex items-center justify-end gap-2 font-medium">
          <a href="#hero" className="py-2 px-4">
            Início
          </a>
          <a href="#services" className="py-2 px-4">
            Serviços
          </a>
          <a href="#reviews" className="py-2 px-4">
            Depoimentos
          </a>
          <a href="#about" className="py-2 px-4">
            Sobre
          </a>
          <a
            href="#contact"
            className="py-2 px-4 bg-primary text-white rounded-md"
          >
            Entre em contato
          </a>
        </nav>
      </div>
    </header>
  );
};

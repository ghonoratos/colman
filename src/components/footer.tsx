import Image from "next/image";
import Link from "next/link";
// import whatsapp from "/whatsapp.svg";

import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/colman.svg"
                alt="Colman Instalações - Serviços de instalação hidráulica, elétrica e reformas gerais."
                width={137}
                height={48}
                loading="lazy"
                className="mx-auto md:mx-0"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-center text-gray-700 tracking-tight mb-4">
                Contato
              </p>
              <ul className="text-center justify-center flex gap-2 mb-4">
                <li>
                  <a
                    href="https://www.facebook.com/colman.intalacoeshidraulicas"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook - Colman Instalações"
                  >
                    <FacebookLogoIcon size={32} weight="regular" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/colmaninstalacoes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram - Colman Instalações"
                  >
                    <InstagramLogoIcon size={32} weight="regular" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/7IROAVHUEZM5B1"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Whatsapp - Colman Instalações"
                  >
                    <WhatsappLogoIcon size={32} weight="regular" />
                  </a>
                </li>
              </ul>
              <ul className="text-center">
                <li className="flex items-center gap-1 justify-center">
                  <EnvelopeSimpleIcon size={20} weight="fill" />
                  <a href="mailto:contato@colmaninstalacoes.com.br">
                    contato@colmaninstalacoes.com.br
                  </a>
                </li>
                <li className="flex items-center gap-1 justify-center">
                  <EnvelopeSimpleIcon size={20} weight="fill" />
                  <a href="mailto:financeiro@colmaninstalacoes.com.br">
                    financeiro@colmaninstalacoes.com.br
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold text-center text-gray-700 tracking-tight mb-4">
                Institucional
              </p>
              <nav className="text-center">
                <Link href="/politica-de-privacidade">
                  Política de privacidade
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 bg-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-sm font-light text-center text-gray-600">
            © {new Date().getFullYear()} Colman Instalações - Todos os direitos
            reservados | CNPJ :52.466.033/0001-25
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/message/7IROAVHUEZM5B1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bg-[#25d366] text-white bottom-5 right-5 text-sm font-bold flex items-center animate-bounce gap-2 py-3 px-6 rounded-3xl"
      >
        Chame agora no Whatsapp{" "}
        <Image
          src="/whatsapp.svg"
          alt="Chame agora no whatsapp"
          width={20}
          height={20}
          className="invert"
        />
      </a>
    </footer>
  );
};

"use client";

import Image from "next/image";
import {
  EnvelopeSimpleIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const Header = () => {
  const closeMenu = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <header className="fixed left-0 right-0 top-0 bg-white border-b-2 border-gray-50 z-10">
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/colman.svg"
              alt="Colman Instalações - Serviços de instalação hidráulica, elétrica e reformas gerais."
              width={108}
              height={38}
              priority
            />
          </Link>

          <nav className="hidden xl:flex items-center justify-end gap-2 font-medium">
            <a href="/#hero" className="py-2 px-4">
              Início
            </a>
            <a href="/#services" className="py-2 px-4">
              Serviços
            </a>
            <a href="/#reviews" className="py-2 px-4">
              Depoimentos
            </a>
            <a href="/#about" className="py-2 px-4">
              Sobre
            </a>
            <a
              href="/#contact"
              className="py-2 px-4 flex gap-2 items-center bg-primary text-white rounded-md"
            >
              <span>Entre em contato</span>
              <EnvelopeSimpleIcon size={24} weight="fill" />
            </a>
          </nav>

          <div className="xl:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer hover:bg-gray-100 rounded-md transition-colors h-fit flex"
            >
              <ListIcon size={32} />
            </label>

            <div className="hidden peer-checked:flex">
              <div className="flex flex-col absolute top-0 left-0 min-h-svh bg-white border-b-2 border-gray-50  right-0 shadow-lg max-w-[80%] z-10">
                <span className="text-xl text-gray-700 py-4 px-6 mb-4 font-bold">
                  Menu
                </span>

                <nav className="flex flex-col font-medium ">
                  <a
                    href="/#hero"
                    className="py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    href="/#services"
                    className="py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    Serviços
                  </a>
                  <a
                    href="/#reviews"
                    className="py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    Depoimentos
                  </a>
                  <a
                    href="/#about"
                    className="py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    Sobre
                  </a>
                  <a
                    href="/#contact"
                    className="py-4 px-6 flex gap-2 items-center justify-center bg-primary text-white hover:bg-primary/90 transition-colors m-4 rounded-md"
                    onClick={closeMenu}
                  >
                    <span>Entre em contato</span>
                    <EnvelopeSimpleIcon size={24} weight="fill" />
                  </a>
                </nav>
              </div>
              <div
                className="absolute top-0 left-0 min-h-svh bg-black/20 w-full backdrop-blur-xs"
                onClick={closeMenu}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

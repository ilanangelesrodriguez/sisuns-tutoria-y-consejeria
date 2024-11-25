'use client'

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r border-t py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" color="foreground" className="text-lg font-semibold hover:text-blue-300 transition-colors">Inicio</Link>
            <Link href="/blog" color="foreground" className="text-lg font-semibold hover:text-blue-300 transition-colors">Blog</Link>
            <Link href="/nosotros" color="foreground" className="text-lg font-semibold hover:text-blue-300 transition-colors">Nosotros</Link>
            <Link href="/contactos" color="foreground" className="text-lg font-semibold hover:text-blue-300 transition-colors">Contactos</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/reglamento" color="foreground" className="text-lg font-semibold hover:text-blue-300 transition-colors">Reglamento</Link>
            <Link href="/privacidad" color="foreground" className="text-lg font-semibold hover:text-blue-300 transition-colors">Políticas de Privacidad</Link>
            <p className="text-sm mt-4">Encuentranos en Av. Pacífico 508 - Nuevo Chimbote</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            <Image
              src="/images/footer/logo_episi.png"
              alt="EPISI Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <Image
              src="/images/footer/logo_rojo.png"
              alt="Universidad Nacional del Santa Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">
            Diseñado por <span className="font-bold">SISUNS</span> | Copyright © {new Date().getFullYear()}
          </p>
          <div className="flex space-x-4">
            <Button
              as="a"
              href="https://www.facebook.com/UNSChimbote/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="flat"
              className="bg-blue-700 text-white"
            >
              <i className="fab fa-facebook"></i>
            </Button>
            <Button
              as="a"
              href="https://www.youtube.com/channel/UCcCyx2mzVyJrktsFs9IBdGQ"
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="flat"
              className="bg-red-600 text-white"
            >
            <i className="fab fa-youtube"></i>
            </Button>
            <Button
              as="a"
              href="https://www.instagram.com/unschimbote/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="flat"
              className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-500 text-white"
            >
            <i className="fab fa-instagram"></i>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


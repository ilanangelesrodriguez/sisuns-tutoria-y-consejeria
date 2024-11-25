'use client'

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Facebook, Youtube, Instagram, Mail, Phone } from 'lucide-react';

const FooterPrivate = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-800 to-teal-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">Navegación Rápida</h3>
            <Link href="/dashboard" color="foreground" className="text-sm hover:text-blue-300 transition-colors">Dashboard</Link>
            <Link href="/perfil" color="foreground" className="text-sm hover:text-blue-300 transition-colors">Mi Perfil</Link>
            <Link href="/cursos" color="foreground" className="text-sm hover:text-blue-300 transition-colors">Mis Cursos</Link>
            <Link href="/calendario" color="foreground" className="text-sm hover:text-blue-300 transition-colors">Calendario</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">Recursos</h3>
            <Link href="/biblioteca" color="foreground" className="text-sm hover:text-blue-300 transition-colors">Biblioteca Digital</Link>
            <Link href="/faq" color="foreground" className="text-sm hover:text-blue-300 transition-colors">Preguntas Frecuentes</Link>
            <Link href="/soporte" color="foreground" className="text-sm hover:text-blue-300 transition-colors">Soporte Técnico</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">Contacto</h3>
            <p className="text-sm flex items-center"><Mail size={16} className="mr-2" /> info@uns.edu.pe</p>
            <p className="text-sm flex items-center"><Phone size={16} className="mr-2" /> +51 123 456 789</p>
            <p className="text-sm mt-2">Av. Pacífico 508 - Nuevo Chimbote</p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Image
              src="/images/footer/logo_episi.png"
              alt="EPISI Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <Image
              src="/images/footer/logo_rojo.png"
              alt="Universidad Nacional del Santa Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Universidad Nacional del Santa. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Button
              as="a"
              href="https://www.facebook.com/UNSChimbote/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="flat"
              size="sm"
              className="bg-blue-700 text-white"
            >
              <Facebook size={16} />
            </Button>
            <Button
              as="a"
              href="https://www.youtube.com/channel/UCcCyx2mzVyJrktsFs9IBdGQ"
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="flat"
              size="sm"
              className="bg-red-600 text-white"
            >
              <Youtube size={16} />
            </Button>
            <Button
              as="a"
              href="https://www.instagram.com/unschimbote/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="flat"
              size="sm"
              className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-500 text-white"
            >
              <Instagram size={16} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPrivate;


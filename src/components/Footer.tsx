import Link from 'next/link';

import Logo from './Logo2';
import { useLanguage } from '@/context/LangusgeContext';

export default function Footer() {
  const { isEnglish } = useLanguage();
  return (
    <footer className='bg-gray-800 text-white py-12 w-full'>
      <div className='container mx-auto px-4 flex w-full justify-center items-center'>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col space-y-4'>
            <Logo className='bg-white' />
            <p className='text-gray-400 sm:text-xs'>
              {isEnglish
                ? 'Powering homes and businesses with innovative electrical solutions.'
                : 'Brindando soluciones eléctricas innovadoras para hogares y empresas.'}
            </p>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>
              {isEnglish ? 'Services' : 'Servicios'}
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#services'
                  className='text-gray-400 hover:text-white sm:text-xs'>
                  {isEnglish ? 'Electrical Services' : 'Servicios Eléctricos'}
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='text-gray-400 hover:text-white sm:text-xs'>
                  {isEnglish
                    ? 'Solar Panel Installation'
                    : 'Instalación de Paneles Solares'}
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='text-gray-400 hover:text-white sm:text-xs'>
                  {isEnglish
                    ? 'EV Charger Installation'
                    : 'Instalación de Recarga de Vehículos Eléctricos'}
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='text-gray-400 hover:text-white sm:text-xs'>
                  {isEnglish ? 'Air Conditioning' : 'Aire Acondicionado'}
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='text-gray-400 hover:text-white sm:text-xs'>
                  {isEnglish ? 'Home Automation' : 'Domótica'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>
              {isEnglish ? 'Company' : 'Empresa'}
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-gray-400 hover:text-white sm:text-xs'>
                  {isEnglish ? 'About Us' : 'Sobre Nosotros'}
                </Link>
              </li>

              <li>
                <Link
                  href='#'
                  className='text-gray-400 hover:text-white sm:text-xs'>
                  {isEnglish ? 'Contact Us' : 'Contáctenos'}
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className='mt-8 pt-8 border-t border-gray-700 text-center text-gray-400'>
        <p>
          &copy; {new Date().getFullYear()} BG Electricidad.{' '}
          {isEnglish
            ? 'All rights reserved.'
            : 'Todos los derechos reservados.'}
        </p>
      </div>
    </footer>
  );
}

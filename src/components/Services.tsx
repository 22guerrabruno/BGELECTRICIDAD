import {
  Zap,
  Sun,
  BatteryChargingIcon as ChargingPile,
  Thermometer,
  Home,
  Video,
} from 'lucide-react';

import { useLanguage } from '@/context/LangusgeContext';

const services = [
  {
    icon: Zap,
    title: 'Electrical Services',
    description:
      'New installations, upgrades, and repairs for residential and commercial properties.',
    titleESP: 'Servicios Eléctricos',
    descriptionESP:
      'Nuevas instalaciones, actualizaciones, reparaciones  y averias para propiedades residenciales y comerciales.',
  },
  {
    icon: Sun,
    title: 'Solar Panel Installation',
    description:
      'Harness the power of the sun with our expert solar panel installations.',
    titleESP: 'Instalación de Paneles Solares',
    descriptionESP:
      'Aprovecha el poder del sol con nuestras expertas instalaciones de paneles solares.',
  },
  {
    icon: ChargingPile,
    title: 'EV Charger Installation',
    description:
      'Get ready for the future with our electric vehicle charging solutions.',
    titleESP: 'Recarga de Vehículos Eléctricos',
    descriptionESP:
      'Prepárate para el futuro con nuestras soluciones de carga de vehículos eléctricos.',
  },
  {
    icon: Thermometer,
    title: 'Air Conditioning',
    description:
      'Stay cool with our efficient air conditioning installation and maintenance services.',
    titleESP: 'Aire Acondicionado',
    descriptionESP:
      'Mantente fresco con nuestra eficiente instalación y servicios de mantenimiento de aire acondicionado.',
  },
  {
    icon: Home,
    title: 'Home Automation',
    description:
      'Transform your home with smart, energy-efficient automation systems.',
    titleESP: 'Domotica',
    descriptionESP:
      'Transforma tu hogar con sistemas de automatización inteligentes y eficientes en energía.',
  },
  {
    icon: Video,
    title: 'Video door intercoms',
    description: 'We install video door intercoms for homes and businesses.',
    titleESP: 'Videoporteros',
    descriptionESP: 'Instalamos videoporteros para hogares y empresas.',
  },
];

export default function Services() {
  const { isEnglish } = useLanguage();

  return (
    <section
      id='services'
      className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12 font-oswald'>
          {isEnglish ? 'Our Services' : 'Nuestros Servicios'}
        </h2>
        {isEnglish ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md'>
                <service.icon className='w-12 h-12 text-primary mb-4' />
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md'>
                <service.icon className='w-12 h-12 text-primary mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  {service.titleESP}
                </h3>
                <p className='text-gray-600'>{service.descriptionESP}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

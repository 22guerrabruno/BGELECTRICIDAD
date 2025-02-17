'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LangusgeContext';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Electrical',
    price: '99€',
    features: [
      'Electrical inspection',
      'Minor repairs',
      'Outlet installation',
      'Lighting fixture installation',
    ],
  },
  {
    name: 'Smart Home Package',
    price: '499€',
    features: [
      'Smart thermostat installation',
      'Smart lighting setup',
      'Wifi video doorbell',
      'Mobile app control',
    ],
  },
  {
    name: 'Solar + EV Bundle',
    price: 'Custom',
    features: [
      'Solar panel installation',
      'EV charger installation',
      'Energy consumption analysis',
      'Ongoing maintenance',
    ],
  },
];
const planes = [
  {
    nombre: 'Revision Electrica',
    precio: '99€',
    caracteristicas: [
      'Inspección eléctrica',
      'Reparaciones menores',
      'Instalación de enchufes',
      'Instalación de luminarias',
    ],
  },
  {
    nombre: 'Paquete Hogar Inteligente',
    precio: '499€',
    caracteristicas: [
      'Instalación de termostato inteligente',
      'Configuración de iluminación inteligente',
      'Videoportero WI-FI',
      'Control mediante aplicación móvil',
    ],
  },
  {
    nombre: 'Paquete Solar + EV',
    precio: 'Personalizado',
    caracteristicas: [
      'Instalación de paneles solares',
      'Instalación de cargador para vehículos eléctricos',
      'Análisis de consumo energético',
      'Mantenimiento continuo',
    ],
  },
];

export default function Pricing() {
  const { isEnglish } = useLanguage();
  return (
    <section
      id='pricing'
      className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12 font-oswald'>
          {isEnglish ? 'Our Packages' : 'Nuestros packs'}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {isEnglish
            ? plans.map((plan, index) => (
                <div
                  key={index}
                  className='bg-white p-8 rounded-lg shadow-md flex flex-col'>
                  <h3 className='text-2xl font-semibold mb-4'>{plan.name}</h3>
                  <div className='text-4xl font-bold mb-6'>
                    {plan.price}
                    <span className='text-sm font-normal'>
                      {index === 2 ? '' : ' starting'}
                    </span>
                  </div>
                  <ul className='mb-8 flex-grow'>
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center mb-2'>
                        <Check className='w-5 h-5 text-green-500 mr-2' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant='outline'
                    className='w-full'>
                    {index === 2 ? 'Get a Quote' : 'Book Now'}
                  </Button>
                </div>
              ))
            : planes.map((planes, index) => (
                <div
                  key={index}
                  className='bg-white p-8 rounded-lg shadow-md flex flex-col'>
                  <h3 className='text-2xl font-semibold mb-4'>
                    {planes.nombre}
                  </h3>
                  <div className='text-4xl font-bold mb-6'>
                    {planes.precio}
                    <span className='text-sm font-normal'>
                      {index === 2 ? '' : ' starting'}
                    </span>
                  </div>
                  <ul className='mb-8 flex-grow'>
                    {planes.caracteristicas.map(
                      (caracteristicas, featureIndex) => (
                        <li
                          key={featureIndex}
                          className='flex items-center mb-2'>
                          <Check className='w-5 h-5 text-green-500 mr-2' />
                          <span>{caracteristicas}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <Button
                    variant='outline'
                    className='w-full'>
                    {index === 2 ? 'Get a Quote' : 'Book Now'}
                  </Button>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

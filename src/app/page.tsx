/* eslint-disable @next/next/no-img-element */
'use client';

import { useLanguage } from '@/context/LangusgeContext';

import { useInView } from 'react-intersection-observer';

import Hero2 from '@/components/Hero2';
import Logo from '@/components/Logo';

import Services from '@/components/Services';
import Footer from '@/components/Footer';
import Brands from '@/components/Brands';
import Pricing from '@/components/Pricing';

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  const comment = [
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.13.17_qdgwxe.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.12.54_ycr5kz.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.11.12_njlbyn.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674911/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.12.32_ezd11o.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674910/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.11.55_m2dqp2.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674908/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.11.33_kwaf59.png',
  ];
  const { isEnglish } = useLanguage();

  return (
    <main className='flex flex-col items-center justify-center gap-2 w-full scroll-smooth transition duration-300'>
      <div className='w-full'>
        <Hero2 />
      </div>
      <hr className='h-1 border-1 w-full border-gray-200 mt-4' />
      <div className='w-full'>
        <Services />
      </div>
      <div className='w-full'>
        <Brands />
      </div>
      <div className='w-full'>
        <Pricing />
      </div>

      <div className='w-full flex flex-col justify-center items-center gap-4'>
        <hr className='h-1 border-1 w-full border-gray-200' />
        <Logo />

        <div className='w-full '>
          <Footer />
        </div>
      </div>
    </main>
  );
}

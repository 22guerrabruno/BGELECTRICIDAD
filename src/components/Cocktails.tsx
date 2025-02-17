/* eslint-disable @next/next/no-img-element */
'use client';
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';

const Cocktails = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='flex flex-col items-center justify-between gap-6 w-[360px] h-[505px]'>
      <h2 className='text-5xl font-vibes font-light'>
        {!isEnglish ? 'Cocktail' : 'Cocktail'}
      </h2>
      <img
        src='/cocktail.jpg'
        alt='drinks'
        className=' w-72 h-72 rounded-full object-cover'
      />
      <p className=' space-y-8 text-center font-raleway-500'>
        {!isEnglish
          ? 'Carta de combinados y cocktails nacionales e internacionales, ofreciendo las mejoras copas de la playa de Calpe.'
          : 'A menu of national and international mixed drinks and cocktails, offering the best drinks on Calpe beach.'}
      </p>
      <Link href='/our-menu'>
        <p className='font-bold font-raleway'>
          {!isEnglish ? 'Ver nuestra Carta' : 'See our Menu'}
        </p>
      </Link>
    </div>
  );
};

export default Cocktails;

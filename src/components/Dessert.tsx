'use client';
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';
const Dessert = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='flex flex-col items-center justify-between gap-6 w-[360px] h-[505px]'>
      <h2 className='text-5xl font-vibes font-light'>
        {!isEnglish ? 'Postre' : 'Dessert'}
      </h2>
      <img
        src='/postres.jpg'
        alt='Comida'
        className=' w-72 h-72 rounded-full object-cover'
      />
      <p className=' space-y-8 text-center font-raleway'>
        {!isEnglish
          ? 'Amplia variedad de postres pensados para los amantes del dulce. Deliciosos platos tradicionales de la repostería.'
          : 'Wide variety of desserts designed for those with a sweet tooth. Delicious traditional pastry dishes.'}
      </p>
      <Link href='/our-menu'>
        <p className='font-bold font-raleway'>
          {!isEnglish ? 'Ver nuestra Carta' : 'See our Menu'}
        </p>{' '}
      </Link>
    </div>
  );
};

export default Dessert;

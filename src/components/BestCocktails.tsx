/* eslint-disable @next/next/no-img-element */
'use client';

import { useLanguage } from '@/context/LangusgeContext';

const BestCocktails = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='flex items-center justify-center w-full h-fit gap-14 flex-col sm:flex-row'>
      <div className=''>
        <img
          src='https://res.cloudinary.com/duihhp37l/image/upload/v1724738520/essenza/imagenes%20Essenza/retro-cocktails-b12b00d_mvmmqt.jpg'
          alt='cocktail'
          className='rounded-full h-52 w-52 object-square'
        />
      </div>
      <div className='w-full sm:w-[60%] flex flex-col space-y-6 font-raleway items-center justify-center sm:justify-start sm:items-start'>
        <h2 className='text-2xl font-semibold text-center sm:text-start'>
          {!isEnglish ? 'LAS MEJORES COPAS DE CALPE' : 'BEST CALPE COCKTAILS'}
        </h2>
        <p className='text-sm w-[70%]'>
          {!isEnglish
            ? `Ven y conoce toda nuestra carta de cocktails y combinados en nuestra
          terraza muy acogedora, con estilo tipo chill-out, con iluminación
          tenue y sofás cómodos.`
            : `Come and discover our entire menu of cocktails and mixed drinks on our
          very cozy terrace, with a chill-out style, with soft lighting and
          comfortable sofas.`}
        </p>
      </div>
    </div>
  );
};

export default BestCocktails;

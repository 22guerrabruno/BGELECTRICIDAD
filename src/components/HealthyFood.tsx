/* eslint-disable @next/next/no-img-element */
'use client';

import { useLanguage } from '@/context/LangusgeContext';

const HealthyFood = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='flex items-center justify-center w-full h-fit gap-14 flex-col sm:flex-row'>
      <div className=''>
        <img
          src='https://res.cloudinary.com/duihhp37l/image/upload/v1724674909/essenza/imagenes%20Essenza/ensalada-de-bacalao-curado_fmvsog.jpg'
          alt='cocktail'
          className='rounded-full h-52 w-52 object-square'
        />
      </div>
      <div className='w-full sm:w-[60%] flex flex-col space-y-6 font-raleway items-center justify-center sm:justify-start sm:items-start'>
        <h2 className='text-2xl font-semibold text-center sm:text-start'>
          {!isEnglish ? 'COMIDA SALUDABLE' : 'HEALTHY FOOD'}
        </h2>
        <p className='text-sm w-[70%]'>
          {!isEnglish
            ? `En nuestra variada carta, encontrarás una amplia gama de platos saludables elaborados con productos de 
            primera calidad y con las técnicas más innovadoras de la cocina contemporánea.`
            : `In our varied menu, you will find a wide range of healthy dishes made with top quality products and with the most 
            innovative techniques of contemporary cuisine.`}
        </p>
      </div>
    </div>
  );
};

export default HealthyFood;

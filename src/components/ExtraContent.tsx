'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';
import { motion } from 'framer-motion';

const ExtraContent = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='w-full relative flex flex-col justify-center items-center mt-10'>
      <img
        src='/constante-ev.jpg'
        alt='Logo'
        className='w-full h-[500px] object-cover'
      />
      <div
        className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white bg-black bg-opacity-35
       font-raleway '>
        <div className='py-5 px-8 flex flex-col items-center justify-center gap-4'>
          <p className=' w-full'>
            <motion.span
              className='text-3xl md:text-6xl text-center flex items-center justify-center font-oswald-400'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}>
              {!isEnglish ? 'EN CONSTANTE EVOLUCIÓN' : 'IN CONSTANT EVOLUTION'}
            </motion.span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraContent;

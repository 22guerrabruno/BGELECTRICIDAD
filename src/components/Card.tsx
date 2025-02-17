'use client';
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* eslint-disable @next/next/no-img-element */
const Card = () => {
  const { isEnglish } = useLanguage();
  return (
    <div
      className='w-full grid grid-cols-1 md:grid-cols-3 items-center justify-between mt-2 h-fit gap-8 p-4'
      id='carta'>
      <div className='w-full relative flex flex-col justify-center items-center mt-10'>
        <img
          src='https://res.cloudinary.com/duihhp37l/image/upload/v1724692507/essenza/imagenes%20Essenza/ensalada-de-gambon-y_t16oyi.jpg'
          alt='Logo'
          className='w-full h-[239px] object-cover'
        />
        <div
          className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white bg-black bg-opacity-35
       font-raleway '>
          <div className='py-5 px-8 flex flex-col items-center justify-center gap-4'>
            <p className=' w-full'>
              <motion.span
                className='text-lg text-center flex items-center justify-center font-oswald-400'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}>
                {!isEnglish ? 'AUTENTICOS SABORES' : 'AUTHENTIC FLAVORS'}
              </motion.span>
            </p>
          </div>
        </div>
      </div>
      <div className='w-full relative flex flex-col justify-center items-center mt-10'>
        <img
          src='https://res.cloudinary.com/duihhp37l/image/upload/v1724692507/essenza/imagenes%20Essenza/ensalada-de-remolacha_n315zs.jpg'
          alt='Logo'
          className='w-full h-[239px] object-cover'
        />
        <div
          className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white bg-black bg-opacity-35
       font-raleway '>
          <div className='py-5 px-8 flex flex-col items-center justify-center gap-4'>
            <p className=' w-full'>
              <motion.span
                className='text-lg text-center flex items-center justify-center font-oswald-400'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}>
                {!isEnglish
                  ? 'UNA CITA CON LOS SENTIDOS'
                  : 'A DATE WITH THE SENSES'}
              </motion.span>
            </p>
          </div>
        </div>
      </div>
      <div className='w-full relative flex flex-col justify-center items-center mt-10'>
        <img
          src='https://res.cloudinary.com/duihhp37l/image/upload/v1724674909/essenza/imagenes%20Essenza/corvina-con-acelgas-y_kpwnon.jpg'
          alt='Logo'
          className='w-full h-[239px] object-cover'
        />
        <div
          className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white bg-black bg-opacity-35
       font-raleway '>
          <div className='py-5 px-8 flex flex-col items-center justify-center gap-4'>
            <p className=' w-full'>
              <motion.span
                className='text-lg  text-center flex items-center justify-center font-oswald-400'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}>
                {!isEnglish ? 'COCINA DE AUTOR' : "AUTHOR'S KITCHEN"}
              </motion.span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

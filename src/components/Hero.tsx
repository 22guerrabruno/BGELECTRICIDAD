'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='w-full relative flex flex-col justify-center items-center bg-gradient-to-r from-primary to-primary-dark text-white'>
      <div
        className='w-full flex flex-col font-bold justify-center items-center text-white
       font-raleway '>
        <div className='w-full font-oswald-300 bg-black bg-opacity-35  flex flex-col items-center justify-center gap-4  py-4'>
          <span className=' border-2 border-white px-6 py-3 hover:bg-gray-300 hover:text-gray-900 font-oswald rounded-sm'>
            {isEnglish ? 'CALL: +34 626 486 047' : 'LLAMAR: +34 626 486 047'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

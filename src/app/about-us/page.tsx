/* eslint-disable @next/next/no-img-element */
'use client';
import { useLanguage } from '@/context/LangusgeContext';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutUsPage = () => {
  const { isEnglish } = useLanguage();
  return (
    <>
      <div className='w-full relative flex flex-col justify-center items-center '>
        <img
          src='/cuadrosELC.jpg'
          alt='Logo'
          className='w-full h-[200px] object-cover'
        />
        <div
          className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white bg-black bg-opacity-35
       font-raleway '>
          <div className='py-5 px-8 flex flex-col items-center justify-center gap-4'>
            <Link href='/about-us'>
              <p className=' w-full'>
                <motion.span
                  className=' text-6xl text-center flex items-center justify-center font-oswald-400'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}>
                  {!isEnglish ? 'NOSOTROS' : 'ABOUT US'}
                </motion.span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-beetwen items-center mt-4 px-12'>
        <div className='flex flex-col items-center justify-center gap-6 min-w-[350px] max-w-[350px]'>
          <h2 className='text-[40px] font-oswald font-medium'>
            {!isEnglish ? 'CONÓCENOS' : 'GET TO KNOW US'}
          </h2>
          <p className='text-sm font-oswald text-center w-[300px]'>
            {!isEnglish
              ? `Soluciones Eléctricas a Medida para Cada Cliente`
              : `Custom Electrical Solutions for Every Customer`}
          </p>
          <p className='text-sm font-oswald text-center w-[300px]'>
            {!isEnglish
              ? `En BG Electricidad, ofrecemos un servicio profesional y personalizado para cada proyecto eléctrico, garantizando seguridad, eficiencia y calidad. Nos adaptamos a las necesidades específicas de hogares, negocios e industrias, brindando soluciones innovadoras y sostenibles.`
              : `At BG Electricidad, we offer professional and personalized service for each electrical project, guaranteeing safety, efficiency, and quality. We adapt to the specific needs of homes, businesses, and industries, providing innovative and sustainable solutions.`}
          </p>
          <p className='text-sm font-oswald text-center w-[300px]'>
            {!isEnglish
              ? `Contamos con un equipo altamente capacitado y comprometido con la excelencia. Confíe en nosotros para un servicio eléctrico seguro, moderno y adaptado a sus necesidades.`
              : `We have a highly trained team committed to excellence. Trust us for a safe, modern, and tailored electrical service.`}
          </p>
        </div>

        <div className='w-full flex items-center justify-center mt:20 lg:mt-0'>
          <img
            src='/furgo.jpeg'
            alt='quienes somos'
            className='w-[350px] lg:w-full min-w-[350px] aspect-auto object-cover '
          />
        </div>
      </div>
      <div className='w-full relative flex flex-col justify-center items-center mt-10'>
        <img
          src='/evolution.webp'
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
                {!isEnglish
                  ? 'EN CONSTANTE EVOLUCIÓN'
                  : 'IN CONSTANT EVOLUTION'}
              </motion.span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-4 px-12'>
        <div className='mb-10 w-full flex items-center justify-center flex-col'>
          <h2 className='text-[80px] font-oswald font-medium text-center'>
            {isEnglish ? 'GALLERY ' : 'GALERIA'}
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] gap-3 mt-4'>
            <img
              src='/paneles.jpg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
            <img
              src='/RV.webp'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
            <img
              src='/ledsol.jpeg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
            <img
              src='/cuadro2.jpg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
            <img
              src='/fermax.jpg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
            <img
              src='/aire.jpg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-4 px-12'>
        <div className='flex items-center gap-2 justify-center'>
          <hr className='w-[60px]' />
          <FaStar className='text-gray-400' /> <hr className='w-[60px]' />
        </div>

        <Link href='/contact-us'>
          <button className='bg-black text-white px-4 py-2 mt-4 rounded-lg mb-4'>
            {isEnglish ? 'CONTACT US' : 'CONTACTANOS'}
          </button>
        </Link>
      </div>
      <div className='font-raleway-400 text-xs w-full bg-gray-900 p-2 text-center text-white'>
        <p> © 2024 BG Electricidad. All Rights Reserved.</p>
        <a
          href='https://www.brunoguerracode.dev/'
          target='_blank'>
          Created by Bruno Guerra
        </a>
      </div>
    </>
  );
};

export default AboutUsPage;

/* eslint-disable @next/next/no-img-element */
'use client';
import { useLanguage } from '@/context/LangusgeContext';

const Gastronomy = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='flex items-center justify-center w-full h-fit gap-14 flex-col sm:flex-row'>
      <div className='w-full sm:w-[60%] flex flex-col space-y-6 font-raleway items-center justify-center sm:justify-start sm:items-start sm:order-1 order-2'>
        <h2 className='text-2xl font-semibold text-center sm:text-start'>
          {!isEnglish
            ? 'DELICIOSA GASTRONOMÍA MEDITERRANEA'
            : 'DELICIOUS MEDITERRANEAN GASTRONOMY'}
        </h2>
        <p className='text-sm w-[70%]'>
          {!isEnglish
            ? `En Iguana Beach Bar ofrecemos deliciosos arroces valencianos, ensaladas saludables y divertidas, 
            excelentes carnes de primera calidad, pescados de la bahía, gran variedad de entrantes y deliciosos postres y cócteles.`
            : `At Iguana Beach Bar we offer delicious Valencian rice dishes, healthy and fun salads,
            excellent top quality meats, bay fish, a wide variety of starters and delicious desserts and cocktails.`}
        </p>
      </div>
      <div className=' sm:order-2 order-1'>
        <img
          src='https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/lubina-salvaje-con-micro_hxfxoy.jpg'
          alt='lubina'
          className='rounded-full h-52 w-52 object-square'
        />
      </div>
    </div>
  );
};

export default Gastronomy;

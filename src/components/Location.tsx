'use client';
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiTripadvisor } from 'react-icons/si';
import { Button } from './ui/button';

const Location = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='w-full justify-center items-center flex flex-col'>
      <h2 className='font-oswald text-4xl font-bold w-full flex items-center justify-center'>
        {!isEnglish ? 'Ubicación' : 'Location'}
      </h2>
      <hr className='h-1 border-1 w-full border-gray-200 mt-10' />
      <div className='w-full flex flex-col lg:flex-row lg:items-start items-center justify-center mt-10 h-fit gap-8 pb-8 '>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19401.703801432217!2d0.06848990686037705!3d38.64476487982951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129dff1b32e06883%3A0x8cd8ba494633d10e!2sESSENZA%20RESTAURANT.!5e0!3m2!1ses!2ses!4v1724673803179!5m2!1ses!2ses'
          style={{ border: 0 }}
          loading='lazy'
          className='w-[350px] h-[500px] sm:w-[500px] sm:h-[450px] md:w-[600px] md:h-[450px] lg:w-[750px] mb-10'></iframe>
        <div className='flex flex-col items-start justify-center gap-6 w-full px-4 max-w-[300px]'>
          <h2 className='text-2xl font-semibold text-center sm:text-start font-oswald'>
            {!isEnglish ? 'Encuéntranos en:' : 'Find us at:'}
          </h2>
          <p className='font-raleway-400 text-sm'>
            Calle Gran Bretaña, Calpe (Alicante) <br />
            Teléfono: 96 694 06 57
          </p>
          <p className='font-raleway-400 text-sm '>
            {!isEnglish
              ? `Ofrecemos una cocina de autor donde el producto de la tierra y las recetas tradicionales se fusionan 
     con tendencias actuales y con una elegante presentación.`
              : 'We offer a signature cuisine where local products and traditional recipes merge with current trends and an elegant presentation.'}
          </p>
          <a
            href='https://www.facebook.com/Essenza-Restaurante-Pizza-Pasta-224160381498020/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 font-raleway-400 text-sm'>
            <FaFacebookSquare
              className='text-4xl text-blue-800'
              size={24}
            />
            {isEnglish
              ? 'Connect us on Facebook'
              : 'Conecta con nosotros en Facebook'}
          </a>
          <a
            href='https://www.tripadvisor.es/UserReviewEdit-g187526-d14131088-Essenza_Restaurante_Pizza-Calpe_Costa_Blanca_Province_of_Alicante_Valencian_Community.html'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 font-raleway-400 text-sm'>
            <SiTripadvisor
              className='text-4xl text-green-800'
              size={24}
            />
            {isEnglish
              ? 'Rate us on TripAdvisor'
              : 'TripAdvisor, danos tu opinión'}
          </a>
          <Link
            href='/contact-us'
            className='w-full flex items-center justify-center'>
            <Button
              className='border-[2px] border-gray-300 bg-white text-black hover:bg-gray-300 
              hover:font-bold hover:text-gray-900 whitespace-nowrap w-full'>
              {isEnglish ? ' Contact Us' : 'Contactanos'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;

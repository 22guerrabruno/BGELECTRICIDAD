import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LangusgeContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const { isEnglish } = useLanguage();
  return (
    <section className='bg-gradient-to-r from-primary to-primary-dark text-white py-20'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            {isEnglish ? 'Powering Your Future' : 'Potenciando tu futuro'}
          </h1>
          <p className='text-xl mb-8'>
            {isEnglish
              ? "Expert electrical solutions for homes and businesses. From new installations to smart upgrades, we've got you covered."
              : 'Soluciones eléctricas expertas para hogares y empresas. Desde nuevas instalaciones hasta actualizaciones inteligentes, lo tenemos cubierto.'}
          </p>
          <Link href='/contact-us'>
            <Button
              size='lg'
              variant='secondary'>
              {isEnglish ? 'Get in Touch' : 'Ponte en contacto'}
            </Button>
          </Link>
        </div>
        <div className='md:w-1/2'>
          <Image
            src='/trabajohero.webp'
            alt='Electrician at work'
            width={600}
            height={400}
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  );
}

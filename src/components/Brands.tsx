import { useLanguage } from '@/context/LangusgeContext';
import Image from 'next/image';

const brandLogos = [
  '/misubishi.png',
  '/fermax.png',
  '/legrand.png',
  '/schneider.png',
  '/samsung.jpg',
  '/huawei.jpg',
  '/wallbox.jpeg',
  '/simon1.png',
  '/siemens.jpg',
  '/dakin.png',
  '/niessen.jpg',
  '/abb.jpg',
];

export default function Brands() {
  const { isEnglish } = useLanguage();
  return (
    <section className='py-12 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12 font-oswald'>
          {!isEnglish ? 'Marcas con las que trabajamos' : 'Brands we work with'}
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center'>
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className='flex justify-center'>
              <Image
                src={logo || '/placeholder.svg'}
                alt={`Brand logo ${index + 1}`}
                width={160}
                height={160}
                className=' w-auto object-contain rounded-sm'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

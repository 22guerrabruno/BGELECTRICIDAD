'use client';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LangusgeContext';
import { sendNewContact } from '@/utils/send-email';
import { Link, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { set } from 'react-hook-form';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiTripadvisor } from 'react-icons/si';

const ContactUs = () => {
  const { isEnglish } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setLoading(true);
    try {
      const res = sendNewContact(name, email, message);
      setName('');
      setEmail('');
      setMessage('');
      console.log(res);
    } catch (error: unknown) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div className='w-full flex flex-col items-center justify-center gap-2 mt-10'>
      <h1 className='text-5xl font-bold font-oswald'>
        {isEnglish ? 'Contact Us' : 'Contacto'}
      </h1>
      <p className='text-sm text-center font-raleway-400 max-w-[80%]'>
        {isEnglish
          ? `We are here to help you. If you have any questions or need help, please
        contact us.`
          : `Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas ayuda, por favor contáctanos.`}
      </p>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-2 mt-2 px-4'>
        <div className='flex flex-col items-center justify-center w-full gap-4 mb-4'>
          <form
            onSubmit={onSubmit}
            className='w-full flex flex-col items-center gap-4 mb-3'>
            <div className='flex flex-col leading-6 items-start justify-center gap-2'>
              <label
                htmlFor='name'
                className='w-full text-start font-raleway-400 text-sm'>
                {isEnglish ? 'Full name:' : 'Nombre y Apellido:'}
              </label>
              <input
                type='text'
                placeholder={isEnglish ? 'John Doe' : 'Juan Perez'}
                name='name'
                className='w-96 h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-gray-600'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col leading-6 items-start justify-center gap-2'>
              <label
                htmlFor='email'
                className='w-full text-start font-raleway-400 text-sm'>
                Email:
              </label>
              <input
                type='email'
                name='email'
                placeholder='example@email.com'
                className='w-96 h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-gray-600'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col leading-6 items-start justify-center gap-2'>
              <label
                htmlFor='message'
                className='w-full text-start font-raleway-400 text-sm'>
                {isEnglish ? 'Message:' : 'Mensaje:'}
              </label>
              <textarea
                placeholder={
                  isEnglish
                    ? 'Please enter your message'
                    : 'Por favor ingrese su mensaje'
                }
                rows={5}
                name='message'
                className='w-96 h-40 border-2 border-gray-300 rounded-md px-2 focus:outline-gray-600 resize-none'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='w-96 h-10 hover:bg-gray-300 bg-transparent hover:text-white rounded-md border-2 border-gray-300 text-black'>
              {loading ? (
                <Loader2 className='animate-spin text-gray-300 items-center justify-center w-full' />
              ) : isEnglish ? (
                'Send'
              ) : (
                'Enviar'
              )}
            </button>
          </form>
        </div>
        <div className='flex flex-col items-start justify-center gap-6 w-full px-4 max-w-[300px]'>
          <h2 className='text-2xl font-semibold text-center sm:text-start font-raleway-800'>
            {!isEnglish ? 'Encuéntranos en:' : 'Find us at:'}
          </h2>
          <p className='font-raleway-400 text-sm'>
            Av. Pais Valencia 122 BJ, Benissa (Alicante) <br />
            Teléfono: +34 626 486 047
          </p>
          <p className='font-raleway-400 text-sm '>
            {!isEnglish
              ? `En BG Electricidad, ofrecemos un servicio profesional y personalizado para cada proyecto eléctrico, garantizando seguridad, eficiencia y calidad. Nos adaptamos a las necesidades específicas de hogares, negocios e industrias, brindando soluciones innovadoras y sostenibles.`
              : `At BG Electricidad, we offer a professional and personalized service 
              for each electrical project, ensuring safety, efficiency, and quality.
               We adapt to the specific needs of homes, businesses, and industries, providing innovative and sustainable solutions.`}
          </p>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-center gap-4 mb-4'>
        <hr className='h-1 border-1 w-full border-gray-200' />
        <Logo />
      </div>
      <div className='font-raleway-400 text-xs w-full bg-gray-900 p-2 text-center text-white flex items-center justify-between flex-wrap'>
        <p className='whitespace-nowrap w-full'>
          {' '}
          © 2018 BG Electricidad. All Rights Reserved.
        </p>
        <a
          href='https://www.brunoguerracode.dev/'
          target='_blank'
          className='whitespace-nowrap w-full'>
          Created by Bruno Guerra
        </a>
      </div>
    </div>
  );
};

export default ContactUs;

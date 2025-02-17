'use client';
import Logo from '@/components/Logo';

import { useLanguage } from '@/context/LangusgeContext';
import { sendNewContact } from '@/utils/send-email';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const { isEnglish } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setLoading(true);
    try {
      const res = sendNewContact(name, email, phone, message);
      const textResponse = isEnglish
        ? 'Contact Request sent successfully, we will contact you as soon as possible'
        : 'Correo Solicitud enviada correctamente, nos pondremos en contacto lo antes posible';
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      toast.success(textResponse, {
        duration: 5000,
        position: 'bottom-right',
      });
      navigate.push('/');

      console.log(res);
    } catch (error: unknown) {
      console.log(error);
      const textResponse = isEnglish
        ? 'Error sending contact request, please try again later'
        : 'Error al enviar la solicitud de contacto, por favor intente nuevamente más tarde';
      toast.error(textResponse, {
        duration: 5000,
        position: 'bottom-right',
      });
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
                required
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
                required
                placeholder='example@email.com'
                className='w-96 h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-gray-600'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col leading-6 items-start justify-center gap-2'>
              <label
                htmlFor='phone'
                className='w-full text-start font-raleway-400 text-sm'>
                {isEnglish ? 'Phone:' : 'Teléfono:'}
              </label>
              <input
                type='text'
                name='phone'
                required
                placeholder='+34 123 456 789'
                className='w-96 h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-gray-600'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                required
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

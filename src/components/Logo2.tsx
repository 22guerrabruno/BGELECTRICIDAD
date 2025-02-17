import Image from 'next/image';
import React from 'react';

const Logo = ({ className }) => {
  return (
    <Image
      src='/BGELECTRICIDADSINFONDO.png'
      alt='Logo'
      width={200}
      className={'object-cover image-highlight' + className}
      height={200}
    />
  );
};

export default Logo;

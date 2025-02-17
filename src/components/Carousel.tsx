/* eslint-disable react/prop-types */
/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  imageArray: string[];
  className?: string;
  showArrows?: boolean;
  showThumbs?: boolean;
  showDots?: boolean;
  IconLeft?: JSX.Element;
  IconRight?: JSX.Element;
  autoPlaySpeed: number;
  autoPlay?: boolean;
  showIndex?: boolean;
}

const Carousel = ({
  imageArray,
  className,
  showArrows,
  showThumbs,
  showDots,

  IconLeft = <ChevronLeft size={24} />,
  IconRight = <ChevronRight size={24} />,
  autoPlaySpeed,
  autoPlay = false,
  showIndex,
  ...props
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageArrayInternal] = useState(imageArray);
  const [selectedImage, setSelectedImage] = useState(imageArray[0]);
  const [showArrowsInternal] = useState(showArrows);
  const [showDotsInternal] = useState(showDots);
  const [showThumbsInternal] = useState(showThumbs);
  const [showIndexInternal] = useState(showIndex);
  const [isHovering, setIsHovering] = useState(false);

  const prevImage = () => {
    currentIndex === 0
      ? setCurrentIndex(imageArray.length - 1)
      : setCurrentIndex(currentIndex - 1);
    setSelectedImage(imageArray[currentIndex]);
  };
  const nextImage = () => {
    currentIndex === imageArray.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
    setSelectedImage(imageArray[currentIndex]);
  };

  useEffect(() => {
    if (isHovering) return;
    if (autoPlay) {
      const interval = setInterval(() => {
        currentIndex === imageArray.length - 1
          ? setCurrentIndex(0)
          : setCurrentIndex(currentIndex + 1);
        setSelectedImage(imageArray[currentIndex]);
      }, autoPlaySpeed);
      return () => clearInterval(interval);
    }
  }, [currentIndex, imageArray, isHovering]);

  return (
    <div className='flex flex-col items-center justify-center gap-2 p-2 w-full h-[300px] '>
      <div
        className={clsx(
          `relative aspect-auto  h-auto ${className}
          `
        )}>
        <img
          {...props}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          tabIndex={currentIndex}
          src={selectedImage}
          alt='carousel'
          className='object-cover w-full h-full cursor-pointer'
        />
        {showArrowsInternal && (
          <>
            <button
              type='button'
              onClick={prevImage}
              className='absolute top-0 bottom-0 translate-x-1/2 p-2 -left-4 z-10  bg-neutral-400/35 h-full'>
              {IconLeft}
            </button>
            <button
              type='button'
              onClick={nextImage}
              className='absolute top-0 bottom-0 translate-x-1/2 p-2 right-4 z-10  bg-neutral-400/35  h-full'>
              {IconRight}
            </button>
          </>
        )}
        {showDotsInternal && (
          <div className='flex justify-center items-center gap-2 absolute -bottom-22 w-full'>
            {imageArrayInternal.map((img, index) => (
              <button
                key={index}
                type='button'
                onClick={() => {
                  setCurrentIndex(index);
                  setSelectedImage(imageArray[index]);
                }}
                className={clsx(
                  'w-2 h-2 rounded-full bg-neutral-800/75',
                  index === currentIndex && 'bg-primary-500'
                )}></button>
            ))}
          </div>
        )}
        {showIndexInternal && (
          <div
            className={clsx(
              'absolute top-2 right-0 p-1  rounded-md text-xs text-black',
              !showArrowsInternal && 'bg-neutral-300/65 right-1'
            )}>
            {currentIndex + 1}/{imageArray.length}
          </div>
        )}
      </div>
      {showThumbsInternal && (
        <div className='flex justify-center items-center gap-2 overflow-x-auto overflow-y-hidden  w-full z-20'>
          {imageArrayInternal.map((image, index) => (
            <img
              key={index}
              src={image}
              alt='thumb'
              className={clsx(
                'w-14 h-auto aspect-video rounded-md object-cover cursor-pointer',
                index === currentIndex && 'border-2 border-primary-500'
              )}
              onClick={() => {
                setCurrentIndex(index);
                setSelectedImage(imageArray[index]);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;

import Image from 'next/image';
import Carousel from 'react-multi-carousel';

import Poster from '@/assets/images/poster.webp';

export const CarouselWrapper = () => {
  return (
    <Carousel
      arrows
      autoPlay
      autoPlaySpeed={2000}
      infinite
      itemClass='p-4'
      pauseOnHover
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      slidesToSlide={1}
      draggable={true}
    >
      <div className='cursor-draggable'>
        <Image
          className='w-full h-[500px] object-cover rounded-lg'
          src={Poster}
          alt='Poster'
        />
      </div>
      <div className='cursor-draggable'>
        <Image
          className='w-full h-[500px] object-cover rounded-lg'
          src={Poster}
          alt='Poster'
        />
      </div>
      <div className='cursor-draggable'>
        <Image
          className='w-full h-[500px] object-cover rounded-lg'
          src={Poster}
          alt='Poster'
        />
      </div>
    </Carousel>
  );
};

import Carousel, { CarouselProps } from 'react-multi-carousel';
import { PropsWithChildren } from 'react';

export const CarouselWrapper = ({
  children,
  ...props
}: PropsWithChildren<CarouselProps>) => {
  return <Carousel {...props}>{children}</Carousel>;
};

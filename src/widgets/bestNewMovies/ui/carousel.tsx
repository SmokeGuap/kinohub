'use client';
import { Movie as MovieType } from '@/entities/Movie/model/movie';
import { Movie } from '@/entities/Movie/ui/Movie';
import { CarouselWrapper } from '@/shared/ui/carousel';

type Props = {
  movies: MovieType[];
};

export const Carousel = async ({ movies }: Props) => {
  return (
    <CarouselWrapper
      itemClass='px-4 h-[500px]'
      autoPlay
      autoPlaySpeed={2000}
      infinite
      pauseOnHover
      slidesToSlide={1}
      arrows
      responsive={{
        desktopXL: {
          breakpoint: {
            max: 3000,
            min: 1400,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        desktopL: {
          breakpoint: {
            max: 1400,
            min: 1100,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: {
            max: 1100,
            min: 800,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
        mobileXL: {
          breakpoint: {
            max: 800,
            min: 600,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        mobileL: {
          breakpoint: {
            max: 600,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      draggable
    >
      {movies.map((movie: MovieType) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster={movie.poster?.url}
          name={movie.name}
          year={movie.year}
          rating={movie.rating.kp}
          movieLength={movie.movieLength}
        />
      ))}
    </CarouselWrapper>
  );
};

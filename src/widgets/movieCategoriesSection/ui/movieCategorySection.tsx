'use client';
import { Movie as MovieType } from '@/entities/Movie/model/movie';
import { Movie } from '@/entities/Movie';
import useWidth from '@/shared/hooks/useWidth';
import { CarouselWrapper } from '@/shared/ui/carousel';

type Props = {
  isFirst?: boolean;
  genre: string;
  movies: MovieType[];
};

export const MovieCategorySection = ({ movies, isFirst, genre }: Props) => {
  const width = useWidth();
  return (
    <section
      className={`${
        isFirst ? 'mt-[550px]' : 'mt-12'
      } border-t pt-4 border-color2`}
    >
      <h2 className='text-2xl font-medium mb-2'>{genre}</h2>
      <CarouselWrapper
        itemClass='pr-4'
        partialVisible={width > 1100 ? true : false}
        slidesToSlide={3}
        arrows
        responsive={{
          desktopXL: {
            breakpoint: {
              max: 3000,
              min: 1400,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          desktopL: {
            breakpoint: {
              max: 1400,
              min: 1100,
            },
            items: 4,
            partialVisibilityGutter: 40,
            slidesToSlide: 2,
          },
          tablet: {
            breakpoint: {
              max: 1100,
              min: 800,
            },
            items: 3,
            partialVisibilityGutter: 30,
            slidesToSlide: 2,
          },
          mobileXL: {
            breakpoint: {
              max: 800,
              min: 600,
            },
            items: 2,
            partialVisibilityGutter: 30,
            slidesToSlide: 1,
          },
          mobileL: {
            breakpoint: {
              max: 600,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
            slidesToSlide: 1,
          },
        }}
      >
        {movies.map((movie: MovieType) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster={movie.poster?.url}
            name={movie.name}
            year={movie.year}
            movieLength={movie.movieLength}
            rating={movie.rating.kp}
          />
        ))}
      </CarouselWrapper>
    </section>
  );
};

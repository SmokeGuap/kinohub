'use client';
import Image from 'next/image';

import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import { MovieOverview } from './movieOverview';

type Props = {
  name: string;
  description: string;
  shortDescription: string;
  poster: string;
  genres: string;
  year: number;
  rating: number;
  country: string;
  director: string;
  actors: string;
  movieLength: number;
};

export const MovieAbout = ({
  name,
  description,
  shortDescription,
  poster,
  genres,
  country,
  year,
  director,
  actors,
  rating,
  movieLength,
}: Props) => {
  const [isFullDesc, setIsFullDescription] = useState(false);

  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <Image
        width={300}
        height={400}
        src={poster}
        alt='Movie Poster'
        className='w-full md:w-64 rounded-lg'
      />
      <div className='md:col-span-2 space-y-4'>
        <MovieOverview
          name={name}
          rating={rating}
          genres={genres}
          country={country}
          year={year}
          director={director}
          actors={actors}
          movieLength={movieLength}
        />
        <div>
          <h2 className='text-xl font-semibold mb-2'>Описание</h2>
          {!isFullDesc && <p className='leading-relaxed'>{shortDescription}</p>}
          {isFullDesc && <p className='leading-relaxed'>{description}</p>}
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          <Button
            type='submit'
            className='bg-color1'
            onClick={() => setIsFullDescription(!isFullDesc)}
          >
            {isFullDesc ? 'Показать меньше' : 'Показать больше'}
          </Button>
          <Button>Добавить в избранное</Button>
        </div>
      </div>
    </div>
  );
};

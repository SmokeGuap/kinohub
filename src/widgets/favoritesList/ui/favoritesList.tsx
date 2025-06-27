'use client';
import { Movie } from '@/entities/Movie';
import { Movie as MovieType } from '@/entities/Movie/model/movie';

export const FavoritesList = () => {
  const favorites: MovieType[] = JSON.parse(
    localStorage.getItem('kinohub-favorites') || ''
  );

  return (
    <article>
      <h1 className='text-xl md:text-3xl font-bold mb-4'>Избранные</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
        {favorites.map((movie) => (
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
      </div>
    </article>
  );
};

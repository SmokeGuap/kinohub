'use client';
import { useEffect, useState } from 'react';

import SearchIcon from '@/assets/icons/search.svg';
import { getMoviesBySearch } from '@/entities/Movie/api/getMoviesBySearch';
import { Movie } from '@/entities/Movie/model/movie';
import Image from 'next/image';
import { useDebounce } from '@/shared/hooks/useDebounce';
import Link from 'next/link';

type Props = {
  isMobile?: boolean;
};

export const Search = ({ isMobile }: Props) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>();
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(query, 600);

  useEffect(() => {
    if (debouncedSearchTerm)
      getMoviesBySearch(debouncedSearchTerm).then((data) =>
        setMovies(data.docs)
      );
  }, [debouncedSearchTerm]);

  return (
    <div
      className={
        isMobile ? 'mt-12 block sm:hidden relative' : 'hidden sm:block relative'
      }
    >
      <form>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <div className='relative flex'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none'>
            <SearchIcon />
          </div>
          <input
            type='search'
            id='search'
            className='block p-2 ps-10 w-full border rounded-lg bg-background border-color2 placeholder-foreground'
            placeholder='Поиск...'
            value={query}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      {isFocused && query.length > 0 && movies && (
        <ul className='absolute right-0 z-10 mt-1 w-full md:w-2/1 bg-background border border-color2 rounded-lg shadow-lg'>
          {movies.map((movie) => (
            <Link
              href={`/films/${movie.id}`}
              key={movie.id}
              className='flex items-center gap-3 p-2 hover:bg-color2 rounded cursor-pointer'
            >
              <Image
                width={300}
                height={400}
                src={movie.poster?.url}
                alt={movie.name}
                className='w-12 h-16 object-cover rounded'
              />
              <span>{movie.name}</span>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

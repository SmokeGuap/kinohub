import { formatFilmLength } from '@/shared/lib/formatFilmLength';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type Props = {
  poster: string;
  year: number;
  name: string;
  movieLength: number;
  rating: number;
  id: number;
};

export const Movie = ({
  poster,
  name,
  id,
  year,
  movieLength,
  rating,
}: Props) => {
  const isDragging = useRef(false);
  const startPos = useRef<{ x: number; y: number }>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = false;
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!startPos.current) return;
    const dx = Math.abs(e.clientX - startPos.current.x);
    const dy = Math.abs(e.clientY - startPos.current.y);
    if (dx > 5 || dy > 5) {
      isDragging.current = true;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
    }
  };
  return (
    <Link
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      draggable={false}
      className='relative group'
      href={`/movie/${id}`}
    >
      <Image
        className='rounded-lg w-full h-full object-cover'
        src={poster}
        width={300}
        height={400}
        alt={name}
      />
      <div className='absolute inset-0 bg-background opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg'>
        <p className='absolute top-2 right-2 bg-color2 px-2 py-1 rounded-lg text-sm'>
          {rating.toFixed(1)}
        </p>
        <div className='absolute inset-0 flex justify-center items-center px-2 text-center'>
          <h3 className='text-lg font-semibold'>{name}</h3>
        </div>
        <p className='absolute bottom-2 left-2 text-sm'>{year}</p>
        <p className='absolute bottom-2 right-2 text-sm'>
          {formatFilmLength(movieLength)}
        </p>
      </div>
    </Link>
  );
};

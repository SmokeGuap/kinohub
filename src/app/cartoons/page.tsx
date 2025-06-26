import { MovieList } from '@/widgets/movieList';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'KinoHub — Мультфильмы',
  description: 'Лучшие мультфильмы на каждый день',
};

export default function Cartoons() {
  return (
    <Suspense>
      <MovieList type={'cartoon'} />
    </Suspense>
  );
}

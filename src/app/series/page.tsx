import { MovieList } from '@/widgets/movieList';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'KinoHub — Сериалы',
  description: 'Лучшие сериалы на каждый день',
};

export default function Series() {
  return (
    <Suspense>
      <MovieList type={'tv-series'} />
    </Suspense>
  );
}

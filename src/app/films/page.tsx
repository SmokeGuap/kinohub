import { MovieList } from '@/widgets/movieList';
import { Suspense } from 'react';

export default function Films() {
  return (
    <Suspense>
      <MovieList type={'movie'} />
    </Suspense>
  );
}

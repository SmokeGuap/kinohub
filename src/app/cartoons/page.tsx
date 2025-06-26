import { MovieList } from '@/widgets/movieList';
import { Suspense } from 'react';

export default function Cartoons() {
  return (
    <Suspense>
      <MovieList type={'cartoon'} />
    </Suspense>
  );
}

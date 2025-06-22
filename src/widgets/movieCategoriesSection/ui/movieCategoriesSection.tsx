import { getMovies } from '@/entities/Movie/api/getMovies';
import { MovieCategorySection } from '@/widgets/movieCategoriesSection/ui/movieCategorySection';

export const MovieCategoriesSection = async () => {
  const data = await getMovies({
    page: 1,
    limit: 20,
    sortField: ['votes.kp', 'rating.kp'],
    sortType: ['-1', '-1'],
    'genres.name': 'комедия',
    selectFields: ['poster', 'name', 'id'],
    notNullFields: ['poster.url', 'name'],
  });

  return (
    <section>
      <MovieCategorySection isFirst movies={data.docs} />
      <MovieCategorySection movies={data.docs} />
      <MovieCategorySection movies={data.docs} />
      <MovieCategorySection movies={data.docs} />
    </section>
  );
};

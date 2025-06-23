import { getMoviesByGenre } from '@/entities/Movie/api/getMoviesByGenre';
import { MovieCategorySection } from '@/widgets/movieCategoriesSection/ui/movieCategorySection';

export const MovieCategoriesSection = async () => {
  const { docs: comedy } = await getMoviesByGenre('комедия');
  const { docs: action } = await getMoviesByGenre('боевик');
  const { docs: western } = await getMoviesByGenre('вестерн');
  const { docs: war } = await getMoviesByGenre('военный');
  const { docs: adult } = await getMoviesByGenre('для взрослых');
  const { docs: documentary } = await getMoviesByGenre('документальный');
  const { docs: drama } = await getMoviesByGenre('драма');
  const { docs: crime } = await getMoviesByGenre('криминал');
  const { docs: family } = await getMoviesByGenre('семейный');

  return (
    <section>
      <MovieCategorySection genre='Комедии' isFirst movies={comedy} />
      <MovieCategorySection genre='Боевики' movies={action} />
      <MovieCategorySection genre='Вестерны' movies={western} />
      <MovieCategorySection genre='Военные' movies={war} />
      <MovieCategorySection genre='Для взрослых' movies={adult} />
      <MovieCategorySection genre='Документальные' movies={documentary} />
      <MovieCategorySection genre='Драмы' movies={drama} />
      <MovieCategorySection genre='Криминал' movies={crime} />
      <MovieCategorySection genre='Семейные' movies={family} />
    </section>
  );
};

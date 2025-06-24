import { getMovies } from './getMovies';

export const getMoviesByGenre = (genre: string) => {
  return getMovies({
    page: 1,
    limit: 20,
    sortField: ['votes.kp', 'rating.kp'],
    sortType: ['-1', '-1'],
    'genres.name': genre,
    selectFields: [
      'poster',
      'name',
      'id',
      'year',
      'movieLength',
      'rating',
      'genres',
    ],
    notNullFields: ['poster.url', 'name'],
  });
};

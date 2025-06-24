import qs from 'qs';

import { apiInstance } from '@/shared/api/base';
import { Movie } from '../model/movie';

type GetMoviesParams = {
  [key: string]: string | number | string[];
};

type GetMovies<T> = {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};

export const getMovies = (params: GetMoviesParams) => {
  const queryString = qs.stringify(params, { arrayFormat: 'repeat' });

  return apiInstance.get<GetMovies<Movie>>(`/movie?${queryString}`);
};

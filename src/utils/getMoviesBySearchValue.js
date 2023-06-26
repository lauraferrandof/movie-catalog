import { filterMoviesByTitle } from './filterMoviesByTitle';

export const getMoviesBySearchValue = (searchValue) => (movies) => {
  if (searchValue) {
    return filterMoviesByTitle(movies, searchValue);
  }
  return movies;
};

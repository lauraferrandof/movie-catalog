import { useQuery } from 'react-query';

import { selectSearchValue, useSearch } from '../../store/search';
import { getMoviesBySearchValue } from '../../utils/getMoviesBySearchValue';
import { getMovies } from './getMovies';

export const useMoviesQuery = () => {
  const searchValue = useSearch(selectSearchValue);

  return useQuery(['movies'], getMovies, {
    refetchOnWindowFocus: false,
    select: getMoviesBySearchValue(searchValue),
  });
};

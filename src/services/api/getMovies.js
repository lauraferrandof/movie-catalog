import { getLocalStorageData } from '../../utils/getLocalStorageData';
import { setLocalStorageData } from '../../utils/setLocalStorageData';
import { transformAndNormalizeData } from '../../utils/transformAndNormalizeData';
import { fetchMovies } from './fetchMovies';

export const getMovies = async () => {
  const localStorageData = getLocalStorageData('movies');

  if (localStorageData) {
    return new Promise((resolve) => resolve(JSON.parse(localStorageData)));
  }

  const { errorMessage, items } = await fetchMovies();

  if (errorMessage) {
    throw new Error(errorMessage);
  }

  const transformedData = transformAndNormalizeData(items);

  setLocalStorageData('movies', transformedData);
  return new Promise((resolve) => resolve(transformedData));
};

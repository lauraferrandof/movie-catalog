import { TOP_100_MOVIES_ENDPOINT } from './constants';
import { fetchUrl } from './fetchUrl';
import { getEndpointUrl } from './getEndpointUrl';

const url = getEndpointUrl(TOP_100_MOVIES_ENDPOINT);

export const fetchMovies = () => fetchUrl(url);

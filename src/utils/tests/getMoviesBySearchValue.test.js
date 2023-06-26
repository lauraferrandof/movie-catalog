import { getMoviesBySearchValue } from '../getMoviesBySearchValue';
import { normalizedMoviesFixture } from '../fixtures';

describe('getMoviesBySearchValue', () => {
  it('returns only movies whose title matches user search', () => {
    const expectedResult = {
      1: {
        id: '1',
        image: '',
        rating: '7',
        title: 'The Matrix',
        year: '1999',
      },
      2: {
        id: '2',
        image: '',
        rating: '7',
        title: 'The Matrix Resurrections',
        year: '2021',
      },
    };

    const returnedFn = getMoviesBySearchValue('matrix');

    expect(returnedFn(normalizedMoviesFixture)).toMatchObject(expectedResult);
  });

  it('returns all movies when user search is empty', () => {
    const expectedResult = {
      1: {
        id: '1',
        image: '',
        rating: '7',
        title: 'The Matrix',
        year: '1999',
      },
      2: {
        id: '2',
        image: '',
        rating: '7',
        title: 'The Matrix Resurrections',
        year: '2021',
      },
      3: {
        id: '3',
        image: '',
        rating: '7',
        title: 'Spider-Man: No Way Home',
        year: '2021',
      },
    };

    const returnedFn = getMoviesBySearchValue('');

    expect(returnedFn(normalizedMoviesFixture)).toMatchObject(expectedResult);
  });
});

import { filterMoviesByTitle } from '../filterMoviesByTitle';
import { normalizedMoviesFixture } from '../fixtures';

describe('filterMoviesByTitle', () => {
  it('returns only movies whose title matches a given string', () => {
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

    expect(
      filterMoviesByTitle(normalizedMoviesFixture, 'matrix')
    ).toMatchObject(expectedResult);
  });
});

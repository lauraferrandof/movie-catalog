import { filterMoviesById } from '../filterMoviesById';
import { normalizedMoviesFixture } from '../fixtures';

describe('filterMoviesById', () => {
  it('returns only movies that do not match a given id', () => {
    const expectedResult = {
      1: {
        id: '1',
        image: '',
        rating: '7',
        title: 'The Matrix',
        year: '1999',
      },
      3: {
        id: '3',
        image: '',
        rating: '7',
        title: 'Spider-Man: No Way Home',
        year: '2021',
      },
    };

    expect(filterMoviesById(normalizedMoviesFixture, 2)).toMatchObject(
      expectedResult
    );
  });
});

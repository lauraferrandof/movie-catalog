import { transformAndNormalizeData } from '../transformAndNormalizeData';
import { moviesFixture } from '../fixtures';

describe('transformAndNormalizeData', () => {
  it('transforms movies array into movies object', () => {
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

    expect(transformAndNormalizeData(moviesFixture)).toMatchObject(
      expectedResult
    );
  });
});

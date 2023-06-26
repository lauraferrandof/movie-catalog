import { screen } from '@testing-library/react';

import { normalizedMoviesFixture } from '../../../utils/fixtures';
import { render } from '../../../utils/reactTestingLibraryWrapper';
import { MoviesList } from '..';

describe('<MoviesList />', () => {
  it('renders list a list of movies', () => {
    render(<MoviesList movies={normalizedMoviesFixture} />);

    expect(screen.getAllByRole('article')).toHaveLength(
      Object.keys(normalizedMoviesFixture).length
    );
  });
});

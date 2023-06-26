import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '../../../../../utils/reactTestingLibraryWrapper';
import { MovieCard } from '..';

const movie = {
  id: '1',
  image: '',
  rating: '7',
  title: 'The Matrix',
  year: '1999',
};

describe('<MovieCard />', () => {
  it('renders all movie data', () => {
    render(<MovieCard movie={movie} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: movie.title })
    ).toBeInTheDocument();
    expect(screen.getByText(movie.year)).toBeInTheDocument();
    expect(screen.getByText(movie.rating)).toBeInTheDocument();
  });

  it('gets its heart icon filled after clicking on like button', () => {
    render(<MovieCard movie={movie} />);

    const likeButton = screen.getByRole('button');
    const likeIcon = screen.getByLabelText(/heart/i);

    expect(likeIcon).toHaveStyle('fill: transparent');

    userEvent.click(likeButton);

    expect(likeIcon).toHaveStyle('fill: #a056c5');
  });
});

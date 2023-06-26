import { screen } from '@testing-library/react';

import { render } from '../../../utils/reactTestingLibraryWrapper';
import { Header } from '..';

describe('<Header />', () => {
  it('renders app title', () => {
    render(<Header />);

    expect(
      screen.getByRole('heading', { name: /your next watch/i })
    ).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /favorites/i })
    ).toBeInTheDocument();
  });
});

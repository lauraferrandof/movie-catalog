import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '../../../../../utils/reactTestingLibraryWrapper';
import { HeaderNavLink } from '..';

describe('<HeaderNavLink />', () => {
  it('renders a link with the specified text', () => {
    render(<HeaderNavLink to="/">Home</HeaderNavLink>);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('navigates to the specified route', () => {
    render(<HeaderNavLink to="/favorites">Favorites</HeaderNavLink>);

    userEvent.click(screen.getByRole('link', { name: /favorites/i }));

    expect(window.location.href).toContain('favorites');
  });
});

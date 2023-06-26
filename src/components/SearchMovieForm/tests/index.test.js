import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '../../../utils/reactTestingLibraryWrapper';
import { SearchMovieForm } from '..';

describe('<SearchMovieForm />', () => {
  it('renders an input', () => {
    render(<SearchMovieForm />);

    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  });

  it('updates value when user types', () => {
    render(<SearchMovieForm />);

    const input = screen.getByLabelText(/search/i);
    const searchValue = 'Matrix';

    userEvent.type(input, searchValue);

    expect(input).toHaveValue(searchValue);
  });

  it('shows clear button when user types', () => {
    render(<SearchMovieForm />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();

    const input = screen.getByLabelText(/search/i);
    const searchValue = 'Matrix';
    userEvent.type(input, searchValue);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('clears value after clicking on clear button', () => {
    render(<SearchMovieForm />);

    const input = screen.getByLabelText(/search/i);
    const searchValue = 'Matrix';

    userEvent.type(input, searchValue);

    expect(input).toHaveValue(searchValue);

    userEvent.click(screen.getByRole('button'));

    expect(input).toHaveValue('');
  });
});

import { render, screen } from '@testing-library/react';

import { ErrorState } from '..';

const message = 'error state';

describe('<ErrorState />', () => {
  it('renders an image', () => {
    render(<ErrorState message={message} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders a message', () => {
    render(<ErrorState message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});

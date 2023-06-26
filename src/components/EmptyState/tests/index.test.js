import { render, screen } from '@testing-library/react';

import { EmptyState } from '..';

const message = 'empty state';

describe('<EmptyState />', () => {
  it('renders an image', () => {
    render(<EmptyState message={message} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders a message', () => {
    render(<EmptyState message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App2 from './App2';

describe('App component', () => {
  it('renders green', () => {
    const { container } = render(<App2 />);
    expect(container).toMatchSnapshot();
  });

  it('renders blue after button click', async () => {
    const user = userEvent.setup();

    render(<App2 />);
    const button = screen.getByRole('button', { name: 'Click Me' });

    await user.click(button);

    expect(screen.getByRole('heading', { name: 'Blue' }));
  });
});
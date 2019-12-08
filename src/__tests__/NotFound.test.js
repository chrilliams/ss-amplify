import React from 'react';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

it('renders page not found', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
  expect(getByTestId('not found message').textContent).toBe(
    'Sorry, page not found!'
  );
});

/* eslint-disable import/first */
import React from 'react';
import { render, wait } from '@testing-library/react';

import Favourites from './';

jest.mock('../shared/star', () => 'star');

jest.mock('../../hooks/application', () => ({
  useApplication: jest.fn(() => ({
    showFavourites: true,
    setApplication: jest.fn(),
  })),
}));

import { FavouritesContext } from '../../hooks/favourites';

describe('<Favourites /> ', () => {
  beforeEach(() => jest.clearAllMocks());

  const favourites = [{ id: 1 }];

  const TestComponent = () => (
    <FavouritesContext.Provider value={{ favourites }}>
      <Favourites />
    </FavouritesContext.Provider>
  );

  it('It should render OK', async () => {
    // Act
    const { container } = render(<TestComponent />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });
});

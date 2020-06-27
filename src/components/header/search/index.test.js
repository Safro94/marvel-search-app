/* eslint-disable import/first */
import React from 'react';
import { render, wait, waitForElement, fireEvent } from '@testing-library/react';

import Search from './';

jest.mock('../../../services/service', () => {
  return {
    GetCharacters: jest.fn().mockImplementation(() => {
      return [
        { id: 1, title: 'title' },
        { id: 2, title: 'title2' },
      ];
    }),
  };
});
import Service from '../../../services/service';

jest.mock('./style', () => {
  return {
    Input: 'input',
  };
});

jest.mock('../../../hooks/application', () => ({
  useApplication: jest.fn(() => ({
    setApplication: jest.fn(),
  })),
}));

import { FavouritesContext } from '../../../hooks/favourites';

describe('<Search /> ', () => {
  const history = [];
  beforeEach(() => {
    history.length = 0;
    jest.clearAllMocks();
  });

  const favourites = [{ id: 1 }];

  const TestComponent = () => (
    <FavouritesContext.Provider value={{ favourites }}>
      <Search.WrappedComponent history={history} />
    </FavouritesContext.Provider>
  );

  it('It should render OK', async () => {
    // Act
    const { container } = render(<TestComponent />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('When the input onBlur is called, it should call make a history push', async () => {
    //Arrange
    const url = '/comic/111';

    // Act
    const { getByTestId } = render(<TestComponent />);
    const input = await waitForElement(() => getByTestId('input'));
    fireEvent.blur(input, { target: { value: 'https://www.marvel.com/title/test/111/name' } });

    // Assert
    expect(history[0]).toBe(url);
  });

  it('When the input onBlur is called, it should call GetCharacters', async () => {
    // Act
    const { getByTestId } = render(<TestComponent />);
    const input = await waitForElement(() => getByTestId('input'));
    fireEvent.blur(input, { target: { value: 'spider' } });

    // Assert
    expect(Service.GetCharacters).toBeCalledTimes(1);
  });
});

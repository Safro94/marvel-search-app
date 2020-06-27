/* eslint-disable import/first */
import React from 'react';
import { render, wait, waitForElement, fireEvent } from '@testing-library/react';

import Card from './';

jest.mock('../../services/service', () => {
  return {
    GetComics: jest.fn().mockImplementation(() => {
      return [
        { id: 1, title: 'title' },
        { id: 2, title: 'title2' },
      ];
    }),
  };
});
import Service from '../../services/service';

jest.mock('../comic', () => 'comic');
jest.mock('../shared/modal', () => 'modal');
jest.mock('../shared/star', () => 'star');

jest.mock('./style', () => {
  return {
    Card: 'card',
    TextWrapper: 'textWrapper',
    Text: 'text',
    ComicsContainer: 'comicsContainer',
    StarContainer: 'starContainer',
    Wrapper: 'wrapper',
  };
});

jest.mock('../../hooks/application', () => ({
  useApplication: jest.fn(() => ({
    characters: [{ id: 1 }, { id: 2 }],
    setApplication: jest.fn(),
  })),
}));

import { FavouritesContext } from '../../hooks/favourites';

describe('<Card /> ', () => {
  beforeEach(() => jest.clearAllMocks());
  const character = {
    id: 1,
    name: 'spider-man',
    thumbnail: {
      path: 'path',
      extension: 'jpg',
    },
  };

  const favourites = [{ id: 1 }];
  const dispatch = jest.fn();

  const TestComponent = () => (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      <Card character={character} />
    </FavouritesContext.Provider>
  );

  it('It should render without the modal', async () => {
    // Act
    const { container } = render(<TestComponent />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('It should render with the modal', async () => {
    // Act
    const { container, getByTestId } = render(<TestComponent />);
    const card = await waitForElement(() => getByTestId('card'));
    fireEvent.click(card);
    await waitForElement(() => getByTestId('modal'));

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('When the card is clicked, it should call GetComics', async () => {
    // Act
    const { getByTestId } = render(<TestComponent />);
    const card = await waitForElement(() => getByTestId('card'));
    fireEvent.click(card);

    // Assert
    expect(Service.GetComics).toBeCalledTimes(1);
  });

  it('When the card is clicked, it should render the modal', async () => {
    // Act
    const { getByTestId } = render(<TestComponent />);
    const card = await waitForElement(() => getByTestId('card'));
    fireEvent.click(card);
    const modal = await waitForElement(() => getByTestId('modal'));

    // Assert
    expect(modal).toBeTruthy();
  });

  it('When the card is clicked, it should render the modal', async () => {
    // Act
    const { getByTestId } = render(<TestComponent />);
    const card = await waitForElement(() => getByTestId('card'));
    fireEvent.click(card);
    const modal = await waitForElement(() => getByTestId('modal'));

    // Assert
    expect(modal).toBeTruthy();
  });
});

/* eslint-disable import/first */
import React from 'react';
import { render, wait, waitForElement, fireEvent } from '@testing-library/react';

import Card from './';

jest.mock('../../services/service', () => {
  return {
    GetComics: jest.fn().mockImplementation(() => {
      return [{ id: 1 }, { id: 2 }];
    }),
  };
});
import Service from '../../services/service';

jest.mock('../comic', () => 'comic');
jest.mock('../shared/modal', () => 'modal');

jest.mock('./style', () => {
  return {
    Card: 'card',
    TextWrapper: 'textWrapper',
    Text: 'text',
    ComicsContainer: 'comicsContainer',
  };
});

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

  it('It should render without the modal', async () => {
    // Act
    const { container } = render(<Card character={character} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('It should render with the modal', async () => {
    // Act
    const { container, getByTestId } = render(<Card character={character} />);
    const card = await waitForElement(() => getByTestId('card'));
    fireEvent.click(card);
    await waitForElement(() => getByTestId('modal'));

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('When the card is clicked, it should call GetComics', async () => {
    // Act
    const { getByTestId } = render(<Card character={character} />);
    const card = await waitForElement(() => getByTestId('card'));

    // Assert
    expect(Service.GetComics).toBeCalledTimes(0);
    fireEvent.click(card);
    expect(Service.GetComics).toBeCalledTimes(1);
  });

  it('When the card is clicked, it should render the modal', async () => {
    // Act
    const { getByTestId } = render(<Card character={character} />);
    const card = await waitForElement(() => getByTestId('card'));
    fireEvent.click(card);
    const modal = await waitForElement(() => getByTestId('modal'));
    // Assert
    expect(modal).toBeTruthy();
  });
});

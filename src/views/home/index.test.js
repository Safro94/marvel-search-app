/* eslint-disable import/first */
import React from 'react';
import { render, wait, waitForElement } from '@testing-library/react';

import Home from './';

import { FavouritesContext } from '../../hooks/favourites';

jest.mock('../../services/service', () => {
  return {
    GetCharacters: jest.fn().mockImplementation(() => {
      return [{ id: 1 }, { id: 2 }];
    }),
    GetCharacterByExactName: jest.fn().mockImplementation(() => {
      return [{ id: 1 }, { id: 2 }];
    }),
  };
});
import Service from '../../services/service';

jest.mock('../../components/card', () => 'card');

jest.mock('./style', () => {
  return {
    Wrapper: 'wrapper',
    H1: 'h1',
  };
});

jest.mock('../../hooks/application', () => ({
  useApplication: jest.fn(() => ({
    characters: [],
    setApplication: jest.fn(),
  })),
}));

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useLocation: () => ({
//     search: '',
//   }),
// }));

import * as Application from '../../hooks/application';

import { Router } from 'react-router-dom';

describe('<Home /> ', () => {
  beforeEach(() => jest.clearAllMocks());

  const favourites = [{ id: 1 }];

  const TestComponent = ({ historyMock }) => (
    <FavouritesContext.Provider value={{ favourites }}>
      <Router history={historyMock}>
        <Home />
      </Router>
    </FavouritesContext.Provider>
  );

  it('It should render a text', async () => {
    //Arrange
    const characters = [];
    mockUseApplication(characters);
    const historyMock = { location: { search: '' }, listen: jest.fn() };

    // Act
    const { container } = render(<TestComponent historyMock={historyMock} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('It should render OK', async () => {
    //Arrange
    mockUseApplication();
    const historyMock = { location: { search: '' }, listen: jest.fn() };

    // Act
    const { container } = render(<TestComponent historyMock={historyMock} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('It should call GetCharacters', async () => {
    //Arrange
    mockUseApplication();
    const historyMock = { location: { search: '' }, listen: jest.fn() };

    // Act
    render(<TestComponent historyMock={historyMock} />);
    await wait();

    // Assert
    expect(Service.GetCharacters).toBeCalledTimes(1);
  });

  it('if character url param is null, it should not call GetCharacterByExactName', async () => {
    //Arrange
    mockUseApplication();
    const historyMock = { location: { search: 'test' }, listen: jest.fn() };

    // Act
    render(<TestComponent historyMock={historyMock} />);
    await wait();

    // Assert
    expect(Service.GetCharacterByExactName).toBeCalledTimes(0);
  });

  it('It should call GetCharacterByExactName', async () => {
    //Arrange
    mockUseApplication();
    const historyMock = { location: { search: 'test?character=character&comic=comic' }, listen: jest.fn() };
    jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => key);

    // Act
    render(<TestComponent historyMock={historyMock} />);
    await wait();

    // Assert
    expect(Service.GetCharacterByExactName).toBeCalledTimes(1);
    expect(Service.GetCharacterByExactName).toHaveBeenCalledWith('character', 'comic');
  });
});

const mockUseApplication = (characters = undefined) => {
  const useApplication = jest.spyOn(Application, 'useApplication');
  useApplication.mockImplementation(() => {
    return {
      characters,
      setApplication: jest.fn(),
    };
  });
};

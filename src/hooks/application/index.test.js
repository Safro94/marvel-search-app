import React from 'react';
import { wait } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useApplication, ApplicationProvider } from './index';

describe('Application Context', () => {
  it('It should return the application', async () => {
    // Arrange
    const application = { characters: [{ id: 1 }, { id: 2 }] };
    const characters = [{ id: 1 }, { id: 2 }];

    // Act
    const { result } = renderHook(() => useApplication(), {
      wrapper: ({ children }) => <ApplicationProvider application={application}>{children}</ApplicationProvider>,
    });
    await wait();

    // Assert
    expect(result.current.characters).toEqual(characters);
  });

  it('It should return the application with the characters when we call setApplication with type SET_CHARACTERS', async () => {
    // Arrange
    const application = {};
    const characters = [{ id: 1 }, { id: 2 }];

    // Act
    const { result } = renderHook(() => useApplication(), {
      wrapper: ({ children }) => <ApplicationProvider application={application}>{children}</ApplicationProvider>,
    });
    await wait();

    act(() => {
      result.current.setApplication({ type: 'SET_CHARACTERS', value: characters });
    });

    //Assert
    expect(result.current.characters).toEqual(characters);
  });

  it('It should return the application with the theme when we call setApplication with type SET_THEME', async () => {
    // Arrange
    const application = {};
    const theme = { light: {}, dark: {} };

    // Act
    const { result } = renderHook(() => useApplication(), {
      wrapper: ({ children }) => <ApplicationProvider application={application}>{children}</ApplicationProvider>,
    });
    await wait();

    act(() => {
      result.current.setApplication({ type: 'SET_THEME', value: theme });
    });

    //Assert
    expect(result.current.theme).toEqual(theme);
  });
});

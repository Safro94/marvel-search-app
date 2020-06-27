import { renderHook } from '@testing-library/react-hooks';

import useLocalStorage from './index';

const mockLocalStorage = () => {
  let storage = {};

  const getItem = (key) => storage[key];

  const setItem = (key, value) => (storage[key] = value);

  const clear = () => (storage = {});

  return { getItem, setItem, clear };
};

describe('useLocalStorage', () => {
  delete global.window.localStorage;
  global.window.localStorage = mockLocalStorage();

  beforeEach(() => (global.window.localStorage = mockLocalStorage()));

  it('hasLocalStorage should return a localStorage', () => {
    // Act
    const { result } = renderHook(() => useLocalStorage());

    // Assert
    expect(result.current.hasLocalStorage()).not.toBe(false);
  });

  it('getValueFromLocalStorage should return the parsed value', () => {
    //Arrange
    const array = [{ test: 'test' }];
    global.window.localStorage.setItem('test', JSON.stringify(array));

    // Act
    const { result } = renderHook(() => useLocalStorage());

    // Assert
    expect(result.current.getValueFromLocalStorage('test', [])).toEqual(array);
  });

  it('if the item is not found, getValueFromLocalStorage should return the default value', () => {
    // Act
    const { result } = renderHook(() => useLocalStorage());

    // Assert
    expect(result.current.getValueFromLocalStorage('test', [])).toEqual([]);
  });

  it('getValueFromLocalStorage should return the default value if there is no storage', () => {
    //Arrange
    delete global.window.localStorage;

    // Act
    const { result } = renderHook(() => useLocalStorage());

    // Assert
    expect(result.current.getValueFromLocalStorage('test', [])).toEqual([]);
  });

  it('saveValueInLocalStorage should return the default value if there is no storage', () => {
    //Arrange
    delete global.window.localStorage;

    // Act
    const { result } = renderHook(() => useLocalStorage());

    // Assert
    expect(result.current.saveValueInLocalStorage('test', [])).toEqual(undefined);
  });
});

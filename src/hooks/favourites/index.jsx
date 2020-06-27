import React, { createContext, useReducer, useEffect } from 'react';

import useLocalStorage from '../localStorage';

export const FavouritesContext = createContext();
const ADD_FAVOURITE = 'ADD_FAVOURITE';
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, { ...action.value, isFavourite: true }];
    case REMOVE_FAVOURITE:
      return [...state.filter((favourite) => favourite.id !== action.value.id)];
    default:
      return state;
  }
};

const FavouritesProvider = ({ children }) => {
  const { getValueFromLocalStorage, saveValueInLocalStorage } = useLocalStorage();
  const NAME_KEY_STORAGE = 'favourites';
  const [favourites, dispatch] = useReducer(reducer, [], () => getValueFromLocalStorage(NAME_KEY_STORAGE, []));

  useEffect(() => {
    saveValueInLocalStorage(NAME_KEY_STORAGE, favourites);
  }, [favourites, saveValueInLocalStorage]);

  return <FavouritesContext.Provider value={{ favourites, dispatch }}>{children}</FavouritesContext.Provider>;
};
export { FavouritesProvider, ADD_FAVOURITE, REMOVE_FAVOURITE };

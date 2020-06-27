import React, { createContext, useContext, useReducer } from 'react';

const SET_THEME = 'SET_THEME';
const SET_CHARACTERS = 'SET_CHARACTERS';
const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
const ApplicationContext = createContext();

const useApplication = () => {
  const [application, setApplication] = useContext(ApplicationContext);
  return { ...application, setApplication };
};

const ApplicationProvider = ({ application = { showFavourites: false }, children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_THEME:
        return { ...state, theme: action.value };
      case SET_CHARACTERS:
        return { ...state, characters: action.value };
      case SHOW_FAVOURITES:
        return { ...state, showFavourites: action.value };
      default:
        return state;
    }
  };
  return <ApplicationContext.Provider value={useReducer(reducer, application)}>{children}</ApplicationContext.Provider>;
};

export { useApplication, ApplicationProvider, SET_THEME, SET_CHARACTERS, SHOW_FAVOURITES };

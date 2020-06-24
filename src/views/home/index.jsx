import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import {
  useApplication,
  SET_FILTERED_CHARACTERS,
  SET_SEARCH_VALUE,
} from '../../hooks/application';

import Card from '../../components/card';

import { Wrapper } from './style';

export default () => {
  const { filteredCharacters, characters, setApplication } = useApplication();
  const location = useLocation();

  const getFilteredCharacters = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const character = params.get('character');

    if (character) {
      setApplication({
        type: SET_SEARCH_VALUE,
        value: character,
      });
    }
  }, [location.search, setApplication]);

  const getRandomCharacter = useCallback(() => {
    const randomCharacterIndex = Math.floor(
      Math.random() * (characters.length - 1)
    );
    const filteredCharacters = characters[randomCharacterIndex];

    setApplication({
      type: SET_FILTERED_CHARACTERS,
      value: [filteredCharacters],
    });
  }, [characters, setApplication]);

  useEffect(() => {
    if (characters && location) {
      location.search ? getFilteredCharacters() : getRandomCharacter();
    }
  }, [
    characters,
    getFilteredCharacters,
    getRandomCharacter,
    location,
    setApplication,
  ]);

  return (
    <Wrapper>
      {filteredCharacters &&
        filteredCharacters.map((character) => (
          <Card character={character} key={character.id} />
        ))}
    </Wrapper>
  );
};

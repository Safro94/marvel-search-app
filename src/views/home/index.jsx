/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { useApplication, SET_CHARACTERS } from '../../hooks/application';
import { FavouritesContext } from '../../hooks/favourites';

import Service from '../../services/service';

import Card from '../../components/card';

import { Wrapper, H1 } from './style';

export default () => {
  const { characters, setApplication } = useApplication();
  const { favourites } = useContext(FavouritesContext);
  const location = useLocation();

  const getUrlCharacter = useCallback(async () => {
    const params = new URLSearchParams(location.search);
    const character = params.get('character');
    const comic = params.get('comic');
    return character ? await Service.GetCharacterByExactName(character, comic) : [];
  }, [location.search]);

  const getRandomChar = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length)).toLowerCase();
  };

  const getRandomCharacter = useCallback(async () => {
    const letter = getRandomChar();
    const characters = await Service.GetCharacters(letter, favourites);
    return characters && characters.length > 0 ? [characters[0]] : [];
  }, [favourites]);

  useEffect(() => {
    const getCharacters = async () => {
      if (!characters) {
        const characters = location.search ? await getUrlCharacter() : await getRandomCharacter();
        setApplication({ type: SET_CHARACTERS, value: characters });
      }
    };
    getCharacters();
  }, [getRandomCharacter, getUrlCharacter, location, setApplication]);

  return (
    <Wrapper>
      {characters &&
        (characters.length > 0 ? (
          characters.map((character) => <Card character={character} key={character.id} />)
        ) : (
          <H1>No hay items</H1>
        ))}
    </Wrapper>
  );
};

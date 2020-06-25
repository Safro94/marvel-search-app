import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { useApplication, SET_CHARACTERS } from '../../hooks/application';

import Service from '../../services/service';

import Card from '../../components/card';

import { Wrapper, H1 } from './style';

export default () => {
  const { characters, setApplication } = useApplication();
  const location = useLocation();

  const getUrlCharacter = useCallback(async () => {
    const params = new URLSearchParams(location.search);
    const character = params.get('character');
    return character ? await Service.GetCharacterByExactName(character) : [];
  }, [location.search]);

  const getRandomChar = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return letters.charAt(Math.floor(Math.random() * letters.length)).toLowerCase();
  };

  const getRandomCharacter = useCallback(async () => {
    const letter = getRandomChar();
    const characters = await Service.GetCharacters(letter);
    return characters && characters.length > 0 ? [characters[0]] : [];
  }, []);

  useEffect(() => {
    const getCharacters = async () => {
      const characters = location.search ? await getUrlCharacter() : await getRandomCharacter();

      setApplication({
        type: SET_CHARACTERS,
        value: characters,
      });
    };
    getCharacters();
  }, [getRandomCharacter, getUrlCharacter, location, setApplication]);

  return (
    <Wrapper>
      {characters &&
        (characters.length > 0 ? (
          characters.map((character) => <Card character={character} key={character.id} />)
        ) : (
          <H1>No se han encontrado resultados</H1>
        ))}
    </Wrapper>
  );
};

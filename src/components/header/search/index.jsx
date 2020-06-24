import React from 'react';

import {
  useApplication,
  SET_FILTERED_CHARACTERS,
} from '../../../hooks/application';

import Service from '../../../services/service';

import { Input } from './style';

export default () => {
  const { setApplication } = useApplication();

  const filterCharacters = (e) => {
    const getData = async () => {
      const name = e.target.value.toLowerCase();
      const characters = await Service.GetCharacters(name);
      const newCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(name)
      );
      if (newCharacters) {
        setApplication({
          type: SET_FILTERED_CHARACTERS,
          value: newCharacters,
        });
      }
    };
    getData();
  };

  return <Input onChange={filterCharacters} />;
};

import React from 'react';

import { useApplication, SET_CHARACTERS } from '../../../hooks/application';

import Service from '../../../services/service';

import { Input } from './style';

export default () => {
  const { setApplication } = useApplication();

  const filterCharacters = (e) => {
    const getData = async () => {
      const name = e.target.value.toLowerCase();
      const characters = await Service.GetCharacters(name);
      if (characters) {
        setApplication({
          type: SET_CHARACTERS,
          value: characters,
        });
      }
    };
    getData();
  };

  return <Input onBlur={filterCharacters} placeholder="Buscar" />;
};

import React from 'react';
import { withRouter } from 'react-router-dom';

import { useApplication, SET_CHARACTERS } from '../../../hooks/application';

import Service from '../../../services/service';

import { Input } from './style';

export default withRouter(({ history }) => {
  const { setApplication } = useApplication();

  const seeComicDetail = (searchTerm) => {
    const terms = searchTerm.split('/');
    const id = terms && terms[5];
    history.push(`/comic/${id}`);
  };

  const searchCharacters = async (searchTerm) => {
    const characters = await Service.GetCharacters(searchTerm);
    if (characters) {
      setApplication({
        type: SET_CHARACTERS,
        value: characters,
      });
    }
  };

  const filterCharacters = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const regex = /https:\/\/www\.marvel\.com.*/;

    searchTerm.match(regex)
      ? seeComicDetail(searchTerm)
      : await searchCharacters(searchTerm);
  };

  return <Input onBlur={filterCharacters} placeholder="Buscar" />;
});

import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';

import { useApplication, SET_CHARACTERS, SHOW_FAVOURITES } from '../../../hooks/application';
import { FavouritesContext } from '../../../hooks/favourites';

import Service from '../../../services/service';

import { Input } from './style';

export default withRouter(({ history }) => {
  const { setApplication } = useApplication();
  const { favourites } = React.useContext(FavouritesContext);
  const inputRef = useRef(null);

  const seeComicDetail = (searchTerm) => {
    const terms = searchTerm.split('/');
    if (terms && terms.length === 7) history.push(`/comic/${terms[5]}`);
  };

  const searchCharacters = async (searchTerm) => {
    const characters = await Service.GetCharacters(searchTerm, favourites);
    if (characters) {
      setApplication({ type: SET_CHARACTERS, value: characters });
      setApplication({ type: SHOW_FAVOURITES, value: false });
    }
  };

  const filterCharacters = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const regex = /^https:\/\/www\.marvel\.com.*/;

    searchTerm.match(regex) ? seeComicDetail(searchTerm) : await searchCharacters(searchTerm);
    inputRef.current.value = '';
  };

  return <Input onBlur={filterCharacters} placeholder="Buscar" ref={inputRef} data-testid="input" />;
});

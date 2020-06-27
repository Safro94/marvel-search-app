import React, { useContext } from 'react';

import { useApplication, SET_CHARACTERS, SHOW_FAVOURITES } from '../../hooks/application';
import { FavouritesContext } from '../../hooks/favourites';

import Star from '../shared/star';

export default () => {
  const { setApplication, showFavourites } = useApplication();
  const { favourites } = useContext(FavouritesContext);

  const handleClick = () => {
    const characters = !showFavourites ? favourites : [];
    setApplication({ type: SET_CHARACTERS, value: characters });
    setApplication({ type: SHOW_FAVOURITES, value: !showFavourites });
  };

  return <Star handleClick={handleClick} showFullStar={showFavourites} data-testid="star" />;
};

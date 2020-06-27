import React from 'react';
import { withRouter } from 'react-router-dom';

import { useApplication, SHOW_FAVOURITES } from '../../hooks/application';

import Image from '../shared/image';
import Search from './search';
import Favourite from '../favourites';
import Theme from '../theme';

import { Header, ImageContainer, Separator, FavouriteContainer } from './style';

export default withRouter(({ history }) => {
  const { setApplication } = useApplication();

  const goHome = () => {
    setApplication({ type: SHOW_FAVOURITES, value: false });
    history.push('/');
  };

  return (
    <Header>
      <ImageContainer>
        <Image src="/marvel.jpg" width="60px" height="30px" cursor="pointer" onClick={goHome} data-testid="image" />
        <Separator />
      </ImageContainer>
      <Search />
      <FavouriteContainer>
        <Favourite />
        <Theme />
      </FavouriteContainer>
    </Header>
  );
});

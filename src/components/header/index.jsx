import React from 'react';
import { withRouter } from 'react-router-dom';

import Image from '../shared/image';
import Search from './search';

import { Header, ImageContainer, Separator } from './style';

export default withRouter(({ history }) => {
  const goHome = () => history.push('/');

  return (
    <Header>
      <ImageContainer>
        <Image src="/marvel.jpg" width="60px" height="30px" cursor="pointer" onClick={goHome} />
        <Separator />
      </ImageContainer>
      <Search />
    </Header>
  );
});

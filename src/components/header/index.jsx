import React from 'react';

import { Header, ImageContainer, Separator } from './style';
import Image from '../shared/image';
import Search from './search';

export default () => {
  return (
    <Header>
      <ImageContainer>
        <Image src="/marvel.jpg" width="60px" height="30px" />
        <Separator />
      </ImageContainer>
      <Search />
    </Header>
  );
};

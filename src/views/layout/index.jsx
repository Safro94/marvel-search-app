import React from 'react';

import Routes from '../../routes';

import Header from '../../components/header';
import Container from '../../components/shared/container';

import { Wrapper } from './style';

export default () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Routes />
      </Wrapper>
    </Container>
  );
};

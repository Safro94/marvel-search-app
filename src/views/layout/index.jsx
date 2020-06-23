import React from 'react';

import Header from '../../components/header';
import Container from '../../components/shared/container';

export default ({ children }) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
    </Container>
  );
};

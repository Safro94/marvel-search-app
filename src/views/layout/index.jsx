import React from 'react';

import Header from '../../components/header';

export default ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

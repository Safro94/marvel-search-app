import React, { useState } from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Routes from '../../routes';
import GlobalStyle from './globalStyle';

export default () => {
  const [theme, setTheme] = useState({ mode: 'light' });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

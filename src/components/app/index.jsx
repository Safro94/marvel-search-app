import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from '../../routes';
import styles from './theme';

export default () => {
  const [theme, setTheme] = useState(styles.light);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

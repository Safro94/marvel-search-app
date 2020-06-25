import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from '../../routes';
import styles from '../../helpers/theme';

export default () => {
  return (
    <ThemeProvider theme={styles.light}>
      <Routes />
    </ThemeProvider>
  );
};

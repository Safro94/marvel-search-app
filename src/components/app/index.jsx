import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import Layout from '../../views/layout';
import styles from '../../helpers/theme';

export default () => {
  return (
    <ThemeProvider theme={styles.light}>
      <Layout />
    </ThemeProvider>
  );
};

import React from 'react';

import { ThemeProvider } from 'styled-components';

import { useApplication } from '../../hooks/application';

import Layout from '../../views/layout';
import styles from '../../helpers/theme';

export default () => {
  const { theme } = useApplication();

  return (
    <ThemeProvider theme={theme || styles.light}>
      <Layout />
    </ThemeProvider>
  );
};

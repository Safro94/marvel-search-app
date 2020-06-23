import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import { useApplication, SET_CHARACTERS } from '../../hooks/application';

import Service from '../../services/service';

import Routes from '../../routes';
import styles from '../../helpers/theme';

export default () => {
  const [theme, setTheme] = useState(styles.light);
  const { setApplication } = useApplication();

  useEffect(() => {
    const getData = async () => {
      const characters = await Service.GetCharacters();
      setApplication({ type: SET_CHARACTERS, value: characters });
    };
    getData();
  }, [setApplication]);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

import React from 'react';

import { useApplication, SET_THEME } from '../../hooks/application';

import { Select } from './style';

import themeHelper from '../../helpers/theme';

export default () => {
  const { setApplication, theme } = useApplication();
  const themes = Object.keys(themeHelper).map((key) => key);

  return (
    <Select
      value={themeHelper[theme]}
      onChange={(e) => setApplication({ type: SET_THEME, value: themeHelper[e.target.value] })}
    >
      {themes.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </Select>
  );
};

import React from 'react';

import { useApplication } from '../../hooks/application';

import Card from '../../components/card';

import { Wrapper } from './style';

export default () => {
  const { characters } = useApplication();

  return (
    <Wrapper>
      {characters &&
        characters.map((character) => (
          <Card character={character} key={character.id} />
        ))}
    </Wrapper>
  );
};

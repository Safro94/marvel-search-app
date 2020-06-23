import React from 'react';

import { Card, TextWrapper, Text } from './style';

export default ({ character }) => {
  return (
    <Card
      url={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
    >
      <TextWrapper>
        <Text>{character.name}</Text>
      </TextWrapper>
    </Card>
  );
};

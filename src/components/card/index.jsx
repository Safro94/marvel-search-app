import React from 'react';

import { Card, TextWrapper, Text } from './style';

export default ({ url }) => {
  return (
    <Card url={url}>
      <TextWrapper>
        <Text></Text>
      </TextWrapper>
    </Card>
  );
};

import React from 'react';

import { Comic, Information, Title, Text, Image } from './style';

export default ({ comic }) => {
  return (
    <Comic>
      <Image url={`${comic.thumbnail.path}/standard_medium.${comic.thumbnail.extension}`} />
      <Information>
        <Title>{comic.title}</Title>
        {comic.description && (
          <Text
            dangerouslySetInnerHTML={{
              __html: `${comic.description.substr(0, 200)}...`,
            }}
          />
        )}
      </Information>
    </Comic>
  );
};

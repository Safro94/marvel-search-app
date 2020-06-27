import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Service from '../../services/service';

import Image from '../../components/shared/image';

import { Wrapper, ImageContainer, H1, InformationContainer, H4, Paragraph, CreatorsInformation } from './style';

const ComicDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [comic, setComic] = useState();

  useEffect(() => {
    if (id) {
      const getComic = async () => {
        const comic = await Service.GetComicById(id);
        setComic(comic);
      };
      getComic();
    }
  }, [id]);

  const toUpperCaseFirstChar = (text) => text.substr(0, 1).toUpperCase() + text.substr(1);

  return (
    <>
      {comic ? (
        <Wrapper>
          <ImageContainer>
            <Image src={`${comic.images[0].path}/portrait_uncanny.${comic.images[0].extension}`} />
          </ImageContainer>
          <InformationContainer>
            <H1>{comic.title}</H1>
            <CreatorsInformation>
              {comic.creators.items.map((item) => (
                <H4 key={item.name}>{`${toUpperCaseFirstChar(item.role)}: ${item.name}`}</H4>
              ))}
            </CreatorsInformation>
            <Paragraph>{comic.description}</Paragraph>
          </InformationContainer>
        </Wrapper>
      ) : null}
    </>
  );
};

export default withRouter(ComicDetail);

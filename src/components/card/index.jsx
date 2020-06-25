import React, { useState } from 'react';

import Service from '../../services/service';

import Modal from '../shared/modal';
import Comic from '../comic';

import { Card, TextWrapper, Text, ComicsContainer } from './style';

export default ({ character }) => {
  const [showModal, setshowModal] = useState(false);
  const [comics, setComics] = useState([]);

  const getComics = async () => {
    const comics = await Service.GetComics(character.id);
    setComics(comics);
    setshowModal(true);
  };

  const handleModalClose = () => setshowModal(false);

  return (
    <>
      <Card
        onClick={getComics}
        url={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
      >
        <TextWrapper>
          <Text>{character.name}</Text>
        </TextWrapper>
      </Card>
      {showModal && comics && (
        <Modal title={character.name} onClose={handleModalClose}>
          <ComicsContainer>
            {comics.map((comic) => (
              <Comic comic={comic} />
            ))}
          </ComicsContainer>
        </Modal>
      )}
    </>
  );
};

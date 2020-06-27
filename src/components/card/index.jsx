import React, { useState, useContext } from 'react';

import Service from '../../services/service';

import { FavouritesContext, REMOVE_FAVOURITE, ADD_FAVOURITE } from '../../hooks/favourites';
import { useApplication, SET_CHARACTERS } from '../../hooks/application';

import Modal from '../shared/modal';
import Comic from '../comic';
import Star from '../shared/star';

import { Card, TextWrapper, Text, ComicsContainer, StarContainer, Wrapper } from './style';

export default ({ character }) => {
  const { characters, setApplication } = useApplication();
  const { dispatch } = useContext(FavouritesContext);
  const [showModal, setshowModal] = useState(false);
  const [comics, setComics] = useState([]);

  const getComics = async () => {
    const comics = await Service.GetComics(character.id);
    const filteredComics = comics.filter((comic) => comic.title.includes(character.comicTitle));
    setComics(filteredComics.length > 0 ? filteredComics : comics);
    setshowModal(true);
  };

  const handleModalClose = () => setshowModal(false);

  const handleStarClick = () => {
    const type = character.isFavourite ? REMOVE_FAVOURITE : ADD_FAVOURITE;
    const characterIndex = characters.findIndex((item) => item.id === character.id);
    const newCharacters = characters.filter((item) => item.id !== character.id);
    newCharacters.splice(characterIndex, 0, { ...character, isFavourite: !character.isFavourite });

    dispatch({ type: type, value: character });
    setApplication({
      type: SET_CHARACTERS,
      value: newCharacters,
    });
  };

  return (
    <Wrapper>
      <StarContainer>
        <Star handleClick={handleStarClick} showFullStar={character.isFavourite} data-testid="star" />
      </StarContainer>
      <Card
        data-testid="card"
        onClick={getComics}
        url={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
      >
        <TextWrapper>
          <Text>{character.name}</Text>
        </TextWrapper>
      </Card>
      {showModal && comics && (
        <Modal title={character.name} onClose={handleModalClose} data-testid="modal">
          <ComicsContainer>
            {comics.map((comic) => (
              <Comic comic={comic} key={comic.id} />
            ))}
          </ComicsContainer>
        </Modal>
      )}
    </Wrapper>
  );
};

const MapCharacters = (characters, favourites) => {
  if (favourites && favourites.length > 0) {
    const favouritesIds = favourites.map((favourite) => favourite.id);

    return characters.map((character) =>
      favouritesIds.includes(character.id) ? { ...character, isFavourite: true } : character
    );
  }

  return characters;
};

const RemoveFavouriteInCharacter = (characters, characterId) => {
  return characters.map((character) =>
    character.id === characterId ? { ...character, isFavourite: false } : character
  );
};

const MapCharacter = (characters, comic) => {
  return characters.map((character) => ({ ...character, comicTitle: comic }));
};

export { MapCharacters, RemoveFavouriteInCharacter, MapCharacter };

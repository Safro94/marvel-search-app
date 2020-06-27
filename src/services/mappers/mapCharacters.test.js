import { MapCharacters, RemoveFavouriteInCharacter, MapCharacter } from './mapCharacters';

describe('MapCharacters', () => {
  it('MapCharacters should return characters', () => {
    //Arrange
    const characters = [{ id: 1 }, { id: 2 }];

    //Act
    const result = MapCharacters(characters);

    //Assert
    expect(result).toEqual(characters);
  });

  it('MapCharacters should return characters if favorites does not include character', () => {
    //Arrange
    const characters = [{ id: 1 }, { id: 2 }];
    const favourites = [{ id: 3 }];

    //Act
    const result = MapCharacters(characters, favourites);

    //Assert
    expect(result).toEqual(characters);
  });

  it('MapCharacters should return character isFavourite when favourite includes character', () => {
    //Arrange
    const characters = [{ id: 1 }, { id: 2 }];
    const favourites = [{ id: 1 }];
    const mappedCharacters = [{ id: 1, isFavourite: true }, { id: 2 }];

    //Act
    const result = MapCharacters(characters, favourites);

    //Assert
    expect(result).toEqual(mappedCharacters);
  });

  it('RemoveFavouriteInCharacter should return a character with isFavourite false if characters includes character', () => {
    //Arrange
    const characters = [{ id: 1, isFavourite: false }, { id: 2 }];

    //Act
    const result = RemoveFavouriteInCharacter(characters, characters[0].id);

    //Assert
    expect(result).toEqual(characters);
  });

  it('RemoveFavouriteInCharacter should return the same characters if characters does not include character', () => {
    //Arrange
    const characters = [{ id: 1 }, { id: 2 }];

    //Act
    const result = RemoveFavouriteInCharacter(characters, 3);

    //Assert
    expect(result).toEqual(characters);
  });

  it('MapCharacter should return the character with a comic', () => {
    //Arrange
    const characters = [{ id: 1 }];
    const comic = 'comic';
    const mappedCharacters = [{ id: 1, comicTitle: comic }];

    //Act
    const result = MapCharacter(characters, comic);

    //Assert
    expect(result).toEqual(mappedCharacters);
  });
});

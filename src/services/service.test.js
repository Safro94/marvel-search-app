/* eslint-disable import/first */
import Service from './service';

jest.mock('./mappers/mapCharacters', () => {
  return {
    MapCharacters: jest.fn().mockImplementation(() => {
      return [{ id: 1 }];
    }),
    MapCharacter: jest.fn().mockImplementation(() => {
      return [{ id: 1 }];
    }),
  };
});
import { MapCharacters, MapCharacter } from './mappers/mapCharacters';

jest.mock('../helpers/axios');
import axios from '../helpers/axios';

describe('Service', () => {
  beforeEach(() => jest.clearAllMocks());
  const expectedResult = [{ id: 1 }];
  const name = 'name';
  const favourites = [];
  const comic = 'comic';
  const characterId = 1;
  const comicId = 1;

  const get = {
    get: jest
      .fn()
      .mockImplementationOnce(() => ({}))
      .mockImplementationOnce(() => ({ status: 200, data: { data: { results: [] } } }))
      .mockImplementationOnce(() => ({ status: 200, data: { data: { results: [] } } }))
      .mockImplementationOnce(() => ({}))
      .mockImplementationOnce(() => ({ status: 200, data: { data: { results: [] } } }))
      .mockImplementationOnce(() => ({ status: 200, data: { data: { results: [] } } }))
      .mockImplementationOnce(() => ({}))
      .mockImplementationOnce(() => ({ status: 200, data: { data: { results: [{ id: 1 }] } } }))
      .mockImplementationOnce(() => ({ status: 200, data: { data: { results: [{ id: 1 }] } } }))
      .mockImplementationOnce(() => ({}))
      .mockImplementationOnce(() => ({ status: 200, data: { data: { results: [{ id: 1 }] } } }))
      .mockImplementationOnce(() => ({ status: 200, data: { data: { results: [{ id: 1 }] } } })),
  };
  axios.mockImplementation(() => get);

  it('GetCharacters should return an empty array if res is not defined', async () => {
    //Arrange
    const characters = [];

    //Act
    const result = await Service.GetCharacters(name, favourites);

    //Assert
    expect(result).toEqual(characters);
  });

  it('GetCharacters should return an array with one item and should call MapCharacters', async () => {
    //Act
    const result = await Service.GetCharacters(name, favourites);

    //Assert
    expect(result).toEqual(expectedResult);
    expect(MapCharacters).toBeCalledTimes(1);
  });

  it('GetCharacters should call axios', async () => {
    //Arrange
    const url =
      'https://gateway.marvel.com:443/v1/public/characters?ts=thesoer&apikey=75d603f88af04f5aebcb8bd8c7e5df52&hash=d2673cf787925430170e36de9cd605ff&nameStartsWith=name';

    //Act
    await Service.GetCharacters(name, favourites);

    //Assert
    expect(axios().get).toBeCalledTimes(1);
    expect(axios().get.mock.calls[0][0]).toBe(url);
  });

  it('GetCharacterByExactName should return an empty array if res is not defined', async () => {
    //Arrange
    const characters = [];

    //Act
    const result = await Service.GetCharacterByExactName(name, comic);

    //Assert
    expect(result).toEqual(characters);
  });

  it('GetCharacterByExactName should return an array with one item and should call MapCharacter', async () => {
    //Act
    const result = await Service.GetCharacterByExactName(name, comic);

    //Assert
    expect(result).toEqual(expectedResult);
    expect(MapCharacter).toBeCalledTimes(1);
  });

  it('GetCharacterByExactName should call axios', async () => {
    //Arrange
    const url =
      'https://gateway.marvel.com:443/v1/public/characters?ts=thesoer&apikey=75d603f88af04f5aebcb8bd8c7e5df52&hash=d2673cf787925430170e36de9cd605ff&name=name';

    //Act
    await Service.GetCharacterByExactName(name, comic);

    //Assert
    expect(axios().get).toBeCalledTimes(1);
    expect(axios().get.mock.calls[0][0]).toBe(url);
  });

  it('GetComics should return an empty array if res is not defined', async () => {
    //Arrange
    const comics = [];

    //Act
    const result = await Service.GetComics(characterId);

    //Assert
    expect(result).toEqual(comics);
  });

  it('GetComics should return an array with one item', async () => {
    //Act
    const result = await Service.GetComics(characterId);

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('GetComics should call axios', async () => {
    //Arrange
    const url =
      'https://gateway.marvel.com:443/v1/public/characters/1/comics?ts=thesoer&apikey=75d603f88af04f5aebcb8bd8c7e5df52&hash=d2673cf787925430170e36de9cd605ff&orderBy=-onsaleDate';

    //Act
    await Service.GetComics(characterId);

    //Assert
    expect(axios().get).toBeCalledTimes(1);
    expect(axios().get.mock.calls[0][0]).toBe(url);
  });

  it('GetComicById should return an empty array if res is not defined', async () => {
    //Arrange
    const comic = {};

    //Act
    const result = await Service.GetComicById(comicId);

    //Assert
    expect(result).toEqual(comic);
  });

  it('GetComicById should return a comic', async () => {
    //Arrange
    const comic = { id: 1 };

    //Act
    const result = await Service.GetComicById(comicId);

    //Assert
    expect(result).toEqual(comic);
  });

  it('GetComicById should call axios', async () => {
    //Arrange
    const url =
      'https://gateway.marvel.com:443/v1/public/comics/1?ts=thesoer&apikey=75d603f88af04f5aebcb8bd8c7e5df52&hash=d2673cf787925430170e36de9cd605ff';

    //Act
    await Service.GetComicById(comicId);

    //Assert
    expect(axios().get).toBeCalledTimes(1);
    expect(axios().get.mock.calls[0][0]).toBe(url);
  });
});

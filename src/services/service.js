import axios from '../helpers/axios';

import { MapCharacters, MapCharacter } from './mappers/mapCharacters';

export default class Service {
  static GetCharacters = async (name, favourites) => {
    const res = await axios().get(
      `${process.env.REACT_APP_MARVEL_URL}/characters?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}&nameStartsWith=${name}`
    );

    return res && res.status === 200 ? MapCharacters(res.data.data.results, favourites) : [];
  };

  static GetCharacterByExactName = async (name, comic) => {
    const res = await axios().get(
      `${process.env.REACT_APP_MARVEL_URL}/characters?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}&name=${name}`
    );

    return res && res.status === 200 ? MapCharacter(res.data.data.results, comic) : [];
  };

  static GetComics = async (characterId) => {
    const res = await axios().get(
      `${process.env.REACT_APP_MARVEL_URL}/characters/${characterId}/comics?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}&orderBy=-onsaleDate`
    );

    return res && res.status === 200 ? res.data.data.results : [];
  };

  static GetComicById = async (id) => {
    const res = await axios().get(
      `${process.env.REACT_APP_MARVEL_URL}/comics/${id}?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}`
    );

    return res && res.status === 200 && res.data.data.results.length > 0 ? res.data.data.results[0] : {};
  };
}

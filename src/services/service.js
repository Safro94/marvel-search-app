import axios from '../helpers/axios';

export default class Service {
  static GetCharacters = async () => {
    const res = await axios().get(
      `${process.env.REACT_APP_MARVEL_URL}?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}`
    );

    return res && res.status === 200 ? res.data.data.results : [];
  };
}

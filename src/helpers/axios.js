import axios from 'axios';
import https from 'https';

export default () => {
  const opts = {
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  };

  const interceptorError = (error) => Promise.reject(error.response);

  const instanse = axios.create(opts);

  instanse.interceptors.response.use((response) => response, interceptorError);

  return instanse;
};

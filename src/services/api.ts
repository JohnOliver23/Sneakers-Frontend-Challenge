/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { environment } from '../environment/environment';

export const api = axios.create({
  baseURL: environment.REACT_APP_API_URL,
});

export const getSneakers = async () => {
  const result = await api
    .get('/sneakers/index.json')
    .then(res => res)
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
  return result;
};

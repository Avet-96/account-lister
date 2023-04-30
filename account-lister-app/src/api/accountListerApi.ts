import axios from 'axios';
import { getBaseURL } from '../appConfig';

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  timeout: 6000,
});
api.interceptors.response.use(
  function (response) {
    return response;
  }
)
export default api;

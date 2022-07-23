import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import endPoint from './endpoint';

// const BASE_URL = {
//   dev: 'http://18.185.21.24:8060',
//   qa: '',
//   prod: '',
// };

export const getBaseUrl = () => 'http://18.185.21.24:8060';

const api = axios.create({
  baseURL: 'http://18.185.21.24:8060',
  headers: {},
});

const removeLocalStorageKeys = async () => {
  await AsyncStorage.removeItem('ACCESS_TOKEN');
  await AsyncStorage.removeItem('REFRESH_TOKEN');
};

const getRefreshTokenCall = async originalRequest => {
  const refreshToken = await AsyncStorage.getItem('REFRESH_TOKEN');
  const token = await AsyncStorage.getItem('ACCESS_TOKEN');
  let payload = {};
  payload.refreshToken = refreshToken;
  //change getHostName only
  let refreshTokenURL = `${getHostName()}${endPoint.getRefreshToken()}`;

  if (token) {
    return axios
      .post(refreshTokenURL, payload)
      .then(
        async response => {
          if (response) {
            const {data} = response;
            const {accessToken, refreshToken} = data;
            await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);
            await AsyncStorage.setItem('REFRESH_TOKEN', refreshToken);
          }
          return api(originalRequest);
        }, // retry the request that errored out
      )
      .catch(err => {
        // if (
        //   window.location.pathname !== '' &&
        //   window.location.pathname !== '/'
        // ) {
        //   // toast.error('Authentication fail!');
        //   window.location.pathname = '/';
        //   // removeLocalStorageKeys();
        // }
        removeLocalStorageKeys();
      });
  } else {
    // if (window.location.pathname !== '/') {
    //   window.location.pathname = '/';
    //   // removeLocalStorageKeys();
    // }
    removeLocalStorageKeys();
  }
};

api.interceptors.response.use(
  response => {
    console.log('axios response ==========', response);
    return response;
  },
  async error => {
    console.log('axios response error==========', error);
    // const originalRequest = error.config;
    // if (error.response.status === 401) {
    //   // getRefreshTokenCall(originalRequest);
    //   return Promise.resolve(getRefreshTokenCall(originalRequest));
    // } else if (error.response.status === 404 && !originalRequest._retry) {
    //   // window.location.pathname = '/not-found';
    // }
    return Promise.reject(error);
  },
);
api.interceptors.request.use(
  async req => {
    const token = (await AsyncStorage.getItem('ACCESS_TOKEN')) || '';
    req.headers.Authorization = `Bearer ${token}`;
    console.log('axios req==========', req);
    return req;
  },
  error => {
    console.log('axios req error==========', error);
    return error;
  },
);

export default api;

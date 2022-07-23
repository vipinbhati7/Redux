import axios from 'axios';
import endpoint from '../endpoint';
import AsyncStorage from '@react-native-community/async-storage';

export const loginService = async payload => {
  try {
    const response = await axios.post(endpoint.login(), payload);
    console.log(response, 'login service');
    await AsyncStorage.setItem('REFRESH_TOKEN', response.data.refreshToken);
    await AsyncStorage.setItem('ACCESS_TOKEN', response.data.accessToken);
    console.log(response, 'login servicee');
    return response;
    // await AsyncStorage.setItem(SAVED_CREDS_KEYS.PASSWORD, values.password);
  } catch (e) {
    console.log(e, 'error login service');
    return e;
  }
};

export const registrationService = async payload => {
  try {
    const response = await axios.post(endpoint.register(), payload);
    return response;
    // await AsyncStorage.setItem(SAVED_CREDS_KEYS.PASSWORD, values.password);
  } catch (e) {
    console.log(e, 'error registration service');
    return e;
  }
};
export const generateOtpService = async payload => {
  try {
    const response = await axios.post(endpoint.generateOTP(), payload);
    return response;
    // await AsyncStorage.setItem(SAVED_CREDS_KEYS.PASSWORD, values.password);
  } catch (e) {
    console.log(e, 'error generate otp service');
    return e;
  }
};
export const validateOtpService = async payload => {
  try {
    const response = await axios.post(endpoint.validateOTP(), payload);
    return response;
    // await AsyncStorage.setItem(SAVED_CREDS_KEYS.PASSWORD, values.password);
  } catch (e) {
    console.log(e, 'error generate otp service');
    return e;
  }
};

// export const doLogout = () => {
//   return axios
//     .post(endpoint.logout())
//     .then(response => {
//       return successHandler(response).then(res => {
//         return res;
//       });
//     })
//     .catch(error => {
//       return errorHandler(error);
//     });
// };

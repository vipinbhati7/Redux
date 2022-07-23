import {
  loginService,
  validateOtpService,
  registrationService,
  generateOtpService,
} from '../../services/data/auth.service';

export const actionTypes = {
  LOG_IN: `LOG_IN`,
  LOG_IN_ERROR: `LOG_IN_ERROR`,
  LOG_IN_SUCCESS: `LOG_IN_SUCCESS`,
  REGISTRATION: `REGISTRATION`,
  REGISTRATION_ERROR: `REGISTRATION_ERROR`,
  REGISTRATION_SUCCESS: `REGISTRATION_SUCCESS`,
  GENERATE_OTP: `GENERATE_OTP`,
  GENERATE_OTP_ERROR: `GENERATE_OTP_ERROR`,
  GENERATE_OTP_SUCCESS: `GENERATE_OTP_SUCCESS`,
  VALIDATE_OTP: `VALIDATE_OTP`,
  VALIDATE_OTP_ERROR: `VALIDATE_OTP_ERROR`,
  VALIDATE_OTP_SUCCESS: `VALIDATE_OTP_SUCCESS`,
};

export const login = payload => async dispatch => {
  dispatch({type: actionTypes.LOG_IN});
  try {
    const response = await loginService(payload);
    if (response.status === 200 && response.data !== 'Failed') {
      dispatch({
        type: actionTypes.LOG_IN_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.LOG_IN_ERROR,
        payload: response.data,
      });
    }
    console.log(response, 'action, response');
  } catch (e) {
    dispatch({
      type: actionTypes.LOG_IN_ERROR,
      payload: e,
    });
    console.log(e, 'login error');
  }
};

export const register = payload => async dispatch => {
  dispatch({type: actionTypes.REGISTRATION});
  try {
    const response = await registrationService(payload);
    console.log(response, 'action, response');
    dispatch({
      type: actionTypes.REGISTRATION_SUCCESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.REGISTRATION_ERROR,
      payload: error,
    });
    console.log(e, 'login error');
  }
};
export const registerOtp = payload => async dispatch => {
  dispatch({type: actionTypes.GENERATE_OTP});
  try {
    const response = await generateOtpService(payload);
    console.log(response, 'action, response');
    dispatch({
      type: actionTypes.GENERATE_OTP_SUCCESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.GENERATE_OTP_ERROR,
      payload: error,
    });
    console.log(e, 'login error');
  }
};
export const validateOtp = payload => async dispatch => {
  dispatch({type: actionTypes.VALIDATE_OTP});
  try {
    const response = await validateOtpService(payload);
    console.log(response, 'action, response');
    dispatch({
      type: actionTypes.VALIDATE_OTP_SUCCESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.VALIDATE_OTP_ERROR,
      payload: error,
    });
    console.log(e, 'login error');
  }
};

// export const logout = () => dispatch => {
//   doLogout()
//     .then(response => {
//       if (response && response.status) {
//         dispatch({
//           type: actionTypes.LOGOUT_SUCCESS,
//         });
//       }
//     })
//     .catch(err => {
//       console.log('logout', err);
//     });
// };

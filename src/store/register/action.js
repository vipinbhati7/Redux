import {
  generateOtpService,
  registrationService,
  validateOtpService,
} from '../../services/data/auth.service';
import store from '../store';
import {login} from '../../store/auth/action';

export const actionTypes = {
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

export const register = payload => async dispatch => {
  dispatch({type: actionTypes.REGISTRATION});
  console.log('registrationPayload-->', payload);
  try {
    const response = await registrationService(payload);
    console.log(response, 'action, response');
    if (response.status === 200 && response.data !== 'Failed') {
      dispatch({
        type: actionTypes.REGISTRATION_SUCCESS,
        payload: {response, payload},
      });
      store.dispatch(
        login({password: payload.password, userName: payload.email}),
      );
    } else {
      console.log('registreErrorRespones--->', response);
      dispatch({
        type: actionTypes.REGISTRATION_ERROR,
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.REGISTRATION_ERROR,
      payload: e,
    });
    console.log(e, 'login error');
  }
};
export const registerOtp = payload => async dispatch => {
  dispatch({type: actionTypes.GENERATE_OTP});
  try {
    const response = await generateOtpService({
      email: payload.email,
      mobile: payload.mobile,
      emailOtp: 0,
      mobileOtp: 0,
    });
    console.log('paload', payload);
    if (response.status === 200 && response.data !== 'Failed') {
      dispatch({
        type: actionTypes.GENERATE_OTP_SUCCESS,
        payload: {response, payload},
      });
    } else {
      dispatch({
        type: actionTypes.GENERATE_OTP_ERROR,
        payload: response.data,
      });
    }
    console.log(response, 'action, response');
  } catch (e) {
    dispatch({
      type: actionTypes.GENERATE_OTP_ERROR,
      payload: e,
    });
    console.log(e, 'login error');
  }
};

export const validateOtp = payload => async dispatch => {
  dispatch({type: actionTypes.VALIDATE_OTP});
  try {
    const response = await validateOtpService({
      email: payload.email,
      mobile: payload.mobile,
      emailOtp: payload.emailOtp,
      mobileOtp: payload.mobileOtp,
    });
    console.log('paload', payload);
    if (response.status === 200 && response.data !== 'Failed') {
      if (
        response.data.emailValidation === 1 &&
        response.data.mobileValidation === 1
      ) {
        dispatch({
          type: actionTypes.VALIDATE_OTP_SUCCESS,

          payload: {response, payload},
        });
        store.dispatch(
          register({
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
            password: payload.password,
            userName: payload.userName,
            zipCode: '',
            gender: '',
          }),
        );
      } else {
        dispatch({
          type: actionTypes.VALIDATE_OTP_ERROR,
          payload: response.data,
        });
      }
    } else {
      dispatch({
        type: actionTypes.VALIDATE_OTP_ERROR,
        payload: response.data,
      });
    }
    console.log(response, 'action, response');
  } catch (e) {
    dispatch({
      type: actionTypes.VALIDATE_OTP_ERROR,
      payload: e,
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

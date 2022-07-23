import {actionTypes} from './action';
// import {Actions} from 'react-native-router-flux';

const initialState = {
  isFetching: false,
  access_token: '',
  refresh_token: '',
  error: '',
  isAuthenticated: false,
  userDetails: '',
  otpGenerated: false,
};

const AuthReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case actionTypes.LOG_IN:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case actionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        access_token: action.payload.accessToken,
        refresh_token: action.payload.refreshToken,
        isAuthenticated: true,
        userDetails: {
          address: action.payload.address || '',
          email: action.payload.email,
          firstName: action.payload.firstName || '',
          gender: action.payload.gender || '',
          lastName: action.payload.lastName || '',
          phone: action.payload.phone,
          pincode: action.payload.pincode || '',
          userName: action.payload.userName || '',
        },
      };
    case actionTypes.LOG_IN_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        isAuthenticated: false,
      };
    // case actionTypes.GENERATE_OTP:
    //   return {...state, isFetching: true, otpGenerated: false};
    // case actionTypes.GENERATE_OTP_SUCCESS:
    //   const {
    //     response,
    //     payload: {email, mobile, password, name},
    //   } = action.payload;
    //   Actions.verifyOtp({email, mobile, password, name});
    //   return {...state, isFetching: false, otpGenerated: true};
    // case actionTypes.GENERATE_OTP_ERROR:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: action.payload,
    //     otpGenerated: false,
    //   };
    // case actionTypes.VALIDATE_OTP:
    //   return {...state, isFetching: true, otpGenerated: false};
    // case actionTypes.VALIDATE_OTP_SUCCESS:
    //   const {payload} = action.payload;
    //   return {...state, isFetching: false, otpGenerated: true};
    // case actionTypes.VALIDATE_OTP_ERROR:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: action.payload,
    //     otpGenerated: false,
    //   };

    default:
      return state;
  }
};

export default AuthReducer;

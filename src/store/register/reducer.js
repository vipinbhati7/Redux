// import {Actions} from 'react-native-router-flux';
import {actionTypes} from './action';
import {CommonActions} from '@react-navigation/native';
const initialState = {
  isFetching: false,
  error: '',
  otpGenerated: false,
};

const RegisterReducer = (state = initialState, action) => {
  // const navigation = useNavigation();
  const {type} = action;
  console.log('ActionRegister-', action);
  switch (type) {
    case actionTypes.GENERATE_OTP:
      return {
        ...state,
        isFetching: true,
        otpGenerated: false,
      };
    case actionTypes.GENERATE_OTP_SUCCESS:
      const {
        response,
        payload: {email, mobile, password, userName, firstName, lastName},
      } = action.payload;
      // CommonActions.navigate('VerifyOtp', {
      //   email,
      //   mobile,
      //   password,
      //   userName,
      //   firstName,
      //   lastName,
      // });
      // navigation.navigate('VerifyOtp', {
      //   email,
      //   mobile,
      //   password,
      //   userName,
      //   firstName,
      //   lastName,
      // });
      return {
        ...state,
        isFetching: false,
        otpGenerated: true,
      };
    case actionTypes.GENERATE_OTP_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        otpGenerated: false,
      };

    case actionTypes.VALIDATE_OTP:
      return {
        ...state,
        isFetching: true,
        otpGenerated: false,
      };
    case actionTypes.VALIDATE_OTP_SUCCESS:
      const {payload} = action.payload;

      return {
        ...state,
        isFetching: false,
        otpGenerated: true,
      };
    case actionTypes.VALIDATE_OTP_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        otpGenerated: false,
      };

    default:
      return state;
  }
};

export default RegisterReducer;

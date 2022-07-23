import {counterReducer} from './countReducer/Reducer';
import {friendsReducer} from './addFriend/FriendsReducer';
import {combineReducers} from 'redux';
import RegisterReducer from './register/reducer';
import AuthReducer from './auth/reducer';

const rootReducer = combineReducers({
  counterReducer,
  friendsReducer,
  register: RegisterReducer,
  auth: AuthReducer,
});
export default rootReducer;

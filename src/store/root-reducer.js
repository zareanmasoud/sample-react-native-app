import {combineReducers} from 'redux';
import authentication from '../components/authentication/login/redux/reducer';
import profile from '../components/home/profile/redux/reducer';
import galleries from '../components/home/galleries/redux/reducer';
import handicrafts from '../components/handicrafts/redux/reducer';
import errors from '../components/error/redux/reducer';

const rootReducer = combineReducers({
  authentication,
  profile,
  galleries,
  handicrafts,
  errors,
});

export default rootReducer;

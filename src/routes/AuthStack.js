import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../components/authentication/login/index';
import SignUpScreen from '../components/authentication/sign-up/index';
import {SIGN_UP, LOGIN} from './constants';

export const AuthStack = createStackNavigator({
  [LOGIN]: {
    screen: LoginScreen,
  },
  [SIGN_UP]: {
    screen: SignUpScreen,
  }
});

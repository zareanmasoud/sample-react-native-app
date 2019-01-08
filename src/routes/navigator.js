import {createSwitchNavigator} from 'react-navigation';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {AuthLoading} from '../components/auth-loading';
import {APP, AUTH, AUTH_LOADING} from './constants';

export default createSwitchNavigator(
  {
    [AUTH_LOADING]: AuthLoading,
    [APP]: AppStack,
    [AUTH]: AuthStack,
  },
  {
    initialRouteName: AUTH_LOADING,
  }
);

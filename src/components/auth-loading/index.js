import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import Loader from '../shared/loader/index';
import {APP, LOGIN, SIGN_UP} from '../../routes/constants';
import {getAccessToken} from '../../utils/storage';
import {strings as _} from "../../locales/i18n";
import styles from './styles';

export class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.checkIsAuthenticated();
  }

  checkIsAuthenticated = () => {
    getAccessToken()
      .then(userToken => this.props.navigation.navigate(userToken && APP))
      .catch(() => {
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{_('welcome_to_artshop!')}</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate(LOGIN)}>
          <View style={styles.authButton}>
            <Text>{_('login')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate(SIGN_UP)}>
          <View style={styles.authButton}>
            <Text>{_('sign_up')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.authButton}>
            <Text>{_('login_with_google')}</Text>
          </View>
        </TouchableHighlight>
        {/*<Loader/>*/}
        {/*<StatusBar barStyle="default"/>*/}
      </View>
    );
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.object.isRequired
};

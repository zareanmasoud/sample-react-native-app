import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {TextInput, Text, TouchableOpacity, View} from 'react-native';
import {login} from './redux/actions';
import styles from './styles';
import {APP, LOGIN} from '../../../routes/constants';
import {strings as _} from '../../../locales/i18n';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: LOGIN,
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: `${_('login')}`,
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#FFB98068',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  userLogin(e) {
    this.props.onLogin(this.state.username, this.state.password);
    e.preventDefault();
  }

  componentDidUpdate() {
    this.props.isLoggedIn && this.props.navigation.navigate(APP);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{_(this.state.route)}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>{_('username')}</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            keyboardType='email-address'
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>{_('password')}</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}/>
        </View>
        <View style={styles.separator}/>
        <TouchableOpacity onPress={(e) => this.userLogin(e)}>
          <Text style={styles.loginButton}>{this.state.route}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, password) => {
      dispatch(login(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Galleries from './galleries';
import {strings as _} from '../../locales/i18n';
import styles from './styles';
import TabsNavigation from '../shared/tabs-navigation';
import {HOME} from "../../routes/constants";

class HomeScreen extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      navigation: this.props.navigation,
    })
  }

  static navigationOptions = ({navigation}) => {
    const {state} = navigation;
    if (state.params !== undefined)
    return {
      // title: `${_('galleries')}`,
      header: <TabsNavigation navigation={state.params.navigation} active={HOME}/>,
        headerStyle: {
        backgroundColor: '#D1F9F9F9',
      },
      headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Galleries navigation={this.props.navigation}/>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {strings as _} from '../../locales/i18n';
import TabsNavigation from '../shared/tabs-navigation';
import {SPECIAL_OFFER} from "../../routes/constants";
// import styles from './styles';

class SpecialOfferScreen extends Component {
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
      header: <TabsNavigation navigation={state.params.navigation} active={SPECIAL_OFFER}/>,
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
      <View>
        <Text>{_('welcome')}</Text>
      </View>
    );
  }
}

SpecialOfferScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SpecialOfferScreen;

import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {strings as _} from "../../../locales/i18n";
import {ARTWORKS, HOME, SPECIAL_OFFER} from "../../../routes/constants";

const TabsNavigation = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.toolbar]}>
        <View/>
        <Text>{(props.active === HOME)&&_('galleries')}</Text>
        <Text>{(props.active === ARTWORKS)&&_('artworks')}</Text>
        <Text>{(props.active === SPECIAL_OFFER)&&_('special_offer')}</Text>
        <View style={styles.search}/>
      </View>
      <View style={[styles.row, styles.tabs]}>
        <TouchableHighlight onPress={() => props.navigation.navigate(HOME)}>
          <View style={(props.active === HOME) && styles.selected}>
            <Text>{_('galleries')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate(ARTWORKS)}>
          <View style={(props.active === ARTWORKS) && styles.selected}>
            <Text>{_('artworks')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate(SPECIAL_OFFER)}>
          <View style={(props.active === SPECIAL_OFFER) && styles.selected}>
            <Text>{_('special_offer')}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
};

TabsNavigation.propTypes = {
  navigation: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired,
};

export default TabsNavigation;

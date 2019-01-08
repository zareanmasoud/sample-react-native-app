import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {strings as _} from '../../../locales/i18n';
import styles from './styles';

const Loader = props => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={props.size} color="#00ff00"/>
      <Text>{_('please_wait')}</Text>
    </View>
  );
};

Loader.defaultProps = {
  size: 'large'
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'large'])
};

export default Loader;

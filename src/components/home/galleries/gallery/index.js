import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {strings as _} from '../../../../locales/i18n';
import styles from './styles';
import {HANDICRAFTS, PAINTINGS} from '../../../../routes/constants';

const Gallery = props => {
  const {gallery, handleShowHandicrafts, handleShowPaintings} = props;
  const {id} = props.gallery;
  return (
    <View key={id} style={styles.gallery}>
      <Text style={styles.address}>{gallery.address}</Text>
      <Text style={styles.name}>{gallery['artist.name']}</Text>
      <View style={styles.panel}>
        {/*<TouchableOpacity onPress={() => handleShowHandicrafts(gallery)}>*/}
          {/*<Text style={styles.titleTextButton}>{_(PAINTINGS)}</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity onPress={() => handleShowPaintings(gallery)}>*/}
          {/*<Text style={styles.titleTextButton}>{_(HANDICRAFTS)}</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    </View>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.object.isRequired,
  handleShowHandicrafts: PropTypes.func.isRequired,
  handleShowPaintings: PropTypes.func.isRequired,
};

export default Gallery;

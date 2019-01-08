import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../../../styles/theme';
import {headingText, textButton} from '../../../../styles/common';
export default StyleSheet.create({
  container: {},
  gallery: {
    height: 120,
    width: 150,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 5,
    elevation: 2,
  },
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  address: {
    ...headingText,
    color: BLACK
  },
  name: {
    ...headingText,
    color: BLACK
  },
  titleTextButton: {
    ...textButton
  },
});

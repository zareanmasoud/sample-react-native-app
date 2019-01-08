import {bodyText} from '../../../../styles/common';
import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR_LIGHT, MODAL_SHADOW} from '../../../../styles/theme';

export default StyleSheet.create({
  // TODO: should style to modal's width
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
    flex: 4,
    justifyContent: 'space-between'
  },
  marginBox: {
    backgroundColor: MODAL_SHADOW,
    flex: 6,
  },
  close: {
    alignSelf: 'flex-end',
    fontSize: 30,
  },
  callToAction: {
    marginBottom: 10,
    ...bodyText
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

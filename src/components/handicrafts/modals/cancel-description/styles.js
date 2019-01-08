import {ACTIVE_STATUS_COLOR, BACKGROUND_COLOR_LIGHT, GRAY, MODAL_SHADOW} from '../../../../styles/theme';
import {bodyText} from '../../../../styles/common';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // TODO: should style to modal's width
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
    flex: 5,
    justifyContent: 'space-between'
  },
  marginBox: {
    backgroundColor: MODAL_SHADOW,
    flex: 5,
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
  textInput: {
    height: 40,
    borderColor: GRAY,
    borderWidth: 1,
    marginBottom: 10,
  },
  errorText: {
    color: ACTIVE_STATUS_COLOR,
  }
});

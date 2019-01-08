import {GRAY, WHITE} from '../../../styles/theme';
import {bodyText} from '../../../styles/common';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // TODO: should style to modal's width
  groupItems: {},
  actionRow: {
    ...bodyText,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
  },
  container: {
    padding: 5,
    // alignSelf: 'stretch',
    justifyContent: 'space-between'
  },
  hadicraft: {
    borderRadius: 2,
    backgroundColor: WHITE,
    padding: 5,
    margin: 5,
    elevation: 2,
  },
  angleIcon: {
    position: 'absolute',
    backgroundColor: GRAY,
    paddingStart: 9,
    paddingTop: 5,
    alignSelf: 'flex-end',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

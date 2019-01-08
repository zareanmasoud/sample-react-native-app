import {StyleSheet} from 'react-native';
import {BLUE, WHITE} from '../../../styles/theme';

export default StyleSheet.create({
  container: {padding: 20},
  loginButton: {
    backgroundColor: BLUE,
    color: WHITE,
    borderRadius: 5,
    padding: 10,
    width: 100,
    textAlign: 'center'
  },
  separator: {margin: 7},
  title: {alignSelf: 'flex-start'},
  row: {flexDirection: 'row'},
  inputText: {paddingStart: 5},
  label: {}
});

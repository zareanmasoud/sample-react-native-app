import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 80,
    marginTop: 40 /* only for IOS to give StatusBar Space */
  },
  toolbar: {
    justifyContent: 'flex-start',
  },
  search: {
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  tabs: {
    justifyContent: 'space-between',
  },
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});

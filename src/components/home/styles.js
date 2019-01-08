import {StyleSheet} from 'react-native';
import {CONTAINER_PADDING, BACKGROUND_COLOR_LIGHT} from '../../styles/theme';
import {headingText} from '../../styles/common';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: CONTAINER_PADDING,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
  },
  header: {
    ...headingText,
  },
});

import {
  TEXT_INPUT_PADDING,
  PRIMARY_COLOR,
  MEDIUM_FONT_TITLE_SIZE,
  WHITE,
  BLACK,
  LIGHT_GRAY,
  BUTTON_BLUE,
  FONT_NAME,
  BLUE
} from './theme';

export const headingText = {
  alignSelf: 'flex-start',
  padding: TEXT_INPUT_PADDING,
  color: PRIMARY_COLOR,
};

export const bodyText = {
  fontSize: MEDIUM_FONT_TITLE_SIZE
};

export const button = {
  backgroundColor: BUTTON_BLUE,
  borderRadius: 4,
  width: 100,
  padding: 5,
  color: WHITE,
  textAlign: 'center',
  marginTop: 10,
  marginLeft: 10,
};

export const negativeButton = {
  ...button,
  backgroundColor: 'red'
};

export const positiveButton = {
  ...button,
  backgroundColor: 'green'
};

export const basicButton = {
  ...button,
  backgroundColor: '#00000000',
  borderColor: 'blue',
  borderWidth: 2,
  color: 'blue'
};

export const defaultButton = {
  ...button,
  backgroundColor: LIGHT_GRAY,
  color: BLACK
};

export const textButton = {
  fontFamily: FONT_NAME,
  backgroundColor: BLUE,
  color: WHITE,
  borderRadius: 3,
  textAlign: 'center',
  width: 120,
  padding: 5,
};

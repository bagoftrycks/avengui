import {
  cyan500, cyan700,
  grey100, grey300, grey500,
  white, darkBlack, fullBlack,
  brown900,
  pinkA200,
} from 'material-ui/styles/colors';

import {
  fade,
} from 'material-ui/utils/colorManipulator';

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

export default {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 50,
  },
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: brown900,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  toolbar: {
    height: 50,
  },
  appBar: {
    color: darkBlack,
  },
};

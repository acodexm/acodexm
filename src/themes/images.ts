import theme from 'styled-theming';
import network from '../assets/svg/network.svg';
import keyboardLight from '../assets/images/keyboard_light.png';
import keyboardDark from '../assets/images/keyboard_dark.png';

export const sectionBackground = theme('mode', {
  light: `url(${network})`,
  dark: `url(${network})`
});
export const contactBackground = theme('mode', {
  light: `url(${keyboardLight})`,
  dark: `url(${keyboardDark})`
});

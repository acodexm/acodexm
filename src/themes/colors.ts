import theme from 'styled-theming';
export const backgroundColor = theme('mode', {
  light: '#c2c2c2',
  dark: '#424242'
});
export const section1Color = theme('mode', {
  light: '#808080',
  dark: '#1f1f1f'
});
export const section2Color = theme('mode', {
  light: '#c2c2c2',
  dark: '#424242'
});
export const cardColor = theme('mode', {
  light: `linear-gradient(${'#00cfff'}, ${'#007dff'})`,
  dark: `linear-gradient(${'#ff5900'}, ${'#712700'})`
});
export const textColor = theme('mode', {
  light: '#1f1f1f',
  dark: '#c2c2c2'
});
export const errorColor = theme('mode', {
  light: '#ff0000',
  dark: '#ff7700'
});
export const validColor = theme('mode', {
  light: '#00ff00',
  dark: '#00aa00'
});
export const linkColor = theme('mode', {
  light: '#ff5e00',
  dark: '#ffe49d'
});
export const highlightColor = theme('mode', {
  light: 'goldenrod',
  dark: 'goldenrod'
});
export const invertColor = theme('mode', {
  light: 'invert()',
  dark: 'unset'
});

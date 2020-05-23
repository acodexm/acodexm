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
export const helloColor = theme('mode', {
  light: '#78b8ff',
  dark: '#712700'
});
export const circleHighlightColor = theme('mode', {
  light: '#9cf3ff',
  dark: '#ff5900'
});
export const cardColor = theme('mode', {
  light: `linear-gradient(${'#9cf3ff'}, ${'#78b8ff'})`,
  dark: `linear-gradient(${'#ff5900'}, ${'#712700'})`
});
export const fieldColor = theme('mode', {
  light: `linear-gradient(${'rgba(156,243,255,0.5)'}, ${'rgba(120,184,255,0.5)'})`,
  dark: `linear-gradient(${'rgba(255,89,0,0.5)'}, ${'rgba(113,39,0,0.5)'})`
});
export const autocompleteFieldColor = theme('mode', {
  light: 'rgba(156,243,255,0.5)',
  dark: 'rgba(255,89,0,0.5)'
});
export const textColor = theme('mode', {
  light: '#1f1f1f',
  dark: '#d9d9d9'
});
export const inputTextColor = theme('mode', {
  light: '#000',
  dark: '#fff'
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

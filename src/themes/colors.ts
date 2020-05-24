import theme from 'styled-theming';
export const backgroundColor = theme('mode', {
  light: '#d0cece',
  dark: '#1f1f1f'
});
export const section1Color = theme('mode', {
  light: '#a1a1a1',
  dark: '#111111'
});
export const section2Color = theme('mode', {
  light: '#bfbebe',
  dark: '#1f1f1f'
});
export const helloColor = theme('mode', {
  light: '#3388d4',
  dark: '#ac2913'
});
export const circleHighlightColor = theme('mode', {
  light: '#9cf3ff',
  dark: '#ff5900'
});
export const cardColor = theme('mode', {
  light: `linear-gradient(${'#62dff1'}, ${'#3388d4'})`,
  dark: `linear-gradient(${'#ff5900'}, ${'#ac2913'})`
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
  light: '#1864bf',
  dark: '#ff6f00'
});
export const highlightColor = theme('mode', {
  light: '#4494f5',
  dark: '#ecb268'
});
export const invertColor = theme('mode', {
  light: 'invert()',
  dark: 'unset'
});

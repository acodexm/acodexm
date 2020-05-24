import React from 'react';
import styled, { css } from 'styled-components';
import { invertColor, section2Color, section1Color, textColor, backgroundColor } from '../../themes/colors';
import { sectionBackground, sectionSecondaryBackground } from '../../themes/images';

const Section = styled.section<{ mode: 'primary' | 'secondary' }>`
  & {
    background-attachment: fixed;
    background-size: cover;
    line-height: 1.8;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.mode === 'primary' ? section1Color : section2Color)};
    align-items: center;
    color: ${textColor};
    text-align: center;
    position: relative;
    min-height: 50vh;
    ${(props) =>
      props.mode === 'secondary'
        ? css`
            box-shadow: 50px 0 100px 0 ${backgroundColor};
          `
        : ''};
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: ${(props) => (props.mode === 'primary' ? sectionBackground : sectionSecondaryBackground)};
    opacity: 30%;
    filter: ${invertColor};
  }
`;

export default Section;

import React from 'react';
import styled from 'styled-components';
import { invertColor, section2Color, textColor } from '../../themes/colors';
import theme from 'styled-theming';

import net from '../../assets/images/net.png';
import network from '../../assets/svg/network.svg';
import { sectionBackground } from '../../themes/images';
const Section = styled.section`
  & {
    background-attachment: fixed;
    background-size: cover;
    line-height: 1.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${textColor};
    text-align: center;
    position: relative;
    min-height: 50vh;
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
    background-image: ${sectionBackground};
    opacity: 30%;
    filter: ${invertColor};
  }
`;

export default Section;

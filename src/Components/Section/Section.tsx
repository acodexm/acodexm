import React from 'react';
import styled from 'styled-components';
import { textColor } from '../../themes/colors';

const Section = styled.section`
  background-attachment: fixed;
  background-size: cover;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${textColor};
  text-align: center;
`;

export default Section;

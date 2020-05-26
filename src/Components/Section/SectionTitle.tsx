import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { textColor } from '../../themes/colors';

const Title = styled.div`
  z-index: 5;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
  .line_dots {
    width: 4px;
    height: 54.569px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  div {
    color: ${textColor};
    font-size: xx-large;
  }
`;
interface OwnProps {
  title: string;
}
type Props = OwnProps;
const SectionTitle: FunctionComponent<Props> = ({ title }) => {
  return (
    <Title>
      <svg className="line_dots" viewBox="0 0 2 54.569">
        <path
          fill="transparent"
          stroke="rgba(255,73,0,1)"
          strokeWidth="2px"
          strokeLinejoin="miter"
          strokeLinecap="butt"
          strokeDasharray="10"
          strokeDashoffset="0"
          strokeMiterlimit="4"
          shapeRendering="auto"
          id="Line_37_ft"
          d="M 0 0 L 0 54.568603515625"
        />
      </svg>
      <div>{title}</div>
    </Title>
  );
};

export default SectionTitle;

import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const WorkSection = styled.section`
  background-color: #1f1f1f;
  background-attachment: fixed;
  background-size: cover;
  line-height: 1.8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
interface Props {
  sectionRef:React.RefObject<HTMLElement>
}
const Work:FunctionComponent<Props> = ({sectionRef})=> {
  return <WorkSection ref={sectionRef} />;
};

export default Work;

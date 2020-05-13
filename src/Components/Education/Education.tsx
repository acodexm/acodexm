import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const EduSection = styled.section`
  background-color: #424242;
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
const Education:FunctionComponent<Props> = ({sectionRef})=> {
  return <EduSection ref={sectionRef}/>;
};

export default Education;

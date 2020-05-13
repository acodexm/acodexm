import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
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
const Projects:FunctionComponent<Props> = ({sectionRef})=> {
  return <ProjectsSection ref={sectionRef}/>
};

export default Projects;

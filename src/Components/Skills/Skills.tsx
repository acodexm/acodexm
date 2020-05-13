import React, { FunctionComponent } from 'react';
import Waves from '../Education/Waves/Waves';
import android from '../../assets/icons/android.png';
import IntelliJ from '../../assets/icons/IntelliJ.png';
import java from '../../assets/icons/java.png';
import typescript from '../../assets/icons/typescript.png';
import nodejs from '../../assets/icons/nodejs-512.png';
import python from '../../assets/icons/python.png';
import react from '../../assets/icons/react.png';
import redux from '../../assets/icons/redux.png';
import spring from '../../assets/icons/spring.png';
import styled from 'styled-components';

const icons = [
  {
    icon: react,
    url: 'https://reactjs.org',
    name: 'ReactJS'
  },
  {
    icon: typescript,
    url: 'https://www.typescriptlang.org/',
    name: 'TypeScript'
  },
  {
    icon: redux,
    url: 'https://redux.js.org',
    name: 'Redux'
  },
  {
    icon: nodejs,
    url: 'https://nodejs.org',
    name: 'Node.js'
  },
  {
    icon: spring,
    url: 'https://spring.io',
    name: 'Spring'
  },
  {
    icon: python,
    url: 'https://python.org',
    name: 'Python'
  },
  {
    icon: java,
    url: 'https://www.java.com',
    name: 'Java'
  },
  {
    icon: IntelliJ,
    url: 'https://www.jetbrains.com/idea/',
    name: 'Intellij'
  },
  {
    icon: android,
    url: 'https://www.android.com/',
    name: 'Android'
  }
];
const SkillsSection = styled.section`
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
const Skills:FunctionComponent<Props> = ({sectionRef})=> {
  return (
    <SkillsSection ref={sectionRef}>
      <Waves items={icons} />
    </SkillsSection>
  );
};

export default Skills;
